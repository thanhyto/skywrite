// Async function for loading data from file
async function loadData(dataType){
    dataFilePath = ''
    if (dataType === 'anchor'){
        dataFilePath = 'data/Anchorpoints_f.jsonl'
    }
    else if (dataType === 'noise'){
        dataFilePath = 'data/PATHS_f.jsonl'
    }
    else {
        dataFilePath = 'data/all_quotes_scaled_f.jsonl'
    }
    const response = await fetch(dataFilePath)
    const data = await response.text();
    return data.split('\n')
            .filter(line => line.trim())
            .map(JSON.parse)
            .map(item => ({
                x: item.x,
                y: item.y,
                quote: item.quote,
                type: item.type,
                class: item.class,
                color: item.color
            }))
}
// Create an empty svg container
function createSVG() {
    const marginTop = 50;
    const marginBottom = 50;
    const marginLeft = 40;
    const marginRight = 20;
    const width = 1000;
    const height = 750;

    const svg = d3.create("svg").attr("width", width).attr("height", height);
    svg
    .append("g")
    .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

    // Append a clipPath element to the SVG
    svg.append("defs").append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", width - marginLeft - marginRight)
        .attr("height", height - marginTop - marginBottom);

    // Append a group element to the SVG and apply the clip path
    const chartGroup = svg.append("g")
        .attr("clip-path", "url(#clip)")
        .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

    // Initialise an X axis:
    var x = d3.scaleLinear().range([marginLeft, width - marginRight]);
    var xAxis = d3.axisBottom().scale(x);
    svg
    .append("g")
    .attr("transform", `translate(0, ${height - marginBottom})`)
    .attr("class", "myXaxis");

    // Initialize an Y axis
    var y = d3.scaleLinear().range([height - marginBottom, marginTop]);
    var yAxis = d3.axisLeft().scale(y);
    svg
    .append("g")
    .attr("class", "myYaxis")
    .attr("transform", `translate(${marginLeft},0)`);

    return {svg, chartGroup, x, xAxis, y, yAxis};
}
// Create plot
function plotData(dataset, svg, chartGroup, x, xAxis, y, yAxis) {
    // Empty container on new draw and resets check boxes
    const container = document.getElementById("embedding-chart");
    console.log(dataset);
    container.innerHTML = "";
    svg.selectAll('circle').remove();
    svg.selectAll('path').remove();
    svg.selectAll('transition').remove();
    document.getElementById("delaunay_checkbox").checked = false;
    document.getElementById("voronoi_checkbox").checked = false;

    // Set up axes
    let xMin = d3.min(dataset, function(d){
        return d.x;
    })
    let xMax = d3.max(dataset, function(d){
        return d.x;
    })
    let yMin = d3.min(dataset, function(d){
        return d.y;
    })
    let yMax = d3.max(dataset, function(d){
        return d.y;
    })
    x.domain([xMin - 1, xMax+1]);
    svg.selectAll(".myXaxis").transition().duration(3000).call(xAxis);
    y.domain([yMin - 1, yMax+1]);
    svg.selectAll(".myYaxis").transition().duration(3000).call(yAxis);
    plotPoints(dataset, x, y, chartGroup);
    plotLine(dataset, x, y, chartGroup);
    // Clear button
    document.getElementById("clear").addEventListener("click", function(){
        svg.select(".curve-line").remove();
    });
    const delaunay = d3.Delaunay.from(
        dataset,
        (d) => x(d.x),
        (d) => y(d.y)
    )
    const voronoi = delaunay.voronoi([
        40, // marginLeft
        50, // marginTop
        1000, // width - marginRight,
        750 // height - marginBottom
    ])
    createDelaunayTriangles(chartGroup, delaunay);
    createVoronoiCells(dataset, chartGroup, voronoi);
    container.appendChild(svg.node());
}
// Create circle elements for each data point
function plotPoints(dataset, x, y, chartGroup){
    chartGroup.append('g')
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', (d) => x(d.x))
    .attr('cy', (d) => y(d.y))
    .attr('r',2)
    .attr('fill', (d) => d.color)
    .attr('class', function (d) {
        return "point a" + d.class;
    })
}
// Create a line that goes through red points
function plotLine(dataset, x, y, chartGroup){
    const path = chartGroup.append('path')
    .attr("class", "curve-line")
    .datum(dataset.filter(d => d.color == 'red'))
    .attr(
        "d",
        d3
            .line()
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y);
            })
            .curve(d3.curveCardinalClosed)
    )
    .attr("fill", "none")
    .attr("stroke-width", 2)
    .attr("stroke", "#777777");
    // Repeating line
    createRepeatingAnimation(path, 4000);
}
// Line animation
function createRepeatingAnimation(path, duration) {
    const length = path.node().getTotalLength();
    function repeat() {
        path
            .attr("stroke-dasharray", length + " " + length)
            .attr("stroke-dashoffset", length)
            .transition()
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0)
            .duration(duration)
            .on("end", () => setTimeout(repeat, duration));
    }
    repeat();
    addEndAnimationButton(path);
}
// Create Delaunay Triangles
function createDelaunayTriangles(chartGroup, delaunay){
    // Append Delaunay triangles
    chartGroup
    .append("g")
    .attr("class", "delaunay-triangles")
    .selectAll("path")
    .data(delaunay.trianglePolygons())
    .enter()
    .append("path")
    .attr("d", (d) => `M${d.join("L")}Z`)
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("stroke-width", 0.5)
    .attr("visibility", "hidden");
    // Add an event listener to the delaunay checkbox to listen for changes
    document
    .getElementById("delaunay_checkbox")
    .addEventListener("change", function () {
      if (this.checked) {
        d3
          .selectAll(".delaunay-triangles path")
          .attr("visibility", "visible"); // Change visibility to visible
      } else {
        d3
          .selectAll(".delaunay-triangles path")
          .attr("visibility", "hidden");
      }
    });
}
// Create Voronoi Cells
function createVoronoiCells(dataset, chartGroup, voronoi){
    // Append Voronoi cells
    chartGroup
    .append("g")
    .attr("class", "voronoi-cells")
    .selectAll("path")
    .data(dataset)
    .enter()
    .append("path")
    .attr("d", (d, i) => voronoi.renderCell(i))
    .attr("fill", "none")
    .attr("stroke", "blue")
    .style("pointer-events", "all")
    .attr("stroke-width", 0.7)
    .on("mouseover", mouseover)
    .attr("visibility", "hidden")
    .on("mouseleave", mouseleave);

  document
    .getElementById("voronoi_checkbox")
    .addEventListener("change", function () {
      // resetZoom();
      if (this.checked) {
        d3.selectAll(".voronoi-cells path").attr("visibility", "visible");
      } else {
        d3.selectAll(".voronoi-cells path").attr("visibility", "hidden");
      }
    });
}
// Add end animation button
function addEndAnimationButton(path) {
    let isEnded = false;

    // End animation button
    document.getElementById("end").addEventListener("click", function () {
        if (!isEnded) {
            // Jump to the end of the transition
            path
                .interrupt()
                .attr("stroke-dasharray", null)
                .attr("stroke-dashoffset", 0); // Draw all paths immediately
            isEnded = true;
        }
    });
}
// Add event listeners for buttons
function addButtonsDataEvent(buttonId){
    document.getElementById(buttonId).addEventListener("click", ()=>{
        return main(buttonId);
    })
}
// Add event listeners
addButtonsDataEvent('anchor');
addButtonsDataEvent('noise');
addButtonsDataEvent('quotes');
function mouseleave(event, d) {
        
    var element = d3.selectAll(".point.a" + d.class);
    // Hide the tooltip
    d3.select("#tooltip").style("display", "none");
    element.attr("r", 2).attr("fill", (d) => d.color);
}
function mouseover(event, d) {
    var element = d3.selectAll(".point.a" + d.class);
    // Get the tooltip element
    var tooltip = d3.select("#tooltip");
  
    // Set tooltip content and position
    tooltip
      .html("x: " + d.x + "<br>y: " + d.y
      + "<br>Sentence: " + d.quote)
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 10 + "px")
      .style("display", "block"); // Show the tooltip
  
    element.attr("r", 5).attr("fill", "#3b3b3b");
}
// Main function 
async function main(dataType){
    try {
    const dataset = await loadData(dataType);
    const {svg, chartGroup, x, xAxis, y, yAxis} = createSVG();
    plotData(dataset, svg, chartGroup, x, xAxis, y, yAxis);
    // Set up event listeners and interactions
    } catch (error) {
    console.error("Error loading data:", error);
    }
}
// Initialize the plot with anchor dataset
main('anchor');
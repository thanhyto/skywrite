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
    const redPoints = dataset.filter(d => d.color == 'red'); // Filter the dataset for red points
    const linePath = plotLine(redPoints, x, y, chartGroup); // Pass the filtered dataset to plotLine
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
    createRepeatingAnimation(linePath, 2000);
    // Apply zoom handler to SVG container
    const zoomHandler = d3
        .zoom()
        .scaleExtent([0.5, 10]) // set the range of allowed zoom scale
        .on("zoom", (event) => zoomed(event, svg, x, xAxis, y, yAxis, dataset, voronoi, linePath)); // call zoomed function on zoom event
    // Function to reset zoom
    document.getElementById("reset_zoom").addEventListener("click", () => resetZoom(svg, zoomHandler));
    // Apply zoom handler to SVG container
    svg.call(zoomHandler);
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
// Create line segments between pairs of red dots
function plotLine(dataset, x, y, chartGroup){
    /// Use d3.pairs to generate pairs of consecutive red dots
    const pairsOfRedDots = d3.pairs(dataset);

    // Initialize an empty selection
    const paths = chartGroup.selectAll(".line-segment").data(pairsOfRedDots);

    // Enter new data (pairs of consecutive red dots) and append a path for each pair
    const newPaths = paths
      .enter()
      .append("path")
      .attr("class", "line-segment")
      .attr("fill", "none")
      .attr("stroke", "#777777")
      .attr("stroke-width", 2)
      .attr("d", (d) => {
        return "";
      });

    // Update all paths with new data (pairs of consecutive red dots)
    const mergedPaths = newPaths
      .merge(paths)
      .transition()
      .delay((d, i) => i * 1000) // Adjust delay between segments as needed
      .duration(1000) // Adjust duration of each transition as needed
      .attr("d", (d) => {
        // Generate the path string for each line segment
        return `M ${x(d[0].x)} ${y(d[0].y)} L ${x(d[1].x)} ${y(d[1].y)}`;
      });

    // Remove any paths that no longer have corresponding data
    paths.exit().remove();

    return mergedPaths;
}

// Line animation
function createRepeatingAnimation(path, duration) {
    let isEnded = false;
    function repeat() {
        const length = path.node().getTotalLength(); // Recalculate length on each repeat
        path
            .attr("stroke-dasharray", length + " " + length)
            .attr("stroke-dashoffset", length)
            .transition()
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0)
            .duration(duration)
            .on("end", () => {
                if (!isEnded) {
                    setTimeout(repeat, duration);
                }
            });
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
// Define zoomed function outside of plotData
function zoomed(event, svg, x, xAxis, y, yAxis, dataset, voronoi, linePath) {
    const { transform } = event;

    // Adjust axes based on the current transform
    svg.select(".myXaxis").call(xAxis.scale(transform.rescaleX(x)));
    svg.select(".myYaxis").call(yAxis.scale(transform.rescaleY(y)));

    // Update points based on current transform
    svg.selectAll(".point")
        .attr("cx", (d) => transform.applyX(x(d.x)))
        .attr("cy", (d) => transform.applyY(y(d.y)));

    // Recalculate pointsData based on the current zoom transform
    const updatedPointsData = dataset
        .filter(d => d.color == 'red')
        .map(d => ({
        x: transform.applyX(x(d.x)),
        y: transform.applyY(y(d.y))
    }));
    linePath.interrupt();
    // Update the line path based on the transformed points
    linePath.datum(updatedPointsData)
        .attr("d", d3.line()
            .x((d) => d.x)
            .y((d) => d.y)
            .curve(d3.curveCardinalClosed)
    );
    createRepeatingAnimation(linePath, 2000);


    // Update Delaunay triangles based on current transform
    svg.selectAll(".delaunay-triangles path").attr("d", function(d) {
        const transformedPoints = d.map(point => transform.apply(point));
        return "M" + transformedPoints.join("L") + "Z";
    });

    // Update Voronoi cells based on current transform
    svg.selectAll(".voronoi-cells path").attr("d", function(d, i) {
        const cell = voronoi.cellPolygon(i);
        const transformedPoints = cell.map(point => transform.apply(point));
        return "M" + transformedPoints.join("L") + "Z";
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
// Define resetZoom function outside of plotData
function resetZoom(svg, zoomHandler) {
    svg.transition().duration(0).call(zoomHandler.transform, d3.zoomIdentity);
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
   var tooltipHTML = "x: " + d.x + "<br>y: " + d.y;
   if (d.quote) {
       tooltipHTML += "<br>Sentence: " + d.quote;
   }
   
   tooltip
     .html(tooltipHTML)
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
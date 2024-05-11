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
}
// Add event listeners for buttons
function addButtonsDataEvent(buttonId){
    document.getElementById(buttonId).addEventListener("click", ()=>{
        return main(buttonId);
    })
}
addButtonsDataEvent('anchor');
addButtonsDataEvent('noise');
addButtonsDataEvent('quotes');

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
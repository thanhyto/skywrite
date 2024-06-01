var currentPointSize = 5; // Default value

async function loadData(dataType) {
  dataFilePath = "";
  if (dataType === "sh") {
    dataFilePath = "data/all_sh_f.jsonl"
  } else {
    dataFilePath = "data/all_quotes_scaled_f.jsonl";
  }
  const response = await fetch(dataFilePath);
  const data = await response.text();
  return data
    .split("\n")
    .filter((line) => line.trim())
    .map(JSON.parse)
    .map((item) => ({
      x: item.x,
      y: item.y,
      quote: item.quote,
      type: item.type,
      class: item.class,
      color: item.color,
    }));
}

// Create slider for points size
var slider = document.getElementById("pointSizeSlider");
var pointSizeValue = document.getElementById("pointSizeValue");
pointSizeValue.innerHTML = slider.value;

// Create an empty svg container
function createSVG() {
  const marginTop = 50;
  const marginBottom = 50;
  const marginLeft = 40;
  const marginRight = 20;
  // Calculate the width of the .animate column
  const animateColumnWidth = document.querySelector('.animate').offsetWidth;

  let width = window.innerWidth - marginLeft - marginRight - animateColumnWidth;
  let height = window.innerHeight - marginTop - marginBottom - (window.innerHeight * .04);

  const svg = d3.create("svg").attr("width", width).attr("height", height);
  svg
    .append("g")
    .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

  // Append a clipPath element to the SVG
  svg
    .append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width - marginLeft - marginRight)
    .attr("height", height - marginTop - marginBottom);

  // Append a group element to the SVG and apply the clip path
  const chartGroup = svg
    .append("g")
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

  return { svg, chartGroup, x, xAxis, y, yAxis };
}

// Create plot
function plotData(dataset, svg, chartGroup, x, xAxis, y, yAxis) {
  // Empty container on new draw and resets check boxes
  const container = document.getElementById("embedding-chart");
  container.innerHTML = "";
  svg.selectAll("circle").remove();
  svg.selectAll("path").remove();
  svg.selectAll("transition").remove();
  document.getElementById("delaunay_checkbox").checked = false;
  document.getElementById("voronoi_checkbox").checked = false;

  const pointSize = slider.value;
  currentPointSize = pointSize; // Update global variable
  // Set up axes
  let xMin = d3.min(dataset, function (d) {
    return d.x;
  });
  let xMax = d3.max(dataset, function (d) {
    return d.x;
  });
  let yMin = d3.min(dataset, function (d) {
    return d.y;
  });
  let yMax = d3.max(dataset, function (d) {
    return d.y;
  });
  x.domain([xMin - 1, xMax + 1]);
  svg.selectAll(".myXaxis").transition().duration(3000).call(xAxis);
  y.domain([yMin - 1, yMax + 1]);
  svg.selectAll(".myYaxis").transition().duration(3000).call(yAxis);
  plotPoints(dataset, x, y, chartGroup, pointSize);
  const redPoints = dataset.filter((d) => d.color == "red"); // Filter the dataset for red points
  const linePath = plotLine(redPoints, x, y, chartGroup); // Pass the filtered dataset to plotLine
  // Clear button
  document.getElementById("clear").addEventListener("click", function () {
    svg.select(".curve-line").remove();
  });
  const delaunay = d3.Delaunay.from(
    dataset,
    (d) => x(d.x),
    (d) => y(d.y)
  );
  const voronoi = delaunay.voronoi([
    40, // marginLeft
    50, // marginTop
    1000, // width - marginRight,
    750, // height - marginBottom
  ]);
  createDelaunayTriangles(chartGroup, delaunay);
  createVoronoiCells(dataset, chartGroup, voronoi);
  createRepeatingAnimation(linePath, 2000);
  // Apply zoom handler to SVG container
  const zoomHandler = d3
    .zoom()
    .scaleExtent([0.5, 10]) // set the range of allowed zoom scale
    .on("zoom", (event) =>
      zoomed(event, svg, x, xAxis, y, yAxis, dataset, voronoi, linePath)
    ); // call zoomed function on zoom event
  // Function to reset zoom
  document
    .getElementById("reset_zoom")
    .addEventListener("click", () => {
      const svg = d3.select("svg")
      resetZoom(svg, zoomHandler)
    });
  // Apply zoom handler to SVG container
  svg.call(zoomHandler);
  container.appendChild(svg.node());
  // Add event listener to slider to update point sizes
  slider.oninput = function () {
    pointSizeValue.innerHTML = this.value;
    currentPointSize = this.value; // Update global variable
    updatePointSizes(chartGroup, this.value);
    updateEventListeners(chartGroup, this.value);
  };
}

// Create circle elements for each data point
function plotPoints(dataset, x, y, chartGroup, pointSize) {
  chartGroup
    .append("g")
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", pointSize)
    .attr("fill", (d) => d.color)
    .attr("class", function (d) {
      return "point a" + d.class;
    });
}

// Update the point sizes based on the slider value
function updatePointSizes(chartGroup, pointSize) {
  chartGroup.selectAll("circle").attr("r", pointSize);
}

// Create a line that goes through red points
function plotLine(dataset, x, y, chartGroup) {
  const path = chartGroup
    .append("path")
    .attr("class", "curve-line")
    .datum(dataset)
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
  return path;
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
function createDelaunayTriangles(chartGroup, delaunay) {
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
        d3.selectAll(".delaunay-triangles path").attr("visibility", "visible"); // Change visibility to visible
      } else {
        d3.selectAll(".delaunay-triangles path").attr("visibility", "hidden");
      }
    });
}

// Create Voronoi Cells
function createVoronoiCells(dataset, chartGroup, voronoi) {
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
    .on("mouseover", function (event, d) {
      mouseover(event, d);
    })
    .on("mouseleave", function (event, d) {
      mouseleave(event, d);
    })
    .attr("visibility", "hidden");

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
  svg
    .selectAll(".point")
    .attr("cx", (d) => transform.applyX(x(d.x)))
    .attr("cy", (d) => transform.applyY(y(d.y)));

  // Recalculate pointsData based on the current zoom transform
  const updatedPointsData = dataset
    .filter((d) => d.color == "red")
    .map((d) => ({
      x: transform.applyX(x(d.x)),
      y: transform.applyY(y(d.y)),
    }));
  linePath.interrupt();
  // Update the line path based on the transformed points
  linePath.datum(updatedPointsData).attr(
    "d",
    d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveCardinalClosed)
  );
  createRepeatingAnimation(linePath, 2000);

  // Update Delaunay triangles based on current transform
  svg.selectAll(".delaunay-triangles path").attr("d", function (d) {
    const transformedPoints = d.map((point) => transform.apply(point));
    return "M" + transformedPoints.join("L") + "Z";
  });

  
  // Update Voronoi cells based on current transform
  svg.selectAll(".voronoi-cells path").attr("d", function (d, i) {
    const cell = voronoi.cellPolygon(i);

    // Check if cell is null
    if (cell) {
      const transformedPoints = cell.map((point) => transform.apply(point));
      return "M" + transformedPoints.join("L") + "Z";
    } else {
      // Handle null cell, for example, by returning an empty string
      return "";
    }
  });
}

// Update event listeners for mouseover and mouseleave
function updateEventListeners(chartGroup, pointSize) {
  chartGroup.selectAll("circle")
    .on("mouseover", function (event, d) {
      mouseover(event, d);
    })
    .on("mouseleave", function (event, d) {
      mouseleave(event, d);
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
function addButtonsDataEvent(buttonId) {
  document.getElementById(buttonId).addEventListener("click", () => {
    return main(buttonId);
  });
}

// Define resetZoom function outside of plotData
function resetZoom(svg, zoomHandler) {
  svg.transition().duration(0).call(zoomHandler.transform, d3.zoomIdentity);
}

// Add event listeners
addButtonsDataEvent("quotes");
addButtonsDataEvent("sh");

async function startDrawing(datasetType){
  // Load your dataset based on the selected type
  const dataset = await loadData(datasetType);

  // Create the SVG container and other elements
  const { svg, chartGroup, x, xAxis, y, yAxis } = createSVG();

  // Plot the data
  plotData(dataset, svg, chartGroup, x, xAxis, y, yAxis);
}
function mouseleave(event, d) {
  var element = d3.selectAll(".point.a" + d.class);
  // Hide the tooltip
  d3.select("#tooltip").style("display", "none");
  element.attr("r", currentPointSize).attr("fill", (d) => d.color); // Use global variable
}

function mouseover(event, d) {
  var element = d3.selectAll(".point.a" + d.class);
  // Get the tooltip element
  var tooltip = d3.select("#tooltip");

  // Set tooltip content and position
  var tooltipHTML = "<strong>x: </strong>" + d.x + "<br><strong>y: </strong>" + d.y + "<br><strong>Type: </strong>" + d.type;
  if (d.quote) {
    tooltipHTML += "<br><strong>Sentence: </strong>" + d.quote;
  }
  if (d.author) {
    tooltipHTML += "<br><strong>Author: </strong>" + d.author;
  }
  // Get the dimensions of the options column and chart area
  var optionsColumn = document.querySelector('.animate');
  var chartArea = document.querySelector('.graph');

  var optionsColumnRect = optionsColumn.getBoundingClientRect();
  var chartAreaRect = chartArea.getBoundingClientRect();

  // Calculate the tooltip position
  var tooltipX = event.pageX + 10;
  var tooltipY = event.pageY - 10;

  // Adjust the tooltip position if it overlaps with the options column
  if (tooltipX + tooltip.node().offsetWidth > optionsColumnRect.left) {
    tooltipX = optionsColumnRect.left - tooltip.node().offsetWidth - 10;
  }

  // Ensure the tooltip stays within the chart area
  if (tooltipX < chartAreaRect.left) {
    tooltipX = chartAreaRect.left + 10;
  }
  if (tooltipY < chartAreaRect.top) {
    tooltipY = chartAreaRect.top + 10;
  }
  if (tooltipY + tooltip.node().offsetHeight > chartAreaRect.bottom) {
    tooltipY = chartAreaRect.bottom - tooltip.node().offsetHeight - 10;
  }
  tooltip
    .html(tooltipHTML)
    .style("left", event.pageX + 10 + "px")
    .style("top", event.pageY - 10 + "px")
    .style("display", "block"); // Show the tooltip

  element.attr("r", +currentPointSize + 3).attr("fill", "purple"); // Use global variable
}

// Main function
async function main(dataType) {
  try {
    const dataset = await loadData(dataType);
    const { svg, chartGroup, x, xAxis, y, yAxis } = createSVG();

    plotData(dataset, svg, chartGroup, x, xAxis, y, yAxis);

    // At event listener to start button
    document.getElementById('start').addEventListener('click', () => {
      startDrawing(dataType);
    })
    // Set up event listeners and interactions
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// Initialize the plot with anchor dataset
main("sh");

// Chart dimensions
const marginTop = 50;
const marginBottom = 50;
const marginLeft = 20;
const marginRight = 20;

const width = 1000;
const height = 750;

// Dataset
let noise = [
  { Index: 56, "2d": [1.1564289331, 3.9473571777] },
  { Index: 103, "2d": [0.3408281505, 2.8767299652] },
  { Index: 104, "2d": [0.2277360409, 3.0729014874] },
  { Index: 105, "2d": [0.5028944016, 4.9031953812] },
  { Index: 106, "2d": [3.4272880554, 7.8673567772] },
  { Index: 83, "2d": [0.3654969931, 4.6220097542] },
  { Index: 107, "2d": [1.3270442486, 3.054923296] },
  { Index: 108, "2d": [-0.2463615537, 5.0003738403] },
  { Index: 109, "2d": [-1.0138273239, 5.4754428864] },
  { Index: 110, "2d": [-1.5164740086, 7.5685501099] },
  { Index: 9, "2d": [-0.7347941399, 6.1391057968] },
  { Index: 111, "2d": [-0.2213277221, 6.298974514] },
  { Index: 112, "2d": [-0.2884388268, 6.9644780159] },
  { Index: 113, "2d": [-0.2552507818, 6.3410153389] },
  { Index: 114, "2d": [-1.6356812716, 7.1338319778] },
  { Index: 69, "2d": [-0.6038991809, 6.381316185] },
  { Index: 115, "2d": [0.8066408038, 3.0363414288] },
  { Index: 116, "2d": [-1.3778136969, 7.850110054] },
  { Index: 117, "2d": [-1.0691313744, 7.7489390373] },
  { Index: 118, "2d": [-1.3399378061, 7.6829714775] },
  { Index: 17, "2d": [-1.1921800375, 7.7880439758] },
  { Index: 119, "2d": [3.0479447842, 8.3348169327] },
  { Index: 120, "2d": [1.1644617319, 6.7705459595] },
  { Index: 121, "2d": [-0.9541316628, 7.9699749947] },
  { Index: 122, "2d": [3.3061280251, 7.796775341] },
  { Index: 37, "2d": [-0.6463442445, 8.120721817] },
  { Index: 123, "2d": [-0.3201387525, 8.3179674149] },
  { Index: 124, "2d": [-0.378675431, 8.4694423676] },
  { Index: 125, "2d": [-0.1480948627, 8.5169277191] },
  { Index: 126, "2d": [3.1018898487, 7.9286870956] },
  { Index: 84, "2d": [0.242925182, 9.072265625] },
  { Index: 127, "2d": [3.8617942333, 7.4516277313] },
  { Index: 128, "2d": [2.8937950134, 7.6332783699] },
  { Index: 129, "2d": [-0.0769695938, 8.8126087189] },
  { Index: 130, "2d": [1.4289392233, 9.2054338455] },
  { Index: 8, "2d": [0.9760932326, 8.1429328918] },
  { Index: 131, "2d": [-0.1769347489, 8.4301595688] },
  { Index: 132, "2d": [1.1818886995, 9.1100511551] },
  { Index: 133, "2d": [1.2096633911, 8.4495038986] },
  { Index: 134, "2d": [-0.1429388523, 8.7690267563] },
  { Index: 94, "2d": [1.7330358028, 9.0753545761] },
  { Index: 135, "2d": [1.1910170317, 8.9136257172] },
  { Index: 136, "2d": [1.3113452196, 8.6117353439] },
  { Index: 137, "2d": [1.5641798973, 9.0080223083] },
  { Index: 138, "2d": [1.7345494032, 9.1001682281] },
  { Index: 21, "2d": [2.6323876381, 8.886305809] },
  { Index: 139, "2d": [3.3252112865, 8.0904750824] },
  { Index: 140, "2d": [2.3618984222, 9.2077970505] },
  { Index: 141, "2d": [3.0362803936, 7.8646636009] },
  { Index: 142, "2d": [0.6885052323, 5.2593774796] },
  { Index: 5, "2d": [3.1945421696, 8.1107673645] },
  { Index: 143, "2d": [3.3481910229, 8.0565633774] },
  { Index: 144, "2d": [3.3435771465, 7.8929004669] },
  { Index: 145, "2d": [3.873718977, 7.0158410072] },
  { Index: 146, "2d": [3.7673664093, 7.5356454849] },
  { Index: 55, "2d": [3.4778985977, 7.5250849724] },
  { Index: 147, "2d": [3.5348260403, 7.8417358398] },
  { Index: 148, "2d": [2.738881588, 6.3164520264] },
  { Index: 149, "2d": [3.8413379192, 7.5341119766] },
  { Index: 150, "2d": [1.6879025698, 3.3515706062] },
  { Index: 19, "2d": [1.7011258602, 4.1184844971] },
  { Index: 151, "2d": [1.9475425482, 4.7103505135] },
  { Index: 152, "2d": [3.12272048, 7.8014745712] },
  { Index: 153, "2d": [1.0302779675, 3.1154475212] },
  { Index: 154, "2d": [1.0370776653, 3.2160513401] },
];
let anchor = [
  [1.1564289331, 3.9473571777],
  [0.3654969931, 4.6220097542],
  [-0.7347941399, 6.1391057968],
  [-0.6038991809, 6.381316185],
  [-1.1921800375, 7.7880439758],
  [-0.6463442445, 8.120721817],
  [0.242925182, 9.072265625],
  [0.9760932326, 8.1429328918],
  [1.7330358028, 9.0753545761],
  [2.6323876381, 8.886305809],
  [3.1945421696, 8.1107673645],
  [3.4778985977, 7.5250849724],
  [1.7011258602, 4.1184844971],
];

// Initialize an empty variable to hold pointsData
let pointsData = [];

// Initialize container in HTML and SVG for data
const container = document.getElementById("embedding-chart");

// Create SVG container
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

// Initialise a X axis:
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

// Select the buttons
const endAnimationButton = document.getElementById("end");

// Function to update data
function updateData(dataset) {
  pointsData = []; // Reset pointsData
  svg.selectAll("circle").remove(); // Remove old data
  svg.selectAll("path").remove(); // Remove old path
  svg.selectAll("transition").remove(); // Remove old transition
  document.getElementById("delaunay_checkbox").checked = false;
  document.getElementById("voronoi_checkbox").checked = false;

  if (dataset === "noise") {
    for (var i = 0; i < noise.length; i++) {
      let xVal = noise[i]["2d"][0];
      let yVal = noise[i]["2d"][1];
      let pointClass = noise[i]["Index"];
      pointsData.push({ x: xVal, y: yVal, class: pointClass });
    }
  } else {
    for (var i = 0; i < anchor.length; i++) {
      let xVal = anchor[i][0];
      let yVal = anchor[i][1];
      let pointClass = i;

      pointsData.push({ x: xVal, y: yVal, class: pointClass });
    }
  }
  // Find the minimum and maximum of x and y in pointsData
  let xMin = d3.min(pointsData, function (d) {
    return d.x;
  });
  let xMax = d3.max(pointsData, function (d) {
    return d.x;
  });
  let yMin = d3.min(pointsData, function (d) {
    return d.y;
  });
  let yMax = d3.max(pointsData, function (d) {
    return d.y;
  });

  // Scale
  // x-scale
  x.domain([xMin - 2, xMax + 2]);
  svg.selectAll(".myXaxis").transition().duration(3000).call(xAxis);
  // y-scale
  y.domain([yMin - 2, yMax + 2]);
  svg.selectAll(".myYaxis").transition().duration(3000).call(yAxis);

  function mouseleave(event, d) {
    var element = d3.selectAll(".point.a" + d.class);
    // Hide the tooltip
    d3.select("#tooltip").style("display", "none");
    element.attr("r", 3).attr("fill", "blue");
  }
  function mouseover(event, d) {
    var element = d3.selectAll(".point.a" + d.class);
    // Get the tooltip element
    var tooltip = d3.select("#tooltip");

    // Set tooltip content and position
    tooltip
      .html("x: " + d.x + "<br>y: " + d.y)
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 10 + "px")
      .style("display", "block"); // Show the tooltip

    element.attr("r", 8).attr("fill", "#3b3b3b");
  }
  // Add points
  chartGroup
    .append("g")
    .selectAll("circle")
    .data(pointsData)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 3)
    .attr("fill", "blue")
    .attr("class", function (d, i) {
      return "point a" + d.class;
    });

  // Create a line using curveCardinalClosed to go through all the circles
  var path = chartGroup
    .append("path")
    .attr("class", "curve-line")
    .datum(pointsData)
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

  // Create a repeating animation for the line
  const length = path.node().getTotalLength();
  function repeat() {
    path
      .attr("stroke-dasharray", length + " " + length)
      .attr("stroke-dashoffset", length)
      .transition()
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)
      .duration(4000)
      .on("end", () => setTimeout(repeat, 1000));
  }

  repeat();
  let isEnded = false;

  // End animation button
  document.getElementById("end").addEventListener("click", function () {
    if (!isEnded) {
      // Jump to the end of the transition
      path
        .interrupt()
        .attr("stroke-dasharray", length + "," + length)
        .attr("stroke-dashoffset", 0); // Draw all paths immediately
      isEnded = true;
    }
  });
  // Create Delaunay triangles
  const delaunay = d3.Delaunay.from(
    pointsData,
    (d) => x(d.x),
    (d) => y(d.y)
  );

  // Create voronoi cells
  const voronoi = delaunay.voronoi([
    marginLeft,
    marginTop,
    width - marginRight,
    height - marginBottom,
  ]);
  // console.log(voronoi);

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

  // Add an event listener to the checkbox to listen for changes
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


  // Append Voronoi cells
  chartGroup
    .append("g")
    .attr("class", "voronoi-cells")
    .selectAll("path")
    .data(pointsData)
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

  document.getElementById("clear").addEventListener("click", function () {
    svg.select(".curve-line").remove();
   
  });
  // Create a zoom handler
  const zoomHandler = d3
    .zoom()
    .scaleExtent([0.5, 10]) // set the range of allowed zoom scale
    .on("zoom", zoomed); // call zoomed function on zoom event

  // Apply zoom handler to SVG container
  svg.call(zoomHandler);

  // Function to handle zooming
  function zoomed(event) {
    // Get current transform state
    svg.select(".curve-line").remove();
    // d3.selectAll(".voronoi-cells path").attr("visibility", "hidden");
    d3.selectAll(".delanauy-triangles path").attr("visibility", "hidden");

    const { transform } = event;

    // Update axes based on current transform
    svg.select(".myXaxis").call(xAxis.scale(transform.rescaleX(x)));
    svg.select(".myYaxis").call(yAxis.scale(transform.rescaleY(y)));

    // Update points and Voronoi cells based on current transform
    svg
      .selectAll(".point")
      .attr("cx", (d) => transform.applyX(x(d.x)))
      .attr("cy", (d) => transform.applyY(y(d.y)));

    
    // Update Delaunay triangles based on current transform
    svg.selectAll(".delaunay-triangles path").attr("d", function(d) {
      const transformedPoints = d.map((point) => transform.apply(point));
      return "M" + transformedPoints.join("L") + "Z";
    });

    // Update Voronoi cells based on current transform
    svg.selectAll(".voronoi-cells path").attr("d", function(d, i) {
      const cell = voronoi.cellPolygon(i);
      const transformedPoints = cell.map(point => transform.apply(point));
      return "M" + transformedPoints.join("L") + "Z";
    });
}

  // Function to reset zoom
  function resetZoom() {
    svg.transition().duration(0).call(zoomHandler.transform, d3.zoomIdentity);
  }
  document.getElementById("reset_zoom").addEventListener("click", resetZoom);
}

updateData("anchor");

// Append the SVG element to the container
container.appendChild(svg.node());
// Chart dimensions
const marginTop = 50;
const marginBottom = 50;
const marginLeft = 40;
const marginRight = 20;
const width = 1000;
const height = 750;

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

// Asynchronously load PATHS data
async function loadPathsData() {
  const response = await fetch('./data/PATHS.jsonl');
  const data = await response.text();
  return data.split('\n')
             .filter(line => line.trim())
             .map(JSON.parse)
             .map(item => ({
               Index: item.Index,
               embed_2d: item['2d'],
               embed_1536d: item['1536'],
               quote: item.quote
             }));
}

// Asynchronously load Anchorpoints data
async function loadAnchorPointsData() {
  const response = await  fetch('./data/Anchorpoints.jsonl');
  const data = await response.text();
  return data.split('\n')
             .filter(line => line.trim())
             .map(JSON.parse)
             .map(item => ({
               embed_2d: item.Anchor2d,
               quote: item.quote
             }));
}

async function loadQuotesData(){
  const response = await fetch('./data/quotes_scaled.jsonl');
  const data = await response.text();
  return data.split('\n')
            .filter(line => line.trime())
            .map(JSON.parse)
            .map(item => ({
              x: item["x"],
              y: item["y"],
              quote: item["quote"],
              author: item["author"],
              color: 'blue'
            }))
}

async function loadHeartData(){
  const response = await fetch('./data/heart_scaled.jsonl');
  const data = await response.text();
  return data.split('\n')
            .filter(line => line.trime())
            .map(JSON.parse)
            .map(item => ({
              x: item.x,
              y: item.y,
              color: 'red'
            }))
}
function mouseleave(event, d) {
        
  var element = d3.selectAll(".point.a" + d.class);
  // Hide the tooltip
  d3.select("#tooltip").style("display", "none");
  element.attr("r", 3).attr("fill", (d) => d.color);
}
function mouseover(event, d) {
  var element = d3.selectAll(".point.a" + d.class);
  // Get the tooltip element
  var tooltip = d3.select("#tooltip");

  // Set tooltip content and position
  tooltip
    .html("x: " + d.x + "<br>y: " + d.y
    + "<br>Sentence: " + d.string)
    .style("left", event.pageX + 10 + "px")
    .style("top", event.pageY - 10 + "px")
    .style("display", "block"); // Show the tooltip

  element.attr("r", 8).attr("fill", "#3b3b3b");
}
async function initData(dataset) {
  const container = document.getElementById("embedding-chart");
  container.innerHTML = "";
  let data;
  let heart, quotes;
  try {
    if(dataset  === "noise"){
      data = await loadPathsData(); // Load PATHS data asynchronously

    }
    else if(dataset === "quotes"){
      heart = await loadHeartData();
      quotes = await loadQuotesData();
      data = quotes.concat(heart);

    }
    else{
      data = await loadAnchorPointsData(); // Load Anchorpoints data asynchronously
    }
   
    console.log('load data', data)

    // Function to update data
    function updateData(dataset, str_name) {
      console.log("CURR DATA: ",dataset);
      pointsData = []; // Reset pointsData
      svg.selectAll("circle").remove(); // Remove old data
      svg.selectAll("path").remove(); // Remove old path
      svg.selectAll("transition").remove(); // Remove old transition
      document.getElementById("delaunay_checkbox").checked = false;
      document.getElementById("voronoi_checkbox").checked = false;
      
      if (str_name === 'noise') {
        for (var i = 0; i < dataset.length; i++) {
          let xVal = dataset[i]['embed_2d'][0];
          let yVal = dataset[i]['embed_2d'][1];
          let pointClass = dataset[i]['Index'];
          let quote = dataset[i]['quote'];
          // console.log(pointClass);
          if (pointClass < 99){ 
            pointsData.push({ x: xVal, y: yVal, class: pointClass, string: quote, color: 'red'});
          }else{
            pointsData.push({ x: xVal, y: yVal, class: pointClass, string: quote, color: 'blue'});
          }
        }
      } else {
        console.log("anchorpoints pls: ");
        for (var i = 0; i < dataset.length; i++) {
          let xVal = dataset[i]["embed_2d"][0];
          let yVal = dataset[i]["embed_2d"][1];
          let quote = dataset[i]['quote']
          let pointClass = i;

          pointsData.push({ x: xVal, y: yVal, class: pointClass, string: quote, color: 'red'});
        }
        console.log("points data: ",pointsData);
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
        .attr("fill", (d) => d.color)
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

    if (svg) {
      container.appendChild(svg.node());
    } else {
      console.error("SVG is not properly initialized.");
    }
    

    } catch (error) {
      console.error("Error loading data:", error);
    }

    // // Add the SVG node to the container, making sure it's not null or undefined
    // if (svg) {
    //   container.appendChild(svg.node());
    // } else {
    //   console.error("SVG is not properly initialized.");
    // }
    
    //data = actual data, dataset === name of dataset
    updateData(data, dataset);
    
  }
  


initData();


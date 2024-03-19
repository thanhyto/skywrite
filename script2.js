// Chart dimensions
const marginTop = 50;
const marginBottom = 50;
const marginLeft = 20;
const marginRight = 20;

const width = 1000;
const height = 750;
// Fetch data
// {"Anchor2d":[1.1564289331,3.9473571777]}
// {"Anchor2d":[0.3654969931,4.6220097542]}
// {"Anchor2d":[-0.7347941399,6.1391057968]}
// {"Anchor2d":[-0.6038991809,6.381316185]}
// {"Anchor2d":[-1.1921800375,7.7880439758]}
// {"Anchor2d":[-0.6463442445,8.120721817]}
// {"Anchor2d":[0.242925182,9.072265625]}
// {"Anchor2d":[0.9760932326,8.1429328918]}
// {"Anchor2d":[1.7330358028,9.0753545761]}
// {"Anchor2d":[2.6323876381,8.886305809]}
// {"Anchor2d":[3.1945421696,8.1107673645]}
// {"Anchor2d":[3.4778985977,7.5250849724]}
// {"Anchor2d":[1.7011258602,4.1184844971]}

const points = [];
let xMin,
  xMax,
  yMin,
  yMax = 0;
async function fetchData() {
  try {
    const response = await fetch("/data/PATHS.jsonl");
    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }
    const text = await response.text(); // Read response as text

    // Split text into lines and parse each line as JSON
    const lines = text.trim().split("\n");
    const data = lines.map((line) => JSON.parse(line));
    for (let i = 0; i < data.length; i++) {
      let x = data[i]["2d"][0];
      let y = data[i]["2d"][1];
      points.push({ x: x, y: y });
    }

    // Now that points array is populated, calculate min and max values
    xMin = points[0].x;
    xMax = points[0].x;
    yMin = points[0].y;
    yMax = points[0].y;

    for (let i = 1; i < points.length; i++) {
      if (points[i].x < xMin) {
        xMin = points[i].x;
      }
      if (points[i].x > xMax) {
        xMax = points[i].x;
      }
      if (points[i].y < yMin) {
        yMin = points[i].y;
      }
      if (points[i].y > yMax) {
        yMax = points[i].y;
      }
    }

    console.log("xMin:", xMin);
    console.log("xMax:", xMax);
    console.log("yMin:", yMin);
    console.log("yMax:", yMax);
    const container = document.getElementById("embedding-chart");

    // Scale
    // x-scale
    const x = d3
      .scaleLinear()
      .domain([xMin - 2, xMax + 2])
      .range([marginLeft, width - marginRight]);
    // y-scale
    const y = d3
      .scaleLinear()
      .domain([yMin - 2, yMax + 2])
      .range([height - marginBottom, marginTop]);

    // Create svg container
    const svg = d3.create("svg").attr("width", width).attr("height", height);

    // Add x axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - marginBottom})`)
      .call(d3.axisBottom(x));

    // Add y axis
    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y));

    // // Add points
    svg
      .append("g")
      .selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.y))
      .attr("r", 5)
      .attr("fill", "red");

    const line = d3
      .line()
      .x((d) => x(d.x))
      .y((d) => y(d.y))
      .curve(d3.curveCardinalClosed);
    // Add path
    var path = svg
      .append("path")
      .attr("d", line(points))
      .attr("fill", "none")
      .attr("stroke-width", 2)
      .attr("stroke", "darkgrey");

    const length = path.node().getTotalLength();

    function repeat() {
      path
        .attr("stroke-dasharray", length + " " + length)
        .attr("stroke-dashoffset", length)
        .transition()
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0)
        .duration(6000)
        .on("end", () => setTimeout(repeat, 1000));
    }

    repeat();

    container.append(svg.node());
  } catch (error) {
    console.error("Error fetching JSON: ", error);
  }
}

fetchData(); // Call the async function to fetch data
console.log(points);

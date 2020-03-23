PIXEL_WIDTH = 32;
PIXEL_HEIGHT = 32;
SENSOR_LOG_FILE = "/static/data/ir_sensor.json"

// set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 30, left: 30},
  width = 600 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#app")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
var myX = [...Array(PIXEL_WIDTH).keys()];
var myY = [...Array(PIXEL_HEIGHT).keys()];

// Build X scales:
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myX)
  .padding(0.01);

// Build X scales:
var y = d3.scaleBand()
  .range([ 0, height ])
  .domain(myY)
  .padding(0.01);

// Build color scale
var myColor = d3.scaleLinear()
  .range(["#191970", "#B22222"])
  .domain([10,40])

// Unique Key from coordinates
const createKeyFromCoordinate = (x,y) => x + '-' + y

// Build starter heatmap
const data = [];
myX.forEach(x => {
  myY.forEach(y => data.push({ x: x, y: y, value: 0 }))
})

svg.selectAll()
  .data(data, d => {
    d ? d.x+':'+d.y : this.id;
  })
  .enter()
  .append("rect")
  .attr("x", function(d) {
    return x(d.x)
  })
  .attr("id", d => d ? createKeyFromCoordinate(d.x, d.y) : this.id )
  .attr("y", function(d) { return y(d.y) })
  .attr("width", x.bandwidth() )
  .attr("height", y.bandwidth() )
  .style("fill", function(d) { return myColor(d.value)} )

const fetchSensorLog = cb => {
  fetch(SENSOR_LOG_FILE).then(res => {
    if (res.ok) {
      res.json().then(data => {
        cb(data)
      });
    } else {
      console.log("Cannot parse sensor log", res.status);
    }
  })
}

const updateHeatMap = data => {
  data.forEach(d => {
    const rect =  document.getElementById(createKeyFromCoordinate(d.x, d.y));
    rect.style = `fill: ${myColor(d.value)}`
  })
}

fetchSensorLog(d => {
  updateHeatMap(d)
})

setInterval(() => {
  fetchSensorLog(d => {
    updateHeatMap(d)
  })
}, 100)

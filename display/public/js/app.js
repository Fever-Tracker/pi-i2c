
console.log("app.js")

// set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 30, left: 30},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#App")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
var myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

// Build X scales and axis:
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myGroups)
  .padding(0.01);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))

// Build X scales and axis:
var y = d3.scaleBand()
  .range([ height, 0 ])
  .domain(myVars)
  .padding(0.01);
svg.append("g")
  .call(d3.axisLeft(y));

// Build color scale
var myColor = d3.scaleLinear()
  .range(["white", "#69b3a2"])
  .domain([1,100])

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function(data) {

  svg.selectAll()
      .data(data, function(d) {return d.group+':'+d.variable;})
      .enter()
      .append("rect")
      .attr("x", function(d) { return x(d.group) })
      .attr("y", function(d) { return y(d.variable) })
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColor(d.value)} )

})


// const shapes = [
//   [
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#F00",
//     "#F00",
//     "#000",
//     "#000",
//     "#F00",
//     "#F00",
//     "#000",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#000",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#000",
//     "#000",
//     "#000",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#F00",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#F00",
//     "#F00",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000"
//   ],
//   [
//     "#000",
//     "#000",
//     "#0F0",
//     "#0F0",
//     "#0F0",
//     "#0F0",
//     "#000",
//     "#000",
//     "#000",
//     "#0F0",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#0F0",
//     "#000",
//     "#0F0",
//     "#000",
//     "#0F0",
//     "#000",
//     "#000",
//     "#0F0",
//     "#000",
//     "#0F0",
//     "#0F0",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#0F0",
//     "#0F0",
//     "#000",
//     "#0F0",
//     "#000",
//     "#000",
//     "#0F0",
//     "#000",
//     "#0F0",
//     "#0F0",
//     "#000",
//     "#000",
//     "#0F0",
//     "#0F0",
//     "#000",
//     "#000",
//     "#0F0",
//     "#000",
//     "#0F0",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#0F0",
//     "#000",
//     "#000",
//     "#000",
//     "#0F0",
//     "#0F0",
//     "#0F0",
//     "#0F0",
//     "#000",
//     "#000"
//   ],
//   [
//     "#000",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#000",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#000",
//     "#000",
//     "#000",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#FFF",
//     "#000",
//     "#000"
//   ]
// ];
//
// class App {
//   constructor() {
//     this.tiles = 8;
//     this.shape = 0;
//     this.render();
//   }
//   setShape = (shape) => {
//     this.shape = shape;
//     this.render();
//   }
//   render () {
//     const element = document.getElementById('App');
//     element.innerHTML = "";
//     const shape = shapes[this.shape];
//     shape.map((color, index) => {
//       const row = document.createElement("span");
//       row.className="row";
//       row.style = `background: ${color}; flex: 0 0 12.5vw; padding-bottom: 12.5vw`;
//       element.appendChild(row);
//     })
//   }
// }
//
// const foo = new App();
// setInterval(() => {
//   foo.setShape(Math.floor(Math.random() * shapes.length))
// }, 1000);

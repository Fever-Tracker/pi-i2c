
const shapes = [
  [
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#F00",
    "#F00",
    "#000",
    "#000",
    "#F00",
    "#F00",
    "#000",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#000",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#000",
    "#000",
    "#000",
    "#F00",
    "#F00",
    "#F00",
    "#F00",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#F00",
    "#F00",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000"
  ],
  [
    "#000",
    "#000",
    "#0F0",
    "#0F0",
    "#0F0",
    "#0F0",
    "#000",
    "#000",
    "#000",
    "#0F0",
    "#000",
    "#000",
    "#000",
    "#000",
    "#0F0",
    "#000",
    "#0F0",
    "#000",
    "#0F0",
    "#000",
    "#000",
    "#0F0",
    "#000",
    "#0F0",
    "#0F0",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#000",
    "#0F0",
    "#0F0",
    "#000",
    "#0F0",
    "#000",
    "#000",
    "#0F0",
    "#000",
    "#0F0",
    "#0F0",
    "#000",
    "#000",
    "#0F0",
    "#0F0",
    "#000",
    "#000",
    "#0F0",
    "#000",
    "#0F0",
    "#000",
    "#000",
    "#000",
    "#000",
    "#0F0",
    "#000",
    "#000",
    "#000",
    "#0F0",
    "#0F0",
    "#0F0",
    "#0F0",
    "#000",
    "#000"
  ],
  [
    "#000",
    "#000",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#000",
    "#000",
    "#000",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#000",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#000",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#000",
    "#FFF",
    "#FFF",
    "#000",
    "#000",
    "#FFF",
    "#FFF",
    "#000",
    "#000",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#000",
    "#000",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#000",
    "#000",
    "#000",
    "#000",
    "#FFF",
    "#FFF",
    "#FFF",
    "#FFF",
    "#000",
    "#000"
  ]
];

class App {
  constructor() {
    this.tiles = 8;
    this.shape = 0;
    this.render();
  }
  setShape = (shape) => {
    this.shape = shape;
    this.render();
  }
  render () {
    const element = document.getElementById('App');
    element.innerHTML = "";
    const shape = shapes[this.shape];
    shape.map((color, index) => {
      const row = document.createElement("span");
      row.className="row";
      row.style = `background: ${color}; flex: 0 0 12.5vw; padding-bottom: 12.5vw`;
      element.appendChild(row);
    })
  }
}

const foo = new App();
setInterval(() => {
  foo.setShape(Math.floor(Math.random() * shapes.length))
}, 1000);

const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters (Used inside shape for logo):",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color:",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color:",
  },
  {
    type: "list",
    name: "image",
    message: "Select your image:",
    choices: ["Circle", "Square", "Triangle"],
  },
];

class Svg {
  constructor() {
    this.shapeElement = "";
    this.textElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {});

  if (answers.text.length < 0 && answers.text.length > 3) {
    console.log("Invalid logo name, please try again.");
    return;
  }

  console.log(`User text: ${inquirerResponses.text}`);
  console.log(`User text color: ${inquirerResponses["textColor"]}`);
  console.log(`User shape color: ${inquirerResponses["shapeColor"]}`);
  console.log(`User shape: ${inquirerResponses["image"]}`);

  let userShape;
  switch (inquirerResponses["image"]) {
    case "square":
      userShape = new Square();
      break;
    case "Square":
      userShape = new Square();
      break;
    case "triangle":
      userShape = new Triangle();
      break;
    case "Triangle":
      userShape = new Triangle();
      break;
    case "Circle":
      userShape = new Circle();
      break;
    case "circle":
      userShape = new Circle();
      break;
    default:
      console.log("Invalid shape, please try again.");
  }

  userShape.setColor(inquirerResponses["shapeColor"]);

  let svg = new Svg();
  svg.setTextElement(logoName, inquirerResponses["textColor"]);
  svg.setShapeElement(userShape);
  svgString = svg.render();

  writeToFile(svg_file, svgString);
}

init();

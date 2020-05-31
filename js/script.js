var divSquare = document.getElementById("square");
var inputColor = document.getElementById("color");
var txtAreaValueCSS = document.getElementById("valueCSS");
// var inputHeight = document.getElementById("height");
// var inputWidth = document.getElementById("width");
var inputRadiusTopLeft = document.getElementById("TopLeft");
var inputRadiusTopRight = document.getElementById("TopRight");
var inputRadiusBottomLeft = document.getElementById("BottomLeft");
var inputRadiusBottomRight = document.getElementById("BottomRight");

var color = "#000000";
const paranInitial = "400";
const radiusInitial = "0"

var height = paranInitial;
var width = paranInitial;
var topLef = radiusInitial;
var botLef = radiusInitial;
var topRig = radiusInitial;
var botRig = radiusInitial;

//Add Events
inputColor.addEventListener("input", setColors, false);
// inputHeight.addEventListener("input", setHeightAndWidth, false);
// inputWidth.addEventListener("input", setHeightAndWidth, false);
inputRadiusTopRight.addEventListener("input", setRadius, false);
inputRadiusTopLeft.addEventListener("input", setRadius, false);
inputRadiusBottomLeft.addEventListener("input", setRadius, false);
inputRadiusBottomRight.addEventListener("input", setRadius, false);

//Function set color to square and add css in text-area
function setColors() {
  color = inputColor.value

  //Change color div square
  divSquare.style.backgroundColor = color;
  addStringInTextArea()
};

// //Function set Height and Width to square and add css in text-area
// function setHeightAndWidth() {
//   height = inputHeight.value != "" ? inputHeight.value : paranInitial;
//   width = inputWidth.value != "" ? inputWidth.value : paranInitial;

//   //Set width and height in square
//   divSquare.style.width = `${width}px`;
//   divSquare.style.height = `${height}px`;
//   addStringInTextArea()
// };

function setRadius() {
  topLef = inputRadiusTopLeft.value != "" ? inputRadiusTopLeft.value : radiusInitial;
  topRig = inputRadiusTopRight.value != "" ? inputRadiusTopRight.value : radiusInitial;
  botRig = inputRadiusBottomRight.value != "" ? inputRadiusBottomRight.value : radiusInitial;
  botLef = inputRadiusBottomLeft.value != "" ? inputRadiusBottomLeft.value : radiusInitial;

  //Set radius in square
  divSquare.style.borderRadius = `${topLef}% ${topRig}% ${botRig}% ${botLef}%`;
  addStringInTextArea()
}

//Add string css in text-area
function addStringInTextArea() {
  txtAreaValueCSS.innerText = `background-color: ${color};\n
                              border-radius: ${topLef}% ${topRig}% ${botRig}% ${botLef}%;`
}

function copy() {
  let copyTxt = document.querySelector("#valueCSS")
  copyTxt.select()
  copyTxt.setSelectionRange(0, 99999)

  document.execCommand("copy")
}
const container = document.querySelector("#container");

const pixelSize = 16;
fillGrid(pixelSize);

const clearSketchButton = document.querySelector("button");

clearSketchButton.addEventListener("click", clearSketchPad);
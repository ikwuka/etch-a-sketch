const container = document.querySelector("#container");

const pixelSize = 16;
fillGrid(pixelSize);

const clearSketchButton = document.querySelector("button");

clearSketchButton.addEventListener("click", clearSketchPad);

function fillGrid(pixelSize) {
  const gridCount = pixelSize * pixelSize;
  for (let i = 0; i < gridCount; i++) {
    const divElement = document.createElement("div");
    container.appendChild(divElement);
    divElement.classList.add("square");

    divElement.addEventListener("mouseenter", function () {
      divElement.style.backgroundColor = randomColor();
    });
  }
  container.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;
}

function randomColor() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  return `rgb(${randomRed}, ${randomGreen},${randomBlue})`;
}

function clearSketchPad() {
  let pixelSize;
  do {
    pixelSize = parseInt(prompt("How many number of squares do you wish to play per side? (1-100)"));
  } while (pixelSize < 1 || pixelSize > 100 || Number.isNaN(pixelSize));
  const existingSquares = document.querySelectorAll(".square");
  existingSquares.forEach((element) => {
    element.classList.add("deleting");
    setTimeout(() => {
      container.removeChild(element);
    }, 700);
  });
  setTimeout(() => {
    fillGrid(pixelSize);
  }, 700);
}
const gridContainer = document.querySelector(".grid");
const clearButton = document.querySelector(".clear");

const drawGrid = () => {
  const DEFAULT_SIZE = 16;

  gridContainer.style.width = "960px";
  gridContainer.style.height = "700px";
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateRows = `repeat(${DEFAULT_SIZE}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${DEFAULT_SIZE}, 1fr)`;
  gridContainer.style.border = "4px solid black";

  for (let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++) {
    let gridSquares = document.createElement("div");

    gridSquares.addEventListener("mouseover", () => {
      gridSquares.classList.add("square");
    });

    gridContainer.appendChild(gridSquares);
  }
};

const drawNewGrid = (size) => {
  size = parseInt(prompt("Enter a number between 1 - 100 for your grid size."));

  if (size < 1 || size > 100) {
    alert("Please enter a number between 1 - 100.");
    drawGrid();
  } else {
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      let gridSquares = document.createElement("div");

      gridSquares.addEventListener("mouseover", () => {
        gridSquares.classList.add("square");
      });

      gridContainer.appendChild(gridSquares);
    }
  }
};

const clearGrid = () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  drawNewGrid();
};

drawGrid();

clearButton.addEventListener("click", clearGrid);

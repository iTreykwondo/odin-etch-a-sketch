const gridContainer = document.querySelector(".grid");

const drawGrid = () => {
  gridContainer.style.width = "960px";
  gridContainer.style.height = "700px";
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
  gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
  gridContainer.style.border = "4px solid black";

  for (let i = 0; i < 16 * 16; i++) {
    let gridSquares = document.createElement("div");

    gridSquares.addEventListener("mouseover", () => {
      gridSquares.classList.add("square");
    });

    gridContainer.appendChild(gridSquares);
  }
};

drawGrid();

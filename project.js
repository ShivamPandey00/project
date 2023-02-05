const squares = document.querySelectorAll(".square");
let xIsNext = true;

for (const square of squares) {
  square.addEventListener("click", function (event) {
    const square = event.target;
    if (square.textContent === "") {
      square.textContent = xIsNext ? "X" : "O";
      xIsNext = !xIsNext;
    }
  });
}

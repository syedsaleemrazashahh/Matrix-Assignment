const box1 = document.querySelector("#input-box1");
const box2 = document.querySelector("#input-box2");
const form = document.querySelector("#matrix-form");
const sumButton = document.querySelector("#SUM");
const resultDiv = document.querySelector("#result");

let matrixlength;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  matrixlength = Number(event.target.children[0].value);

  box1.innerHTML = "";
  box2.innerHTML = "";
  resultDiv.innerHTML = "Result will be shown here";

  for (let i = 0; i < matrixlength; i++) {
    for (let j = 0; j < matrixlength; j++) {
      box1.innerHTML += `<input type="number" id="saleem-${i}${j}" style="width: 30px;" value="0" />`;
      box2.innerHTML += `<input type="number" id="sajid-${i}${j}" style="width: 30px;" value="0" />`;
    }
    box1.innerHTML += "<br>";
    box2.innerHTML += "<br>";
  }
});

sumButton.addEventListener("click", () => {
  let sumMatrix = [];

  for (let i = 0; i < matrixlength; i++) {
    sumMatrix[i] = [];
    for (let j = 0; j < matrixlength; j++) {
      const value1 = Number(document.querySelector(`#saleem-${i}${j}`).value);
      const value2 = Number(document.querySelector(`#sajid-${i}${j}`).value);
      const sum = value1 + value2;
      sumMatrix[i][j] = sum;
    }
  }

  displayResult(sumMatrix);
});

function displayResult(matrix) {
  resultDiv.innerHTML = "Result:<br>";
  matrix.forEach((row) => {
    resultDiv.innerHTML += row.join(" ") + "<br>";
  });
}

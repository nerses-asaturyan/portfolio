let matrix1 = document.querySelector(".matrix1Body");
let matrix2 = document.querySelector(".matrix2Body");
let matrix3 = document.querySelector(".matrix3Body");

let matrixLength = parseInt(prompt("Ներմուծեք տեղադրության կարգը"));

function drawCell(n) {
  let cell = document.createElement("div");
  cell.setAttribute("class", "cell");
  let num = document.createElement("span");
  num.setAttribute("class", "num");
  num.innerText = n;
  cell.appendChild(num);
  let num2 = document.createElement("input");
  num2.setAttribute("class", "num2");
  cell.appendChild(num2);
  return cell;
}

function drawMatrix() {
  for (let i = 1; i <= matrixLength; i++) {
    matrix1.appendChild(drawCell(`${i}`));
    matrix2.appendChild(drawCell(`${i}`));
  }
}

drawMatrix();

let arrAnswer = [null];
let matrix1Row2 = [null];
let matrix2Row2 = [null];
let objMatrix2 = {};
function answer() {
  document.querySelector(".calculate").addEventListener("click", () => {
    for (const value of matrix1.querySelectorAll(".num2")) {
      matrix1Row2.push(value.value);
    }

    for (const value of matrix2.querySelectorAll(".num2")) {
      matrix2Row2.push(value.value);
    }

    for (let i = 1; i <= matrixLength; i++) {
      objMatrix2["" + i] = matrix2Row2[i];
    }

    for (let i = 1; i <= matrixLength; i++) {
      arrAnswer.push(objMatrix2[matrix1Row2[i]]);
    }
    drawAnswer(arrAnswer);
  });
}

answer();

function drawAnswer(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    let num = document.createElement("span");
    num.setAttribute("class", "num");
    num.innerText = i;
    cell.appendChild(num);
    let num2 = document.createElement("span");
    num2.setAttribute("class", "num");
    num2.innerText = arr[i];
    cell.appendChild(num2);
    matrix3.appendChild(cell);
  }
}

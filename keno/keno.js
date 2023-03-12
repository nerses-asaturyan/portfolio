// getting players numbers and printing them

function gettingNumbers() {
  let num1 = prompt("What is your first successful number(1-80)");
  let num2 = prompt("What is your second successful number(1-80)");
  let yourNumbers = document.getElementById("yourNumbers");

  if (num1 >= 1 && num1 <= 80 && num2 <= 80 && num2 >= 1 && num1 !== num2) {
    let firstNum = document.createElement("div");
    firstNum.classList.toggle("dot");
    firstNum.innerText = `${num1}`;
    yourNumbers.append(firstNum);

    let secondNum = document.createElement("div");
    secondNum.classList.toggle("dot");
    secondNum.innerText = `${num2}`;
    yourNumbers.append(secondNum);

    let chooseSound = document.createElement("audio");
    chooseSound.src = "choose.mp3";
    chooseSound.play();

    creatingDots();
  } else {
    let errorSound = document.createElement("audio");
    errorSound.src = "error.mp3";
    errorSound.play();
    setTimeout(() => {
      alert("Enter proper numbers");
      window.location.reload();
    }, 600);
  }

  // checking successful numbers

  setTimeout(() => {
    if (
      arrayOfNumbers.includes(parseInt(num1)) &&
      arrayOfNumbers.includes(parseInt(num2))
    ) {
      let winSound = document.createElement("audio");
      winSound.src = "win.mp3";
      winSound.play();
      setTimeout(() => {
        alert("Winner!");
        window.location.reload();
      }, 600);
    } else {
      let loseSound = document.createElement("audio");
      loseSound.src = "lose.mp3";
      loseSound.play();
      setTimeout(() => {
        alert("You lose!");
        window.location.reload();
      }, 600);
    }
  }, 2000 * 21);

  console.log("Your numbers - ", num1, num2);
}

// getting random numbers from 1-80

let arrayOfNumbers = [];

function randNumbers() {
  while (arrayOfNumbers.length < 20) {
    let randNum = Math.ceil(Math.random() * 80);
    if (!arrayOfNumbers.includes(randNum)) {
      arrayOfNumbers.push(randNum);
    }
  }
  // console.log("Numbers of casino", arrayOfNumbers);
}

randNumbers();

// creating dots for casinos numbers

let casinoBoard = document.getElementById("casinoBoard");
let countDot = document.getElementById("countDots");
let k = 0;

function creatingDots() {
  let dots = document.createElement("audio");
  dots.src = "dots.mp3";
  let intervalOfDots = setInterval(() => {
    let ordinaryNum = document.createElement("div");
    ordinaryNum.classList.toggle("dot");
    ordinaryNum.innerText = arrayOfNumbers[k];
    casinoBoard.append(ordinaryNum);
    dots.play();

    countDot.innerText = `${k + 1}`;
    k++;
    if (k > 19) {
      clearInterval(intervalOfDots);
    }
  }, 2000);
}

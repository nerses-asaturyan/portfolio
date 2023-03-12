// detecting pressed key

let keyPressed = "";

window.addEventListener(
  "keydown",
  (event) => {
    keyPressed = event.key;
    positionChanger();
  },
  false
);

let upDownIndex = 0;
let rightLeftIndex = 0;

let upDownIndex2 = 0;
let rightLeftIndex2 = 0;

function positionChanger() {
  // getting circles DOM elements

  let puprleCircle = document.getElementById("circle_div");
  let greenCircle = document.getElementById("circle2_div");

  // getting location of circles

  // moving purple circle

  if (keyPressed === "ArrowUp") {
    upDownIndex -= 10;
    if (upDownIndex < 0) {
      upDownIndex = 0;
    }
    puprleCircle.style.transform =
      "translate(" + `${rightLeftIndex}` + "px," + `${upDownIndex}` + "px)";
  }
  if (keyPressed === "ArrowDown") {
    upDownIndex += 10;
    if (upDownIndex > 570) {
      upDownIndex = 570;
    }
    puprleCircle.style.transform =
      "translate(" + `${rightLeftIndex}` + "px," + `${upDownIndex}` + "px)";
  }
  if (keyPressed === "ArrowRight") {
    rightLeftIndex += 10;
    if (rightLeftIndex > 930) {
      rightLeftIndex = 930;
    }
    puprleCircle.style.transform =
      "translate(" + `${rightLeftIndex}` + "px," + `${upDownIndex}` + "px)";
  }

  if (keyPressed === "ArrowLeft") {
    rightLeftIndex -= 10;
    if (rightLeftIndex < 0) {
      rightLeftIndex = 0;
    }
    puprleCircle.style.transform =
      "translate(" + `${rightLeftIndex}` + "px," + `${upDownIndex}` + "px)";
  }

  // moving green circle

  if (keyPressed === "w") {
    upDownIndex2 -= 10;
    if (upDownIndex2 < 0) {
      upDownIndex2 = 0;
    }
    greenCircle.style.transform =
      "translate(" + `${rightLeftIndex2}` + "px," + `${upDownIndex2}` + "px)";
  }
  if (keyPressed === "s") {
    upDownIndex2 += 10;
    if (upDownIndex2 > 570) {
      upDownIndex2 = 570;
    }
    greenCircle.style.transform =
      "translate(" + `${rightLeftIndex2}` + "px," + `${upDownIndex2}` + "px)";
  }
  if (keyPressed === "d") {
    rightLeftIndex2 += 10;
    if (rightLeftIndex2 > 930) {
      rightLeftIndex2 = 930;
    }
    greenCircle.style.transform =
      "translate(" + `${rightLeftIndex2}` + "px," + `${upDownIndex2}` + "px)";
  }

  if (keyPressed === "a") {
    rightLeftIndex2 -= 10;
    if (rightLeftIndex2 < 0) {
      rightLeftIndex2 = 0;
    }
    greenCircle.style.transform =
      "translate(" + `${rightLeftIndex2}` + "px," + `${upDownIndex2}` + "px)";
  }

  // game over

  if (
    ((upDownIndex > 3 && upDownIndex2 > 3) ||
      (rightLeftIndex > 3 && rightLeftIndex2 > 3)) &&
    Math.abs(upDownIndex - upDownIndex2) < 30 &&
    Math.abs(rightLeftIndex - rightLeftIndex2) < 30
  ) {
    alert("GAME OVER");
    window.location.reload();
  }

  // location of circles

  console.log("purple(x,y) - ", upDownIndex, rightLeftIndex);
  console.log("green(x,y) - ", upDownIndex2, rightLeftIndex2);
}

// first version of code NOT WORKING

// function positionChanger() {
//   // getting circles DOM elements
//
//   let puprleCircle = document.getElementById("circle_div");
//   let greenCircle = document.getElementById("circle2_div");
//
//   // moving purple circle
//
//   if (keyPressed === "ArrowUp") {
//     upIndex -= 10;
//     if (upIndex < -570) {
//       upIndex = -570;
//     }
//     puprleCircle.style.marginTop = upIndex + "px";
//   }
//   if (keyPressed === "ArrowDown") {
//     bottomIndex += 10;
//     if (bottomIndex > 570) {
//       bottomIndex = 570;
//     }
//     puprleCircle.style.top = bottomIndex + "px";
//   }
//   if (keyPressed === "ArrowRight") {
//     rightIndex += 10;
//     if (rightIndex > 930) {
//       rightIndex = 930;
//     }
//     puprleCircle.style.marginLeft = rightIndex + "px";
//   }
//   if (keyPressed === "ArrowLeft") {
//     leftIndex -= 10;
//     if (leftIndex < -930) {
//       leftIndex = -930;
//     }
//     puprleCircle.style.left = leftIndex + "px";
//   }
//
//   // moving green circle
//
//   switch (keyPressed) {
//     case "w":
//       wIndex -= 10;
//       greenCircle.style.marginTop = wIndex + "px";
//       break;
//     case "s":
//       sIndex += 10;
//       greenCircle.style.top = sIndex + "px";
//       break;
//     case "d":
//       dIndex += 10;
//       greenCircle.style.marginLeft = dIndex + "px";
//       break;
//     case "a":
//       aIndex -= 10;
//       greenCircle.style.left = aIndex + "px";
//       break;
//   }

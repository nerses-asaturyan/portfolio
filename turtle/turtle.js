/*
forward(distance)  //գնալ առաջ (հեռավորություն)
right(angle)            //աջ (անկյուն)
left(angle) 	     //ձախ (անկյուն)	
goto(x,y) 	     //գնա (x կորդինատ, y կորդինատ)
clear() 	                  //մաքրել
penup() 	    //բարձրացնել մատիտը
pendown() 	    //իջեցնել մատիտը
reset() 	                 //սկսել սկզբից, ջնջել ամեն ինչ ....
angle(angle)	   //անկյուն	 
width(width)       //մատիտի հաստությունը(հաստություն)
colour(r,g,b,a) 	   //ընտրել գույն()
*/

// task18;
// let flowers = [
//   [100, 100, 80],
//   [-200, 65, 120],
//   [111, -226, 120],
//   [-52, -288, 56],
//   [-15, 271, 70],
//   [252, -11, 45],
// ];
//
// let colors = [
//   [52, 152, 219],
//   [160, 64, 0],
//   [39, 174, 96],
//   [127, 179, 213],
//   [46, 64, 83],
//   [192, 57, 43],
// ];
//
// for (let i = 0; i < flowers.length; i++) {
//   colour(colors[i][0], colors[i][1], colors[i][2], 1);
//   for (let j = 0; j < 48; j++) {
//     console.log(colors[i]);
//     goto(flowers[i][0], flowers[i][1]);
//     forward(flowers[i][2]);
//     right(360 / 48);
//   }
// }

// task19
// let n = 200;
// for (let j = 0; j < 360; j++) {
//   for (let i = 0; i < 3; i++) {
//     n = n - 1;
//     colour(0, 0, 255, 1);
//     forward(n);
//     left(120);
//   }
// }

// task20
// for (let i = 0; i < 200; i++) {
//   let randX = Math.floor(Math.random() * 500) - Math.floor(Math.random() * 500);
//   let randY = Math.floor(Math.random() * 500) - Math.floor(Math.random() * 500);
//   let randWidth = Math.floor(Math.random() * 5);
//   let randR = Math.floor(Math.random() * 256);
//   let randG = Math.floor(Math.random() * 256);
//   let randB = Math.floor(Math.random() * 256);
//   let randDistance = Math.floor(Math.random() * 70);
//
//   goto(randX, randY);
//   colour(randR, randG, randB, 1);
//   width(randWidth);
//   forward(randDistance);
// }
//
// task21
// function blackBackground() {
//   goto(-350, -350);
//   n = 700;
//   for (let i = 0; i < 700 / 0.1; i++) {
//     n = n - 0.1;
//     forward(n);
//     right(90);
//   }
// }
// blackBackground();
//
// let randLines = Math.floor(Math.random() * 200);
//
// for (let i = 0; i < randLines - 1; i++) {
//   let randWidth = Math.floor(Math.random() * 5);
//   let randR = Math.floor(Math.random() * 256);
//   let randG = Math.floor(Math.random() * 256);
//   let randB = Math.floor(Math.random() * 256);
//   let randDistance = Math.floor(Math.random() * 330);
//
//   goto(0, 0);
//   colour(randR, randG, randB, 1);
//   width(randWidth);
//   forward(randDistance);
//   right(360 / randLines);
// }

// task22
// function blackBackground() {
//   goto(-350, -350);
//   n = 700;
//   for (let i = 0; i < 700 / 0.1; i++) {
//     n = n - 0.1;
//     forward(n);
//     right(90);
//   }
// }
// blackBackground();
//
// let randLines = Math.floor(Math.random() * 200);
//
// for (let i = 0; i < randLines - 1; i++) {
//   let randWidth = Math.floor(Math.random() * 5);
//   let randDistance = Math.floor(Math.random() * 330);
//
//   goto(0, 0);
//   colour(255, 0, 0, Math.random());
//   width(randWidth);
//   forward(randDistance);
//   right(360 / randLines);
// }

// task23
// function blueBrown() {
//   for (let i = 0; i < 500; i++) {
//     let randDistance = Math.floor(Math.random() * 20);
//     let randAngel = Math.floor(Math.random() * 360);
//     colour(0, 0, 255, 1);
//     forward(randDistance);
//     right(randAngel);
//   }
// }
//
// function redBrown() {
//   for (let i = 0; i < 500; i++) {
//     let randDistance = Math.floor(Math.random() * 20);
//     let randAngel = Math.floor(Math.random() * 360);
//     colour(255, 0, 0, 1);
//     forward(randDistance);
//     right(randAngel);
//   }
// }
//
// blueBrown();
// redBrown();

// task24
// for (let i = 0; i < 100; i++) {
//   let redDistance = Math.floor(Math.random() * 50);
//   let blueDistance = Math.floor(Math.random() * 50);
//   let pinkDistance = Math.floor(Math.random() * 50);
//
//   colour(255, 0, 0, 1);
//   forward(redDistance);
//   if (redDistance < 25) {
//     left(90);
//   } else {
//     right(90);
//   }
//   colour(135, 206, 235, 1);
//   forward(blueDistance);
//   if (blueDistance < 25) {
//     left(90);
//   } else {
//     right(90);
//   }
//   colour(97, 11, 128, 1);
//   forward(pinkDistance);
//   if (pinkDistance < 25) {
//     left(90);
//   } else {
//     right(90);
//   }
// }

// task25
// for (let i = 0; i < 100; i++) {
//   colour(97, 11, 128, 1);
//   goto(0, 0);
//   forward(300);
//   right(360 / 100);
//   colour(14, 210, 27, 1);
//   goto(0, 0);
//   forward(200);
//   right(360 / 100);
// }

// task26
// let n = 3;
// for (let j = 0; j < 25; j++) {
//   for (let i = 0; i < 3; i++) {
//     n = n + 3;
//     colour(14, 21, 210, 1);
//     forward(n);
//     right(60);
//     colour(255, 0, 0, 1);
//     forward(n);
//     right(60);
//   }
// }

// task27
// let n = 3;
// let myAngle = 60;
// for (let j = 0; j < 50; j++) {
//   for (let i = 0; i < 3; i++) {
//     myAngle = myAngle - 1;
//     n = n + 1;
//     colour(14, 21, 210, 1);
//     forward(n);
//     left(myAngle);
//     myAngle = myAngle + 1;
//     n = n + 1;
//     colour(255, 0, 0, 1);
//     forward(n);
//     left(myAngle);
//   }
// }

// task28
// function drawBasic() {
//   for (let i = 0; i < 4; i++) {
//     colour(14, 21, 210, 1);
//     width(5);
//     forward(100);
//     left(90);
//   }
//   left(45);
//   for (let i = 0; i < 4; i++) {
//     colour(255, 0, 0, 1);
//     width(5);
//     forward(100);
//     left(90);
//   }
// }
// for (let j = 0; j < 4; j++) {
//   right(135);
//   drawBasic();
// }

// task29
// function redSquare() {
//   for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < 4; i++) {
//       colour(255, 0, 0, 1);
//       forward(100);
//       left(90);
//     }
//     left(90);
//   }
// }
//
// function blueSquare() {
//   right(15);
//   for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < 4; i++) {
//       colour(0, 0, 255, 1);
//       forward(100);
//       left(90);
//     }
//     left(90);
//   }
// }
// function pinkSquare() {
//   right(15);
//   for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < 4; i++) {
//       colour(102, 204, 255, 1);
//       forward(100);
//       left(90);
//     }
//     left(90);
//   }
// }
// for (let k = 0; k < 2; k++) {
//   redSquare();
//   right(15);
//   blueSquare();
//   right(15);
//   pinkSquare();
//   right(15);
// }

// task29-another-method
// function redSquare() {
//   for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < 4; i++) {
//       colour(255, 0, 0, 1);
//       forward(100);
//       left(90);
//     }
//     left(90);
//   }
//   right(45);
// }
//
// function blueSquare() {
//   right(15);
//   for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < 4; i++) {
//       colour(0, 0, 255, 1);
//       forward(100);
//       left(90);
//     }
//     left(90);
//   }
// }
//
// function pinkSquare() {
//   right(15);
//   for (let j = 0; j < 4; j++) {
//     for (let i = 0; i < 4; i++) {
//       colour(102, 204, 255, 1);
//       forward(100);
//       left(90);
//     }
//     left(90);
//   }
// }
//
// redSquare();
// redSquare();
// left(75);
// blueSquare();
// left(75);
// blueSquare();
// right(30);
// pinkSquare();
// right(45);
// pinkSquare();

// task30
// function drawRedObtuse() {
//   colour(255, 0, 0, 1);
//   for (let i = 0; i < 5; i++) {
//     forward(100);
//     left(72);
//   }
//   right(45);
// }
//
// function drawBlueObtuse() {
//   colour(0, 0, 255, 1);
//   for (let i = 0; i < 5; i++) {
//     forward(100);
//     left(72);
//   }
//   right(45);
// }
//
// function drawPinkObtuse() {
//   colour(102, 204, 255, 1);
//   for (let i = 0; i < 5; i++) {
//     forward(100);
//     left(72);
//   }
//   right(45);
// }
//
// for (let i = 0; i < 8; i++) {
//   drawRedObtuse();
// }
// right(15);
// for (let i = 0; i < 8; i++) {
//   drawBlueObtuse();
// }
// right(15);
// for (let i = 0; i < 8; i++) {
//   drawPinkObtuse();
// }

// task31
// let redIndex = 35;
// goto(-60, -90);
// right(90);
// for (let n = 3; n <= 11; n++) {
//   i = n;
//   width(2);
//   redIndex = redIndex + 20;
//   colour(redIndex, 0, 0, 1);
//   for (let i = 1; i <= n; i++) {
//     forward(100);
//     left(180 - ((n - 2) / n) * 180);
//   }
// }

// let n = 200;
// for (let i = 0; i < 500; i++) {
//   n = n - 1;
//   colour(255, 0, 0, 1);
//   left(120);
//   forward(n);
//   colour(130, 0, 171, 1);
//   left(120);
//   forward(n);
//   colour(0, 171, 33, 1);
//   left(120);
//   forward(n);
//   right(3);
// }

// next task
// let n = 70;
// let myAngle = 120;
// for (let j = 0; j < 10; j++) {
//   for (let i = 0; i < 1; i++) {
//     myAngle = myAngle - 1;
//     n = n + 1;
//     colour(255, 0, 0, 1);
//     forward(n);
//     left(myAngle);
//     myAngle = myAngle + 1;
//     n = n + 1;
//     colour(130, 0, 171, 1);
//     forward(n);
//     // left(myAngle);
//     colour(0, 171, 33, 1);
//     forward(n);
//     // left(myAngle);
//   }
// }

// task32
// let myAngle = 120;
// let distance = 500;
// goto(150, -250);
// for (let i = 0; i < 50; i++) {
//   distance = distance - 3;
//   myAngle = myAngle + 1;
//   colour(255, 0, 0, 1);
//   forward(distance);
//   left(myAngle);
//   distance = distance - 3;
//   colour(130, 0, 171, 1);
//   forward(distance);
//   left(myAngle);
//   distance = distance - 3;
//   colour(0, 171, 33, 1);
//   forward(distance);
//   left(myAngle);
//   myAngle = myAngle - 1;
// }

// task33
// goto(100, -200);
// let distance = 20;
//
// let myAngle = 120;
//
// for (let j = 0; j < 60; j++) {
//   distance = distance - 0.25;
//   myAngle = myAngle + 2;
//   for (let i = 0; i < 6; i++) {
//     distance = distance + 1;
//     colour(204, 39, 245, 1);
//     forward(distance);
//     colour(88, 217, 255, 1);
//     forward(distance);
//     colour(255, 255, 255, 1);
//     forward(distance);
//     colour(19, 6, 192, 1);
//     forward(distance);
//     distance = distance - 1;
//   }
//   left(myAngle);
//   myAngle = myAngle - 2;
// }

// task34
// function blackMaker() {
//   goto(0, -350);
//   colour(0, 0, 0, 1);
//   width(700);
//   forward(700);
// }
//
// blackMaker();
//
// let numOfLines = Math.floor(Math.random() * 256);
// goto(-350, 350);
// right(90);
// for (let j = 0; j < numOfLines; j++) {
//   let numOfParts = Math.floor(Math.random() * 16);
//
//   for (let i = 0; i < numOfParts; i++) {
//     let randRed = Math.floor(Math.random() * 256);
//     let randGreen = Math.floor(Math.random() * 256);
//     let randBlue = Math.floor(Math.random() * 256);
//
//     let randDistanceOfParts = Math.floor(Math.random() * 70);
//
//     colour(randRed, randGreen, randBlue, 1);
//     width(1);
//     forward(randDistanceOfParts);
//   }
//   goto(-350, 350);
//   right(90);
//   right(360 / numOfLines);
// }

// task35
// goto(-300, 0);
// width(5);
// let redIndex = 55;
// for (let i = 0; i < 100; i++) {
//   redIndex = redIndex + 2;
//   colour(redIndex, 0, 0, 1);
//   forward(2);
// }
//
// goto(-200, 0);
// let greenIndex = 55;
// for (let i = 0; i < 100; i++) {
//   greenIndex = greenIndex + 2;
//   colour(0, greenIndex, 0, 1);
//   forward(2);
// }
//
// goto(-100, 0);
// let blueIndex = 55;
// for (let i = 0; i < 100; i++) {
//   blueIndex = blueIndex + 2;
//   colour(0, 0, blueIndex, 1);
//   forward(2);
// }
// let x = -100;
// for (let i = 0; i < 4; i++) {
//   x = x + 100;
//   goto(x, 0);
//   let opacity = 1;
//   for (let i = 0; i < 100; i++) {
//     opacity = opacity - 1 / 100;
//     colour(0, 0, 0, opacity);
//     forward(2);
//   }
// }

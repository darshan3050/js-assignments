var Winner

class circle {
  constructor(id, ball) {
    this.id = id;
    this.ball = ball;
  }
}
var circles = []

document.getElementById("playbutton").onclick = function () {
  Winner = generateRandom()
  console.log("winner value ", Winner);
  const balls = [];
  for (let i = 0; i < 50; i++) {
    balls.push(i);
    document.getElementById(i);
  }
  let text = "<ul>";
  for (let i = 0; i < 50; i++) {
    text += "<li>" + balls[i] + "</li>";
  }
  makeCircles()
  displaycircle()
}

function displaycircle() {
  container = document.querySelector('.container');
  for (var i = 0; i < 50; i++) {
    console.log("test loop:")
    document.getElementById("container").innerHTML = circles[i].circleraw.id;
  }
}

function makeCircles() {
  var x, circleraw
  for (x = 1; x <= 50; x++) {
    circleraw = document.createElement('div');
    circleraw.className = 'circle';
    circleraw.id = x
    circleobj = new circle(x, circleraw)
    circles.push(circleobj)
    console.log("test loop:", circleobj.id, circleobj)
    console.log("test loop:", circleraw)
  }
}

function generateRandom(maxLimit = 50) {
  let rand = Math.random() * maxLimit;
  console.log(rand); // 
  rand = Math.floor(rand); // 99
  return rand;
}

function myFunction(e) {
  console.log(e)
}




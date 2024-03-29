var cars = [];
var frogPos ;
var alpha, beta, gamma; // orientation data
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;
function setup() {
  // put setup code here
  createCanvas(400, 800);
  alpha = 0;
    beta = 0;
    gamma = 0;

  rectMode(CENTER) ;
  for(var i = 0; i < 40; i++) {
  cars.push(new Car()) ;
  }
  frogPos = createVector(width/2, height- 80) ;
}

function draw() {
  // put drawing code here
  background(100);
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);
  frogPos.x = xPosition;
  frogPos.y = yPosition;
  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad
  fill('green');
  ellipse(0, 0, 50, 50);
  pop();

    for(var i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].drive() ;

  //colli
  if (cars[i].pos.dist(frogPos) < 20) {
    cars.splice(i, 1) ;

  }
}
// DECORATIONS
 // Just a bunch of text commands to display data coming in from addEventListeners
 textAlign(LEFT);
 textSize(20);
 fill('black');
 text("orientation data:", 25, 25);
 textSize(15);
 text("alpha: " + alpha, 25, 50);
 text("beta: " + beta, 25, 70);
 text("gamma: " + gamma, 25, 90);
 textSize(20);
 text("acceleration data:", 25, 125);
 textSize(15);
 text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
 text("y = " + y, 25, 170);
 text("z = " + z, 25, 190);

 // MORE DECORATIONS - write that pretty ATK type on top.
 fill('white');
 noStroke();
 textSize(300);
 textAlign(CENTER);
 text("atk", width / 2, height / 2);


}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!



//checkForKeys() ;



function Car() {
//attributes
this.pos = createVector(100, 100) ;
this.vel = createVector(random(-5, 5), random(-5, 5));
this.r = random(255) ;
this.g = random(255) ;
this.b = random(255) ;
//methods
this.display = function (){
  fill(this.r, this.g, this.b);
  rect(this.pos.x, this.pos.y, 100, 50) ;


}

  this.drive = function () {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

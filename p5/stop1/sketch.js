var myState = 0 ;
var timer = 200 ;
var x = 0 ;
var vel = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800);
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {

  // put drawing code here
  background(100);
  fill("#ffcb08")
  rect(width/2, height/2, 150, 400) ;

  switch (myState) {
    case 0: //green state
    fill("grey")
    ellipse(width/2, height/2, 100, 100) ;//top circle
    ellipse(width/2, height/2 - 125, 100, 100) ;//middle circle
    fill('green')
    ellipse(width/2, height/2 + 125, 100, 100) ;// down circle
doTimer(1, 100);
vel = 3;
      break;
  case 1:
  fill("grey")
  ellipse(width/2, height/2, 100, 100) ;//top circle
fill('red')
  ellipse(width/2, height/2 - 125, 100, 100) ;//middle circle
  fill('grey')
  ellipse(width/2, height/2 + 125, 100, 100) ;// down circle
  doTimer(2, 100);
vel = 0 ;
  break;

  case 2:
  fill("yellow")
  ellipse(width/2, height/2, 100, 100) ;//top circle
  fill('grey')
  ellipse(width/2, height/2 - 125, 100, 100) ;//middle circle
  fill('grey')
  ellipse(width/2, height/2 + 125, 100, 100) ;// down circle
  doTimer(0, 50);
 vel = 1 ;
  break;

  }

  //animate a car
  fill("purple");
  rect(x, height - 100, 80, 50) ;
  x = x + vel;
  if (x >= width) {
    x = 0 ;
  }

}
function doTimer(whichState, variableTimer) {
  timer--;
  if(timer<=0){
    timer = 200;
    myState = whichState ;
  }
}

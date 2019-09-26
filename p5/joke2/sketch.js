var myState = 0;
var timer = 0;




function setup() {
  // put setup code here
  createCanvas(800, 800);
  background("blue");

}

function draw() {

  switch (myState) {


    case 0:
    background("blue");
    fill("white");
    text("What do you call an alligator wearing a vest", 50, 50);
    text("Timer: " + timer, 200, 200);
    timer++;
    if (timer == 200){
      myState = 1
    }


      break;

      case 1:
      background("green");
      fill("white");
      text("What do you call an alligator wearing a vest", 50, 50);
      text("An Investigator", 50, 100);
     break;


  }

  // put drawing code here


}

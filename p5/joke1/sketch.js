var myState = 0;




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


function mouseReleased(){

   myState++;

  if (myState > 1) {
   myState = 0;


 }

}

var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  switch(myState) {
      case 0:
      background (255, 0, 0);

      break ;

      case 1:
      background (0, 255, 0);
      text("first",100, 100);
      rect(10, 10, 50, 50);
      break ;

      case 2:
      background (0, 0, 255);
      fill("#ffcb08")
      text("second",150, 150);
      break ;

  }



}
 function mouseReleased() {
  //myState++ ;
myState = (myState + 1) % 3;
  //if (mystate > 2) {
    //myState = 0 ;
//  }

 }

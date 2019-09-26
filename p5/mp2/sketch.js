var myState = 0;
var myTimer = 0;
var font;
var x = 0;
var city;
let mic;
let y = 337;
var vol = 0;


function preload() {
  font = loadFont('asset/Heyaugust.otf');
  city = loadImage('asset/ola.jpg');
}

function setup() {
  // put setup code here
  createCanvas(700, 400);

  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

}

function draw() {
  // put drawing code here
  image(city, 0, 0);
  switch (myState) {

    case 0:
      //background("#ffcb08");
      //image(city, 0, 0);
      fill(random(255), random(255), random(255));
      textFont(font); // SETS the font
      textSize(79);
      text("BEGIN", x, 200);
      x += 1;
      if (x > 700) {
        x = 0;
      }


      break;

    case 1:
      //background(100);
      //image(city, 0, 0);
      myTimer++;
      if (myTimer >= 10) {
        myTimer = 0;
        myState = 2;

      }

      break;

    case 2:
      //background(100);
      //image(city, 0, 0);
      vol = mic.getLevel();
      if (vol >= 0.2) {

        myState = 3;
      }
      ellipse(333, 337, 20, 20);
      break;

    case 3:
      //background(200);
      ellipse(333, y, 20, 20);
      y = y - 10;
      if (y <= 0) {
        myState = 4;
      }



      break;


    case 4:
      textSize(79);
      text("GoodBye", 244, 171);

      //  background("#ffcb08");
      break;
  }
}

function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }
  //if (myState == 2) {
  //myState = 3;
  // }

  //if (myState == 3) {
  //  myState = 4;
  //}
  console.log(mouseX + "," + mouseY);
}

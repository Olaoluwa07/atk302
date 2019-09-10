var bcow;
function setup() {
  // put setup code here
  createCanvas (800, 800);
  bcow = loadImage("assests/cow.jpg");
}

function draw() {
  // put drawing code here
  image(bcow, 20, 100);
}

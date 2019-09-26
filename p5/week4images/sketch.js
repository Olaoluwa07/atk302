var bcow;
function setup() {
  // put setup code here
  createCanvas (800, 800);
  bcow = loadImage("assests/cow.jpg");
}

function draw() {
  // put drawing code here
  background("#ffcb08")
  image(bcow, 20, 100);
  text('welcome atk', 40, 90);
}

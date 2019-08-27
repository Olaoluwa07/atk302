function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  background(0)
}

function draw() {
  // put drawing code here
fill(255,0,0)
rect(mouseX, mouseY, 10, 10);
}
function mousePressed() {
  gray += 20;

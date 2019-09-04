var score= 0 ;
function setup() {
  // put setup code here
  createCanvas(900, 500);

}

function draw() {
  // put drawing code here

  text("Olaoluwa", 259, 500);
  rect(mouseX, mouseY, 10, 10);
  text(score, 30,30);
  fill('orange');
  ellipse(252, 144, 72, 72);

  fill('#ffffff');
  ellipse(166, 432, 80, 80);
  fill('#ffffff');
  ellipse(255, 441, 60, 60);

  fill('#ffffff');
  ellipse(258, 401, 40, 40);

  fill('#ffffff');
  ellipse(166, 371, 50, 50);
}


function mouseReleased () {
  background(random(255), random(255), random(255));

  score = score + 1;


}

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 500);

}

function draw () {
  background(0, 100, 200);
  noStroke();

  fill('orange');
  ellipse(252, 144, 72, 72);

  fill('white');
  ellipse(208, 188, 50, 30);

  fill('white');
  ellipse(238, 184, 49, 28);

  fill('red');
  ellipse(70, 416, 10, 10);

  fill('#dbf3fa');
  ellipse(417, 206, 50, 30);

  fill('#dbf3fa');
  ellipse(450, 202, 50, 30);

  fill('green');
  ellipse(166, 432, 80, 80);
  fill('#228B22');
  ellipse(255, 441, 60, 60);

  fill('#228B22');
  ellipse(258, 401, 40, 40);

  fill('green');
  ellipse(166, 371, 50, 50);


  fill (255);
  text (mouseX + ',' + mouseY, 20, 20)

  fill(255);
  arc(39, 96, 75, 75, PI, TWO_PI);
  fill(255);
  arc(100, 80, 75, 75, PI, TWO_PI);
  fill(255);
  arc(599, 111, 75, 75, PI, TWO_PI);
  fill(255);
  arc(548, 100, 65, 65, PI, TWO_PI);

  fill('green');
  triangle(398, 394, 550, 226, 634, 392);


  fill('#654321');
  rect(500, 390, 40, 200);

  fill('#654321');
  rect(0, 458, 720, 500);

  fill('#7CFC00');
  arc(70, 431, 20, 20, PI, TWO_PI);

  fill('#006400');
  rect(65, 431, 8, 300);


}

function mouseReleased() {

  console.log(mouseX + ',' + mouseY)

}

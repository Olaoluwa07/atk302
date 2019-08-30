function setup() {
  // put setup code here
  createCanvas(1000, 500);
}

function draw() {
  // put drawing code here
    background('#ADD8E6');
    fill(0);


    text(mouseX + ',' + mouseY, 20, 20);
    fill(255);
    if (mouseIsPressed) {
      ellipse(436, 218, 100, 100);
    } else {
      fill('orange');
      ellipse(436, 218, 300, 300);
      fill('blue');
      ellipse(377, 184, 40, 40)

    }

    print(mouseIsPressed);{

      console.log(mouseX + ',' + mouseY)
    }
}

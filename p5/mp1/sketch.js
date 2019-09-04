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
      fill(random(255), random(255), random(255));
      rect(0, 0, 1000, 500);
      fill('#FF6347');
      ellipse(436, 218, 300, 300);

      fill('red');
      ellipse(377, 184, 50, 50);
      fill('black');
      ellipse(376, 182, 20, 20);
      fill('white')
      text("STICKMAN", 192, 200);
      fill('red');
      ellipse(482, 182, 50, 50);

      fill('black');
      ellipse(482, 182, 20, 20);

      fill('green');
      triangle(398, 240, 430, 207, 468, 237);

      fill('#8B0000');
      ellipse(438, 304, 150, 30);
      fill('red');
      ellipse(439, 313, 30, 50);

      fill('#C0C0C0');
      ellipse(890, 65, 50, 50);

      fill('#00008b');
      ellipse(902, 72, 50, 50);



      fill('red');
      arc(430, 108, 210, 200, PI, TWO_PI);

      fill('purple');
      arc(430, 108, 210, 75, PI, TWO_PI);

      fill('#654321');
      rect(416, 368, 43, 199);

      fill('black');
      arc(368, 136, 50, 30, PI, TWO_PI);

      fill('black');
      arc(478, 130, 50, 30, PI, TWO_PI);

      fill('#654321');
      rect(341, 412, 199, 43);

      fill('green');
      ellipse(60, 488, 50, 170);

      fill('green');
      ellipse(128, 494, 50, 130);
      fill('#006400');
      ellipse(222, 493, 50, 170);
      fill('green');
      ellipse(648, 489, 50, 170);
      fill('#006400');
      ellipse(800, 483, 50, 190);
      fill('green');
      ellipse(966, 487, 50, 300);

    } else {
      fill('orange');
      ellipse(436, 218, 300, 300);

      fill('white');
      ellipse(377, 184, 40, 40);
      fill('black');
      ellipse(376, 182, 20, 20);


      fill('white');
      ellipse(482, 182, 40, 40);

      fill('black');
      ellipse(482, 182, 20, 20);

      fill('green');
      triangle(398, 240, 430, 207, 468, 237);

      fill('#8B0000');
      ellipse(438, 304, 90, 30);
      fill('red');
      ellipse(437, 308, 15, 30);

      fill('red');
      arc(430, 108, 210, 200, PI, TWO_PI);

      fill('purple');
      arc(430, 108, 210, 75, PI, TWO_PI);

      fill('#654321');
      rect(416, 368, 43, 199);

      fill('#654321');
      rect(341, 412, 199, 43);

      fill('black');
      arc(376, 160, 50, 30, PI, TWO_PI);

      fill('black');
      arc(480, 156, 50, 30, PI, TWO_PI);

      fill('green');
      ellipse(60, 488, 50, 170);

      fill('green');
      ellipse(128, 494, 50, 130);
      fill('green');
      ellipse(222, 493, 50, 170);
      fill('green');
      ellipse(648, 489, 50, 170);
      fill('green');
      ellipse(800, 483, 50, 190);
      fill('green');
      ellipse(966, 487, 50, 300);


    }

    print(mouseIsPressed);{

      console.log(mouseX + ',' + mouseY);
    }
}

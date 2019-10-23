var gok ;
var birs = [] ;
var egg ;
var eggPos ;
var myState = 0 ;
var timer ;
var birdim ;





function setup() {
  // put setup code here
  createCanvas(800, 800);
  //spawn the birds
  for (var i = 0; i < 10; i++) {
    birs.push(new Bir());
  }

  gok = loadImage('asset/background.jpg');
  birdim = loadImage('asset/birdz.png');
  egg = loadImage('asset/eags.png');
  //initial eagle position
  eggPos = createVector(width/2, height-80) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
  imageMode(CENTER);

  }

  function draw() {
    // put drawing code here


    switch(myState){
       case 0:
       text("Click to play", 100, 100);

       break;

       case 1:
       game() ;
       timer ++
       if (timer < 600){
         timer = 0 ;
         myState = 2;
       }
       break;

       case 2:
       background(100);
       text("loose", 100, 100);
       break;

       case 3:
       background(255);
       text("win", 100, 100);
       break;


    }
  }

  function mouseReleased(){
    switch(myState){
      case 0:
      myState = 1 ;
      break ;

      case 2:
      resetTheGame() ;
      myState = 0;
      break;

      case 3:
      resetTheGame() ;
      myState = 0;
      break;

    }
  }

  function resetTheGame(){
    birs = [] ; //clear the array
    for (var i = 0; i < 10; i++) {
      birs.push(new Bir());
    }
     timer = 0;
  }


  function Bir() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));


      // methods
      this.display = function() {
       image(birdim, this.pos.x, this.pos.y,);
        //ellipse(this.pos.x-40, this.pos.y+30, 25, 25);
        //ellipse(this.pos.x+40, this.pos.y+30, 25, 25);
      }

      this.drive = function() {
        this.pos.add(this.vel);

        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;

      }

    }


    function checkForKeys() {
      if (keyIsDown(LEFT_ARROW)) eggPos.x = eggPos.x - 5;
      if (keyIsDown(RIGHT_ARROW)) eggPos.x = eggPos.x + 5;
      if (keyIsDown(UP_ARROW)) eggPos.y = eggPos.y - 5;
      if (keyIsDown(DOWN_ARROW)) eggPos.y = eggPos.y + 5;

    }

    function game() {
      image(gok, width/2, height/2);
      //iterate
      for (var i = 0; i < birs.length; i++) {
        birs[i].display();
        birs[i].drive();
        //test if bird is close to eagle
        if (birs[i].pos.dist(eggPos) < 50) {
          birs.splice(i, 1) ;
        }
      }

      if (birs.length == 0) {
        timer = 0
        myState = 3 ;// they won
      }

      // draw the eagle
      fill('green') ;
      image(egg, frogPos.x, frogPos.y,) ;
      checkForKeys() ;

    }

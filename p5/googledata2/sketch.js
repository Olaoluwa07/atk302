var namesArray = [];
var vel = 0;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1CPU8ffBFxyCuNnX3o-IzkKzKy55rBvjABxV68mQPliQ'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].food)) ;
   }

}


function draw() {
  background('#ffcb08');

  // // iterate through the namesArray and display the objects!
  for (let i = 0 ; i < namesArray.length ; i++) {
    namesArray[i].display() ;
  namesArray[i].drive();
  }

}


// my circle class
function Circle(myName, myShape) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.food = myShape;
  this.vel = createVector(random(-4, 4), random(-4, 4));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);



  this.display = function() {




     if (this.food === "Circle"){
       ellipse(this.pos.x, this.pos.y, 100, 100);

     }else{
       noStroke();
       fill(this.r, this.g, this.b);
       rect(this.pos.x, this.pos.y, 100, 100);
     }
    fill("white");

    text(this.name, this.pos.x, this.pos.y);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

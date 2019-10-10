var myCar ;
var myCar1 ; //declare
function setup() {
  // put setup code here
  createCanvas(800,800);
  myCar = new Car() ;
  myCar1 = new Car() ;
}

function draw() {
  // put drawing code here
  background(100);
  myCar.display() ;
  myCar.drive() ;
  myCar1.display() ;
  myCar1.drive() ;
  }
  // our car
  function Car() {
   //attributes
   this.x = random(width) ;
   this.y = random(height) ;
   this.r = random(255) ;
   this.g = random(255) ;
   this.b = random(255) ;
   this.vel = random(5) ;
   //methods
   this.display = function (){
     fill(this.r, this.g, this.b);
     rect(this.x, this.y, 100, 50) ;
   }

   this.drive = function (){
     this.x = this.x + this.vel ;
      if (this.x > width){
        this.x = 0
      }
   }

  }

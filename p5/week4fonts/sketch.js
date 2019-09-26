var myFont;
var x = 0 ;


function preload() {
  myFont = loadFont('fonts/CuteMaple.ttf');

 // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;

}
function draw() {
  background(100);
  fill('#ffcb08');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(79);	// SETS the size of the font
  text('welcome atk', (x+10), 90); // DISPLAYS TEXT WITH THE FONT
  x++ ;
  if (x > width){
    x = 0 ;
  }



}

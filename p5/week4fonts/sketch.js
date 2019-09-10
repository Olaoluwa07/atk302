var myFont;
var song1;


function preload() {
  myFont = loadFont('fonts/CuteMaple.ttf');
  function preload() {
  song1 = loadSound('assets/donnerre2.mp3');
 // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
 song1.play(); 
}
function draw() {
  fill('#ffcb08');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(79);	// SETS the size of the font
  text('welcome atk', 40, 90); // DISPLAYS TEXT WITH THE FONT

}

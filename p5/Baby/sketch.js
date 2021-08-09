// Run this example on a mobile device
// Rotate the device by 90 degrees in the
// X-axis to change the value.

var value = 0;
var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {
  createCanvas(400,400);
  background(255,0,0);
  fill(0);

  // create an audio in
  mic = new p5.AudioIn();

  // users must manually enable their browser microphone for recording to work properly!
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}

function draw() {
    text('Enable mic and click the mouse to begin recording', 100, 100);
  fill(value);
  rect(25, 25, 50, 50);
  print(value);
}

function deviceTurned() {
  if (turnAxis === 'X') {
    if (value === 0) {
      recorder.record(soundFile);
      value = 255;
    }
    else if (value === 255) {
      recorder.stop();
    //  soundFile.play();
      value = 0;
    }
  }
  else if (turnAxis === 'Y') {
    soundFile.play();
  }
}

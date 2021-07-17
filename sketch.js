noiseChange = 0.05;
lineWidth = 60;
numLines = 10;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(5);

  for (j = 0; j < numLines; j++) {
    for (i = 0, noiseVal = 0; i < height; i++, noiseVal += noiseChange) {
      offset = map(noise(noiseVal), 0, 1, -lineWidth / 2, lineWidth / 2);
      offset2 = map(noise(noiseVal + noiseChange), 0, 1, -lineWidth / 2, lineWidth / 2);
      x = j * (width / numLines) + (width/numLines/2);
      line(x + offset, i, x + offset2, i + 1);
    }
  }
}
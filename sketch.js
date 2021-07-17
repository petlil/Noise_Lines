noiseChange = 0.01;
noiseOffset = 0.2;
lineWidth = 60;
numLines = 10;
coords = [];
col1 = 0;
col2 = 80;
col3 = 133;

function setup() {
  col1 = random(0, 255);
  col2 = random(0, 255);
  col3 = random(0, 255);
  createCanvas(500, 400);
  frameRate(24);
  createLine();
}

function draw() {
  createLine(noiseOffset);
  background(col1, col2, col3);
  noStroke();
  //stroke(255, 255, 255);
  strokeWeight(2);
  for (j = 0; j < numLines; j++) {
    fill(col1 - j * (col1 / numLines), col2, col3 + j * (col1 / numLines))
    beginShape();
    vertex(width, 0)
    for(i = 0; i < height; i++){
      x = j*(width / numLines);
      vertex(x+coords[i][0], i);
    }
    vertex(width, height);
    endShape(CLOSE);
  }
  noiseOffset+=0.05;
}

function createLine(noiseOffset){
  for (i = 0, noiseVal = noiseOffset; i < height; i++, noiseVal += noiseChange) {
    offset = map(noise(noiseVal, noiseOffset), 0, 1, -lineWidth / 2, lineWidth / 2);
    offset2 = map(noise(noiseVal + noiseChange, noiseOffset), 0, 1, -lineWidth / 2, lineWidth / 2);
    coords[i] = [offset, offset2];
  }
}
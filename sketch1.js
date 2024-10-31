let rectangles = [];
let numRects = 30;
let song; 
let playbackRate = 1;

function preload(){
  song = loadSound("song.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

  for (let i = 0; i < numRects; i++) {
    rectangles[i] = {
      x: random(width),
      y: random(height),
      vel: createVector(0, 0),
      rectColor: color(random(255), random(255), random(255)),
      direction: 0
    };
  }
}

function draw() {
  background(0, 0, 0, 8);

  for (let i = 0; i < numRects; i++) {
    fill(rectangles[i].rectColor);
    rect(rectangles[i].x, rectangles[i].y, random(10, 40), random(10, 40));

    rectangles[i].x += rectangles[i].vel.x;
    rectangles[i].y += rectangles[i].vel.y;

    if (rectangles[i].x > windowWidth || rectangles[i].x < 0){
      rectangles[i].vel.x = rectangles[i].vel.x * -1;
    }
    if (rectangles[i].y > windowHeight || rectangles[i].y < 0){
      rectangles[i].vel.y = rectangles[i].vel.y * -1;
    }
  }
}

let counter = 0;
function mousePressed() {
  for (let i = 0; i < numRects; i++) {
    if (rectangles[i].direction % 2 == 0) {
      rectangles[i].vel = createVector(random(-6, 6), random(-6, 6));
    } else {
      rectangles[i].vel = createVector(0, 0);
    }
    rectangles[i].direction += 1;
  }
  
  if(counter % 2 == 0) {
    background(0, 255, 0);
    song.play();
  } else {
    song.pause();
    background(200, 0, 0);
  }
  
  counter++;
}

function mouseDragged() {
  let centerX = width / 2;

  let distanceFromCenter = mouseX - centerX;

  playbackRate = map(distanceFromCenter, -centerX, centerX, 0.5, 2.0);
  song.rate(playbackRate); 
  
  for (let i = 0; i < numRects; i++) {
    rectangles[i].rectColor = color(random(255), random(255), random(255));
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

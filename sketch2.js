let rectangles = [];
let numRects = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  noStroke();
  for (let i = 0; i < numRects; i++) {
    rectangles[i] = {
      x: random(width),
      y: random(height),
      vel: createVector(random(-5,5), random(-5,5)),
      rectColor: color(random(255)),
      direction: (0)
    }
  }
}

function draw() {
  background(15, 0, 60, 8); //can also experiment with how much it fades. I like 6 too.

  for (let i = 0; i < numRects; i++) {
    fill(rectangles[i].rectColor);
    rect(rectangles[i].x, rectangles[i].y, random(10,40), random(10,40));

    rectangles[i].x += rectangles[i].vel.x;
    rectangles[i].y += rectangles[i].vel.y;
    if (rectangles[i].x > windowWidth || rectangles[i].x < 0){
      rectangles[i].vel.x = rectangles[i].vel.x * -1
    }
    if (rectangles[i].y > windowHeight || rectangles[i].y < 0){
      rectangles[i].vel.y = rectangles[i].vel.y * -1
    }
  }
}

function mousePressed() {
  for (let i = 0; i < numRects; i++) {
    if (rectangles[i].direction % 3 == 0){
      rectangles[i].vel = createVector(random(-5, 5), random(-5, 5));
    }
    if (rectangles[i].direction % 3 == 1){
      rectangles[i].vel = createVector(0, random(-5, 5));
    }
    if (rectangles[i].direction % 3 == 2){
      rectangles[i].vel = createVector(random(-5,5), 0);
    }
    rectangles[i].direction += 1
  }
}
function mouseDragged(){
  for (let i = 0; i < numRects; i++) {
      fill(rectangles[i].rectColor = color(random(255)));
  }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}
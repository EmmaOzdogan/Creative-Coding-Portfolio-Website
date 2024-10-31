let title, myCanvas; 
let circles = []
let bouncingImages = [];
const numImages = 5;
let bouncingCircle;
let images = []; // images array

function preload() {
  for (let i = 0; i < numImages; i++) {
    images[i] = loadImage(`image${i + 1}.png`); 
  }
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  title_1 = select("#id1");
  title_2 = select("#id2");
  title_3 = select("#id3");
  title_4 = select("#id4");
  title_5 = select("#id5");
  title_6 = select("#id6");
  title_7 = select("#id7");
  title_8 = select("#id8");
  title_9 = select("#id9");
  title_10 = select("#id10");
  title_11 = select("#id11");
  title_12 = select("#id12");
  title_13 = select("#id13");
  title_14 = select("#id14");
  title_15 = select("#id15");

  bouncingCircle = new BouncingCircle(width / 2, height / 2, 60, "Start spam clicking!!", true);
  bouncingCircle_2 = new BouncingCircle(width / 4, height / 4, 70, "Hi! It's Emma! Welcome to my portfolio!");
  bouncingCircle_3 = new BouncingCircle(width / 6, height / 6, 100, "I hope you like the sketches!");

  for (let i = 0; i < numImages; i++) {
    bouncingImages.push(new BouncingImage(random(width), random(height), images[i], random(50, 80)));
  }
}

let x1 = 0, y1 = 0, x2 = 0, y2 = 118;

function draw() {
  background(180, 240, 255);

  title_1.position(windowWidth / 3.05 -14, y1);
  title_2.position(windowWidth / 3.05 + 20, y2);
  title_3.position(windowWidth / 3.05 + 64, y1);
  title_4.position(windowWidth / 3.05 + 108, y2);
  title_5.position(windowWidth / 3.05 + 164, y1);
  title_6.position(windowWidth / 3.05 + 202, y2);
  title_7.position(windowWidth / 3.05 + 236, y1);
  title_8.position(windowWidth / 3.05 + 270, y2);
  title_9.position(windowWidth / 3.05 + 326, y1);
  title_10.position(windowWidth / 3.05 + 364, y2);
  title_11.position(windowWidth / 3.05 + 398, y1);
  title_12.position(windowWidth / 3.05 + 432, y2);
  title_13.position(windowWidth / 3.05 + 476, y1);
  title_14.position(windowWidth / 3.05 + 518, y2);
  title_15.position(windowWidth / 3.05 + 556, y1);

  clear();
  if (y1 < windowHeight / 12) {  
    y1++;
  } else {
    y1 = windowHeight / 12;
  }
  if (y2 > windowHeight / 12) {  
    y2--;
  } else {
    y2 = windowHeight / 12;
  }

  for (const bouncingImage of bouncingImages) {
    bouncingImage.move();
    bouncingImage.display();
  }

  bouncingCircle.move();
  bouncingCircle.display();
  
  bouncingCircle_2.move();
  bouncingCircle_2.display();

  bouncingCircle_3.move();
  bouncingCircle_3.display();

  for (const circle_c of circles) {
    circle_c.move();
    circle_c.display();
  }
}

function mousePressed() {
  circles.push(new Circle_c(mouseX, mouseY));
}

class Circle_c {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.numLines = random(30, 50);
    this.radius = random(30, 80);
    this.circleColor = color(random(0, 255), random(0, 255), random(0, 255));
  }

  move() { 
    this.loc.add(this.vel);
    if (this.loc.x > windowWidth || this.loc.x < 0){
      this.vel.x = this.vel.x * -1;
    }
    if (this.loc.y > windowHeight || this.loc.y < 0){
      this.vel.y = this.vel.y * -1;
    }
  }

  display() {
    push();
    strokeWeight(3);
    rotate(20, this.loc);
    translate(this.loc.x, this.loc.y);

    for (let i = 0; i < this.numLines; i++) {
      stroke(this.circleColor);
      rotate(360 / this.numLines);
      
      circle(random(0, windowWidth), random(0, windowHeight), this.radius);
    }
    
    pop();
  }
}

class BouncingImage {
  constructor(x, y, img, radius) {
    this.loc = createVector(x, y);
    this.vel = createVector(random(-3.5, 3.5), random(-3.5, 3.5));
    this.img = img;
    this.radius = radius; // set a size for the image back in bouncing image in setup
  }

  move() {
    this.loc.add(this.vel);

    if (this.loc.x > windowWidth - this.radius || this.loc.x < this.radius) {
      this.vel.x *= -1;
    }
    if (this.loc.y > windowHeight - this.radius || this.loc.y < this.radius) {
      this.vel.y *= -1;
    }
  }

  display() {
    image(this.img, this.loc.x, this.loc.y, this.radius, this.radius); 
  }
}

class BouncingCircle {
  constructor(x, y, radius, text, followMouse = false) {
    this.loc = createVector(x, y);
    this.vel = createVector(random(-4, 4), random(-4, 4));
    this.radius = radius;
    this.text = text;
    this.fontSize = radius / 4; // adjusts font size based on radius
    this.font = 'fantasy';
    this.followMouse = followMouse;
  }
  
  move() {
    if (this.followMouse) {
      let target = createVector(mouseX, mouseY);
      this.loc.lerp(target, 0.1); // adjust num for more/less drag
    } else {
      this.loc.add(this.vel);
      if (this.loc.x > windowWidth - this.radius || this.loc.x < this.radius) this.vel.x *= -1;
      if (this.loc.y > windowHeight - this.radius || this.loc.y < this.radius) this.vel.y *= -1;
    }
  }

  display() {
    fill((frameCount * random(3, 4)) % 300, (frameCount * random(4, 5)) % 300, (frameCount * 0.2) % 300);
    stroke(255); //border + text color
    strokeWeight(1.5);
    ellipse(this.loc.x, this.loc.y, this.radius * 2);

    // displays text inside the circle
    textAlign(CENTER, CENTER);
    textSize(this.fontSize);
    textFont(this.font);
    fill(255, 1);

    // splits text into multiple lines
    let words = this.text.split(' ');
    let lines = [];
    let line = '';
    let lineHeight = this.fontSize * 1.2;

    // creates lines for multi-line text
    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' ';
      let testWidth = textWidth(testLine);

      if (testWidth > this.radius * 0.8) {
        lines.push(line);
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    if (line.length > 0) {
      lines.push(line);
    }

    for (let i = 0; i < lines.length; i++) {
      text(lines[i], this.loc.x, this.loc.y - (lines.length - 1) * lineHeight / 2 + i * lineHeight);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

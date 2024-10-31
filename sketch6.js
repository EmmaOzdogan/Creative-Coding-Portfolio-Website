let xLoc = [], yLoc = [], numSegments = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0; i<numSegments; i++){
    xLoc[i] = width/40;
    yLoc[i] = height/40; 
  }
  
  color_in = (frameCount * 2) % 1
  fill(color_in);
  stroke(255);
  
}

function draw() {
  background(0, 3);
  
  
  xLoc[numSegments] = mouseX;
  yLoc[numSegments] = mouseY;
  
   xLoc[numSegments] = xLoc[numSegments] + random(0,100);
   yLoc[numSegments] = yLoc[numSegments] + random(0,100);
 
  for(let i = 0; i<numSegments; i++){
    
    xLoc[i] = xLoc[i+1];
    yLoc[i] = yLoc[i+1];
    
    let diameter = cos(map(i,0,numSegments, 0,PI))*150;
    
    let r = sin(map(i,0,numSegments, 0,PI))*150;
    let b = 255 - (cos(map(i,0,numSegments, 0,PI*4))*255);
    
     r = r + random(-100,100);
    
     b = b + random(-100,100);
    
    stroke(r, (frameCount * 3) % 200, b);
    
    
 triangle(xLoc[i+1],yLoc[i+1],diameter,diameter, random(0,800), random(0,800));
    
 
  }
  
  
}
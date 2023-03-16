// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r=15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  angleMode(DEGREES);
}

function draw() {
  background(220);
  sizescale(mouseWheel());
  gears(mouseX, mouseY,r,45);
}


function gears(x,y,r,n){
  // iner gear
  ellipse(x,y,r);
  // outer gear
  outerGears(x,y,r,n);

}


function outerGears(x,y,r,n){
  for (let i = -n; i <= 360; i +=n){
    
      
    
    //outer cog
    if (i<=360){
      arc(x,y,r*2,r*2,i,i+n/2); 
    
    }
    //iner cog
    if (i<=360){ 
      arc(x,y,r*1.5,r*1.5,i-n/2,i);
    }
  }
  

}
function sizescale(thing){
  if (thing.DeltaY > 0){
    r += 50;
  }
  else if (thing.DeltaY < 0){
    r -= 50;

  }
}
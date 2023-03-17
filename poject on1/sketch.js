// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r=15;
let allgear=[];
let n=45;
let s =15;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  angleMode(DEGREES);
}
  

function draw() {
  background(220);
  for (const gear of allgear) {
    gears(gear.x,gear.y,gear.r,gear.n,gear.s);
    
    

    

  }
  gears(mouseX, mouseY,r,n,s);
  if (keyIsDown(LEFT_ARROW)) {
    s -= 50; 
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    s += 50;
  }
}


function gears(x,y,r,n,spin){
  // iner gear
  push();
  translate(x,y);
  rotate(spin);
  
  ellipse(0,0,r);
  // outer gear
  outerGears(0,0,r,n);
  pop();
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
function mouseWheel(event){
  if (event.delta > 0){
    r += 50;
  }
  else if (event.delta < 0){
    r -= 50;

  }
}




function mousePressed(){
  let gear={
    x:mouseX,
    y:mouseY,
    r:r,
    n:n,
    s:s,

  };
  allgear.push(gear);
}


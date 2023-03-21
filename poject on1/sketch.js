// gears
// Alexander Johnson 
// 3/20/23
//
// Extra for Experts:
//  the use of the rotate function was not taught to the extent that it was used in the project.

let r=15;
let allgear=[];
let n=45;
let s =1;
let speed=1;
let angle = 0;
//setup and switching it to angle mode
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  angleMode(DEGREES);
}
  

function draw() {
  if (angle >= 360){
    angle = 0;

  }
  
  // the 2012 "ugliest colour in the world" Pantone 448 C
  background(74, 65, 42);
  
  //array caller
  for (let gear of allgear) {
    
    gear.angle+=1;
    gear.angle+=gear.speed;
    gears(gear.x,gear.y,gear.r,gear.n,gear.s,gear.angle);

  }
  angle+=1;
  angle+=speed;
  gears(mouseX, mouseY,r,n,s,angle);
  //direction contol
  if (keyIsDown(LEFT_ARROW)) {
    s = -1 ; 
    
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    s = 1 ; 
    
  }
  //speed control
  if (keyIsDown(UP_ARROW)) {
    speed += 0.05;

    
  }
  else if (keyIsDown(DOWN_ARROW)) {
    speed -= 0.05;
    
  }
 //console.log(s);
 //console.log(frameCount);
 //console.log(speed);
}


function gears(x,y,r,n,s,angle){
  //boundary 
  push();
  noStroke();
  ellipse(x,y,r*2,r*2);
  pop();
  // rotation
  push();
  translate(x,y);
  rotate((angle)/s);
  angle+=1;
  //inner gear
  push();
  fill(random(255),random(255),random(255));
  ellipse(0,0,r);
  pop();
  // outer gear
  push()
  fill(random(255),random(255),random(255));
  outerGears(0,0,r,n);
  pop();
  pop();
}


function outerGears(x,y,r,n){
  for (let i = -n; i <= 360; i +=n){
    
      
    
    //outer cog
    if (i<=360){
      arc(x,y,r*2,r*2,i,i+n/2); 
    
    }
    //inner cog
    if (i<=360){ 
      arc(x,y,r*1.5,r*1.5,i-n/2,i);
    }
  }
  

}
//size change
function mouseWheel(event){
  if (event.delta > 0){
    r += 25;
  }
  else if (event.delta < 0){
    r -= 25;

  }
}



//aray bank
function mousePressed(){
  let gear={
    x:mouseX,
    y:mouseY,
    r:r,
    n:n,
    s:s,
    speed:speed,
    angle:angle,

  };
  console.log(gear);
  allgear.push(gear);
}


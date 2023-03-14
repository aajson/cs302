
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let h=height;
let w=width;
let terrains = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  makerect();
}

function draw() {
  background(220);
  
  //makeball(x,y);
  for (let i = 0; i < terrains.length; i++) {
    rect( x ,terrains[i].y, 1, terrains[i].h);
  }
 
}

function makeball(x, y,) {
  fill(255);
  ellipse(x, y, 10, 10);
}

function makerect(x,y) {
  let time = 0;
  for (let x=0; x<2000; x++) {
    //let x = noise(time) * width;
    let y = noise(time) * height;
    let therect = {
      //x:x,
      y:y,
      //width:w,
      hight:h,  

    };
    terrains.push(therect);
    fill(red);
  
    time += 0.01;

  }
}

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill()
}

function draw() {
  background(220);
  gears(mouseX, mouseY,100);
}


function gears(x,y,r,n){
  // iner gear
  ellipse(x,y,r);
  // outer gear
  outerGears(x,y,n);

}


function outerGears(x,y){
  for (let i = -90; i <= 360; i +=90){
    if (i){
      arc(x,y,200,200,i,i+90,); 
    
 
    }
    else{
      arc(x,y,150,150,i,i+90,);
    }
  }


}
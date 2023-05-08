// OOP Pair Programming Starter Code
// Alexander wasi
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let bullets=[];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
  
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
  bulletCheck();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!
function bulletCheck() {
  for (let bullet of bullets) {
    bullet.update();
    bullet.display();
    bullets=bullets.filter(bullet.isOnScreen);
    
  }
 
}


class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.theImage = theImage;
  }
 
  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(LEFT_ARROW) || keyIsDown("65")) {
      this.x-=5;
    }
    
    if (keyIsDown(UP_ARROW)|| keyIsDown("87")){
      if (this.y>0){
        this.y-=5;
      }
    }
    if (keyIsDown(DOWN_ARROW)|| keyIsDown("83")){
      if (this.y<windowHeight-225){
        this.y+=5;
      }
    }
    if (keyIsDown(RIGHT_ARROW)|| keyIsDown("68")){
      this.x+=5;
    }  
    if (keyIsDown("32")){
      bullets.push(new Bullet(this.x,this.y,0,10,bulletImage));
    }

    if (this.x> windowWidth ){
      this.x=0;
    }
    if (this.x < 0  ){
      this.x=windowWidth;

    }
  }

  display() {
    image(this.theImage,this.x,this.y); 
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x+39;
    this.y = y -12;
    this.dx = dx;
    this.dy = dy;
    this.theImage = theImage;
  }

  update() {
    this.x +=this.dx;
    this.y -=this.dy;
  }

  display() {
    // show the bullet
    image(this.theImage,this.x,this.y);
  }

  isOnScreen(group){
    if (group.y > windowHeight || group.y < 0){
      return false;
    }
    return true;
  }

}




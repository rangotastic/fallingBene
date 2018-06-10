//eine leere Liste mit dem Namen flocken
let flocken = [];
let bene

function preload(){
	bene = loadImage("src/bene.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);



  for (let i = 0; i < 50; i += 1) {
    //Schneeflocke anfügen (100 mal)
    flocken.push(new Schneeflocke());
  }
}

function draw() {
  background(41, 127, 98);

  for (let i = 0; i < 50; i += 1) {
    flocken[i].move();
    flocken[i].display();
    flocken[i].melt();
    flocken[i].reset();
  }
}

//Bauplan für eine Schneeflocke
class Schneeflocke {
  constructor() {
    //"constructor" von JS vorgegeben
    this.x = random(0, width);
    this.y = random(-height,-width/10)
    this.d = random(width / 20, width / 10);
    this.speed = random(0.5, 1.5);
    this.versatz = random(0, 200);
    this.factor = 1;
  }
  display() {
    // "display" isr unser Name der Variable
    image(bene, this.x, this.y, this.d, this.d)
    // noStroke();
    // fill(255);
    // rect(this.x, this.y, this.d, this.d, this.d / 2)
  }

  move() {
    this.y += this.speed;
    this.x += sin((frameCount + this.versatz) / 15) * (width / 1000) * this.factor;
  }

  melt() {
    if (this.y + width / 40 >= height) {

      this.speed = 0;
      this.factor = 0;
      this.d -= width / 9800;
      this.x += width / 19600;
      this.y += width / 19600;

    }
  }

  reset() {
    if (this.d <= 0) {
      this.d = random(width/20, width/10);
      this.y = -width / 10;
      this.factor = 1;
      this.speed = random(0.5, 1.5);
    }
  }
}

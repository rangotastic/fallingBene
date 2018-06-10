//eine leere Liste mit dem Namen flocken
let flocken = [];
let bene

function preload(){
	bene = loadImage("/Bene.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //flocke = new Schneeflocke();
  // flocken.push(new Schneeflocke());
  // flocken.push(new Schneeflocke());
  // flocken.push(new Schneeflocke());

  for (let i = 0; i < 1000; i += 1) {
    //Schneeflocke anfügen (100 mal)
    flocken.push(new Schneeflocke());
  }
}

function draw() {
  background(100, 118, 135);

  for (let i = 0; i < 1000; i += 1) {
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
    this.y = -50;
    this.d = random(5, 11);
    this.speed = random(0.5, 1.5);
    this.versatz = random(0, 200);
    this.factor = 1;
  }
  display() {
    //"display" isr unser Name der Variable
		image(bene,this.x,this.y,this.d,this.d)
  }
  move() {
    this.y += this.speed;
    this.x += sin((frameCount + this.versatz) / 15) / (this.d / 2) * this.factor;
  }
  melt() {
    if (this.y >= height) {
      this.speed = 0;
      this.factor = 0;
      this.d -= 0.1;
    }
  }
  reset() {
    if (this.d <= 0) {
      this.d = random(5, 11);
      this.y = -50;
      this.factor = 1;
      this.speed = random(0.5, 1.5);
    }
  }
}

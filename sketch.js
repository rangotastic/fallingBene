//                        Snowflakes
//                                               by Yazmin Mendosa & Max O'Dell
let flake = [];
let bene;
let max;
let yazmin;

function preload() {
  bene = loadImage("src/bene.png");
  max = loadImage("src/max.png");
  yazmin = loadImage("src/yazmin.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);



  for (let i = 0; i < 100; i += 1) {
    //add 100 flakes to array
    flake.push(new Snowflake());
  }
}

function draw() {
  background(106, 213, 229);
//50 flakes behind snowman
  for (let i = 0; i < 49; i += 1) {
    flake[i].move();
    flake[i].display();
    flake[i].melt();
    flake[i].reset();
  }

  snowman(width / 1.5, height, height / 4);

// 50 flakes in front of snowman
  for (let i = 50; i < 100; i += 1) {
    flake[i].move();
    flake[i].display();
    flake[i].melt();
    flake[i].reset();
  }
}



class Snowflake {
  constructor() {

    this.x = random(0, width); // x-position
    this.y = random(-height, -width / 10); //y-position
    this.d = random(width / 40, width / 20); // diametre of flake
    this.speed = random(0.5, 1.5); // speed of flake
    this.versatz = random(0, 200); // adds random number to frame-count so flakes don't move synced
    this.factor = 1; //in order to stop x-movement when ground is hit
    this.picture = random(0, 1);//decides which portrait is shown in flake
  }
  display() {
    if (this.picture >= 0.5) {
      image(max, this.x, this.y, this.d, -this.d);
    } else {
      image(yazmin, this.x, this.y, this.d, -this.d);
    }

  }

  move() {
    this.y += this.speed;
    this.x += sin((frameCount + this.versatz) / 15) * (width / 1000) * this.factor;
  }

  melt() {
    if (this.y >= height) {

      this.speed = 0; //no movement in y-direction
      this.factor = 0; //no movement in x-direction
      this.d -= width / 9800; //diameter getting smaller
      this.x += width / 19600; //change x-position since picture is a rectangle
      this.y += width / 19600; //change y-position since picture is a rectangle

    }
  }

  reset() {
    if (this.d <= 0) {
      this.d = random(width / 40, width / 20);
      this.y = -width / 10;
      this.factor = 1;
      this.speed = random(0.5, 1.5);
    }
  }
}

function snowman(x, y, d) {

  fill(255);
  ellipse(x, y - d / 3, d);
  ellipse(x, y - d, d / 1.5);
  //snowman head(picture of Benedikt Kaffai)
  image(bene, x - d / 5.66, y - d*2.05 / 6, d / 2.83, -d / 2.83);
  fill(0);
  ellipse(x, y - d / 1.5, d / 20);
  ellipse(x, y - d / 3, d / 20);
  ellipse(x, y - d / 2.25, d / 20);
}

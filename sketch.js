var sun,mercury,    venus,    mars,    earth,    jupiter,    saturn,    uranus,    neptune;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload() {
    sunImg = loadImage("sun.jpg");
    mercuryImg = loadImage("mercury.jpg");
    venusImg = loadImage("venus.jpg");
    earthImg = loadImage("earth.jpg");
    marsImg = loadImage("mars.jpg");
    jupeterImg = loadImage("jupiter.jpg");
    saturnImg = loadImage("saturn.jpg");
    uranusImg = loadImage("uranus.jpg");
    neptuneImg = loadImage("neptune.jpg");

}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER,200,200)
    sun = createSprite(200, 200);
    sun.addImage("sun", sunImg);
    sun.scale = 0.5;
    sun.setCollider("circle", -85, -60, 140);
    //sun.debug = true;

    mercury = createSprite(100, 100);
    mercury.addImage("mercury", mercuryImg);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
    //mercury.debug = true;

    venus = createSprite(100, 50);
    venus.addImage("venus", venusImg);
    venus.scale = 0.15;

    earth = createSprite(200,50);
    earth.addImage("earth", earthImg);
    earth.scale = 0.22;

    mars = createSprite(80, 220);
    mars.addImage("mars", marsImg);
    mars.scale = 0.3;

    jupiter = createSprite(80, 210);
    jupiter.addImage("jupiter", jupeterImg);
    jupiter.scale = 0.4;

    saturn = createSprite(340, 30);
    saturn.addImage("saturn", saturnImg);
    saturn.scale = 0.5;

    uranus = createSprite(150, 100);
    uranus.addImage("uranus", uranusImg);
    uranus.scale = 0.3;

    neptune = createSprite(150, 50);
    neptune.addImage("neptune", neptuneImg);
    neptune.scale = 0.2;

}

function draw() {
    background("blue");
angle=angle+anglespeed;
    translate(50,50);
    rotate(angle)
    if(frameCount%2===0){
sun.scale = sun.scale+0.001



    }
    drawSprites();
}
let img;

let imgUnits = [];
let imageSet = [];

function preload(){
    for(let e=1; e<11; e++){
        img = loadImage('../media/bg-main/'+ e +'.jpg');
        imageSet.push(img);
    }
}

let py = 150;
let px = 400;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#bg-container");
    canvas.style("z-index","-1");

    for(let i=0; i< imageSet.length; i++ ){
        let x = random(-10,windowWidth-100);
        let r = random(100,300);
        let y = random(-700,200);
        let imgUnit = new Unit(x,y,r, imageSet[i]);
        imgUnits.push(imgUnit);
    }
    console.log(imgUnits);
}



function draw(){
    canvas.background(0);
    for(let i=0; i< imgUnits.length; i++ ){
    imgUnits[i].show();
    imgUnits[i].move();
    }
}





class Unit {
    constructor(x, y, r, imageSet) {
        this.x = x;
        this.y = y
        this.r = r;
        this.u = imageSet;
    }
    move(){
        let ar = this.u.width / this.u.height;
        this.y += 2;
        if(this.y-(this.r*ar) > windowHeight){
            this.r = random(100,300);
            this.x = random(50,windowWidth - 100);
            this.y = random(-700,-100);
        }
    }

    show(){
        let ar = this.u.width / this.u.height;
        fill(200,200,50,100);
        rect(this.x,this.y,this.r*ar,this.r);
        image(this.u, this.x,this.y,this.r*ar,this.r);
    }
}
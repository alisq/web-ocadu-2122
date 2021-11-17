let oneImage

let imgUnits = [];
let imageSet = [];

function preload(){
    oneImage = loadImage('../media/kubrick/02.jpg');
}

let py = 150;
let px = 400;


function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#bg-container");
    canvas.style("z-index","-1");

    for(let i=0; i< imageSet.length; i++ ){
        let x = random(50,150);
        let r = random(50,150);
        let y = canvas.height + r;
        let imgUnit = new Unit(x,y,r);
        imgUnits.push(imgUnit);
    }

}



function draw(){
    canvas.background(0);
    fill(200,200,50,100);
    rect(800,py+100,100, 200);
    image(oneImage,px, py, 200,200);
    image(oneImage,px+450, py-250, 100,120);

    py += 5;

    if(py-300 > canvas.height){
        py = -250;
        px = px + random(-500,400);
    }
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }



class Unit {
    contructor(x, y, r, imageSet) {
        this.x = x;
        this.y = y
        this.r = r;
        this.u = random(imageSet);
    }
    move(){
        this.y -= 1;
        let py = this.y - this.r/2;
        if(py > 0){
            this.y = canvas.height+ this.r;
        }
    }

    show(){
        fill(255);
        rect(this.x,this.y,this.r, this.r);
    }
}
var canvas;
let negativeSpace;
let col1, col2;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("landing-page");
    canvas.position(0,0);
    canvas.style('z-index',-1);

}

function draw(){
    col1 = map(mouseX, 0, canvas.width, 0,200);
    col2 = map(mouseY, 0, canvas.height, 50,200);
    colorSpace = color(col1, col2, 250);
    background(colorSpace);
    negativeSpace = selectAll('.negative');
    for(i=0; i<negativeSpace.length; i++){
        negativeSpace[i].style('background-color',colorSpace);
    }


    
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
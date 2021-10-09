var canvas;
let negativeSpace;
let col1, col2;
let h = document.body.scrollHeight;


function setup(){
    canvas = createCanvas(windowWidth, h+500);
    canvas.position(0,0);
    canvas.style('z-index',-1);

}

function draw(){
    col1 = map(mouseX, 0, canvas.width, 0,255);
    col3 = map(mouseX, 0, canvas.width, 100,255);
    col2 = map(mouseY, 0, canvas.height, 50,200);
    colorSpace = color(col1, col2, col3);
    canvas.background(colorSpace);
    document.body.style.backgroundColor = colorSpace;
    negativeSpace = selectAll('.negative');
    for(i=0; i<negativeSpace.length; i++){
        negativeSpace[i].style('background-color',colorSpace);
    }
    
    fill(240, 248, 255);
    circle(mouseX, mouseY, 10,10);


    
}
function windowResized() {
    resizeCanvas(windowWidth, h);
  }
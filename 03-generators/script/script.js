
let canvas; 
let canvasWidth = window.innerWidth; - 300;
let canvasHeight = window.innerHeight;;

let clearBut;

let imgSet = [];
let leafSet =[];
let catSet = [];
let indSet = [];

let leafCheck, catCheck, indCheck;

function preload(){
  
  for(i=0; i<3; i++){
    leafSet[i] = loadImage('media/images/leaf'+ i +'.jpg');
    catSet[i] = loadImage('media/images/cat' + i + '.jpg');
    indSet[i] = loadImage('media/images/building'+i+'.jpg')
  }
  


}


function setup(){ 
  pixelDensity(1);

  let canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.parent('canvas-container');
  canvas.background(0);
  leafCheck = createCheckbox('Leaf', false);
  catCheck = createCheckbox('Cat', false);
  indCheck = createCheckbox('Industrial', false);

  leafCheck.addClass('checkbox');
  catCheck.addClass('checkbox');
  indCheck.addClass('checkbox');

  leafCheck.parent('option-tag');
  catCheck.parent('option-tag');
  indCheck.parent('option-tag');

  clearBut = createButton('Remake');
  clearBut.addClass('button-tag');
  clearBut.parent('toolbar-container');
  clearBut.mousePressed(resetCanvas);

  noLoop();
}

function draw(){

  leafCheck.changed(imgPush);
  catCheck.changed(catPush);
  indCheck.changed(indPush);
}

function resetCanvas(){
  imgSet = [];
  background(0);
  $('input[type=checkbox]').each(function() 
  { 
        this.checked = false; 
  }); 
}

function imgPush(){
  var isFounded;
  if(leafCheck.checked()){
    imgSet.push(...leafSet);
    for(let i = 0; i<imgSet.length; i++){
      filter01(imgSet[i]);
    }
  } else  {
    
    console.log('leaf unchecked');
  }
}
function catPush(){
  if(catCheck.checked()){
    imgSet.push(...catSet);
    console.log(imgSet);
    for(let i = 0; i<imgSet.length; i++){
      filter02(imgSet[i]);
    }
  } else {
    console.log('cat unchecked');
  }
}
function indPush(){
  if(indCheck.checked()){
    imgSet.push(...indSet);
    console.log(imgSet);
    for(let i = 0; i<imgSet.length; i++){
      filter02(imgSet[i]);
    }
  } else {
    console.log('industry unchecked');

  }
}

function filter02(item){
  let tileSize = int(random(60,70));

  let tiles = [];
  let cols = item.width / tileSize;
  let rows = item.height / tileSize;
  let cells = cols * rows;

  item.resize(500,0);
  item.loadPixels();
    
  for (var y=0; y< item.height-tileSize; y+= tileSize){
      for(var x=0; x< item.width-tileSize; x += tileSize){
        
        let imgTile = item.get(x,y,tileSize,tileSize);

        imgTile.loadPixels();
        for (let i = 0; i < 4 * (imgTile.width * imgTile.height); i += 4) {
          let r = imgTile.pixels[i];
          let g = imgTile.pixels[i+1];
          let b = imgTile.pixels[i+2]
          let bright = ((0.3 * r) + (0.59 * g) + (0.11 * b));
          }
          
        imgTile.updatePixels();
        tiles.push(imgTile);
    }
    
  }
  let numbers = [];
  console.log(tiles.length);

  for( o=0; o<100; o++){
    numbers.push(int(random(0,tiles.length)));
  }
  console.log('random numbers is ' + numbers);


  let dt = random(100,windowHeight);
  let squareX = random(0,windowWidth);
  let squareY = random(item.height,windowHeight)-item.height;
  for(e=0; e<tiles.length; e++) {
    if( numbers.includes(e) == false ){
      image(tiles[e], squareX,squareY);
    }

    squareX += tileSize;
    if (squareX >= item.width-tileSize+dt) {
      squareX = dt;
      squareY += tileSize;    
    }
  }
  tiles = [];  
}


// FILTER 01
function filter01(item){
  let threshold = 50;
  item.resize(400,0);
  item.loadPixels();

    for(let h = 0; h<item.height; h++){
      for(let w = 0; w<item.width; w++){

        let pixel = item.get(w,h);

        let area = brightness(pixel);
        

        if(area < threshold){
          item.set(w, h, color(255,0,90,255));
        } else {
          item.set(w, h, color(255,0));
        }
      }
    }

  item.updatePixels();
  imageMode(CORNER);
  image(item,random(50,canvasWidth-300),random(50,canvasHeight-600),item.width,item.height);


}

// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }

// function handleFile(file) {
//   print(file);
//   if (file.type === 'image') {
//     img = createImg(file.data, '');
//     img.hide();
//   } else {
//     img = null;
//   }
// }



// RESOURCES

// Better pixel access
// https://youtu.be/u5lkHcbiFt0
// https://www.youtube.com/watch?v=JUDYkxU6J0o

// Tiles manipulation reference
// https://res.constraint.systems/
// https://github.com/constraint-systems/res

// Tiles images
// https://editor.p5js.org/KevinWorkman/sketches/Sdd4N08uZ

// Manipulating img pixel in p5js
// https://idmnyu.github.io/p5.js-image/ 

// Loading screen
//  https://github.com/processing/p5.js/wiki/p5.js-overview#loading-screen

// Get portions of an images
//  https://www.youtube.com/watch?v=-YS5t1R-GO8

// Making sense of algorithm 
// https://compform.net/random/
// https://bost.ocks.org/mike/algorithms/ *** digest this. 


// Trying hard with code

// https://compform.net/pixels/
// https://www.youtube.com/watch?v=KfLqRuFjK5g
// https://editor.p5js.org/Andrew_Sink/sketches/YM-Ply_cD
// https://youtu.be/JUDYkxU6J0o
//  https://openprocessing.org/sketch/1239015


// BUTTONS AND BEYOND
// https://github.com/processing/p5.js/wiki/Beyond-the-canvas
// https://p5js.org/reference/#/p5.Element
// https://youtu.be/QP7BTAlyMJo

//  READ LATER
// https://github.com/processing/p5.js/wiki/Optimizing-p5.js-Code-for-Performance

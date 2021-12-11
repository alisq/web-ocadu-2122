$.noConflict();

let canvas; 
let canvasWidth = window.innerWidth; - 300;
let canvasHeight = window.innerHeight;;

let input;
let img, img02;
let imgSet =[];



let threshold = 50;

function preload(){
  
  img = loadImage('media/images/cat.jpg');
  img02 = loadImage('media/images/rock-1.jpg');
  for(i=1; i<4; i++){
  imgSet[i-1] = loadImage('media/images/leaf-'+i+'.jpg');
  };
}


function setup(){ 
  pixelDensity(1);

  let canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.parent('canvas-container');
  canvas.background(0);


  // noLoop();
}

function draw(){
  for(e=0; e<2; e++){

  filter02(img);
  // DRAW FILTER 1
  for(i=0; i<imgSet.length; i++){
    filter01(imgSet[i]);
  }
  filter02(img02);
  }


}

function filter02(item){
  let tileSize = int(random(25,50));

  let tiles = [];
  let cols = item.width / tileSize;
  let rows = item.height / tileSize;
  let cells = cols * rows;

  item.resize(item.width/3,item.height/3);
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
  let squareX = dt;
  let squareY = random(item.height,windowHeight)-item.height;
  for(e=0; e<tiles.length; e++) {
    if( numbers.includes(e) == false ){
      image(tiles[e], squareX,squareY);
    }

    squareX += tileSize;
    if (squareX >= item.width-tileSize+dt) {
      squareX = dt;
      squareY += tileSize;    }
  }  
}


// FILTER 01
function filter01(item){
  item.resize(item.width/3,item.height/3);
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


//  READ LATER
// https://github.com/processing/p5.js/wiki/Optimizing-p5.js-Code-for-Performance

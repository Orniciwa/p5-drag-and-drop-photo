let bgc = 0;
let tc = 255;
let canvasText = 'drop a photo';
let avail = false;
let img;

let imgW = 1000;
let imgH = 1000;

let p5img;

let reverse = false;

let palette1 = [
  "#6f725a",
  "#9b9b7a",
  "#baa587",
  "#d9ae94",
  "#f9f1dc",
  "#ffcb69",
  "#e8ac65",
  "#d08c60",
  "#b58463",
  "#937662",
];



function setup() {
  let canvas = createCanvas(imgW, imgH);

  canvas.mouseOver(highlightWithoutDrag);
  canvas.mouseOut(unhighlightWithoutDrag);

  canvas.dragOver(highlightWithDrag);
  canvas.dragLeave(unhighlightWithDrag);

  canvas.drop(gotFile);
}

function draw() {
  if (avail == false) {
    background(bgc);
    fill(tc);
    textSize(0.1 * width);
    textAlign(CENTER, CENTER);
    text(canvasText, width / 2, height / 2);
  }
}

function highlightWithoutDrag() {
  bgc = "#ef476f";
  tc = 255;
}

function unhighlightWithoutDrag() {
  bgc = 0;
  tc = 255;
}

function highlightWithDrag() {
  bgc = "#073b4c";
  tc = 255;
}

function unhighlightWithDrag() {
  bgc = 0;
  tc = 255;
}

function gotFile(file) {
  avail = true;
  if (img) {
    img.remove();
  }
  if (file.type ==='image') {
    img = createImg(file.data, '').hide();
    // p5img = loadImage(img);
    image(img, 0, 0, width, height);
    console.log(img);
    
  }
}
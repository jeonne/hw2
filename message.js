function setup() {
  createCanvas(1000, 150);
}

function draw() {
  background(195, 224, 227);
  

  printB(50+(50+15)*1, 50);
  printY(50+(50+15)*2, 50);
  printE(50+(50+15)*3, 50);
  printB(50+(50+15)*4, 50);
  printY(50+(50+15)*5, 50);
  printE(50+(50+15)*6, 50);
  printM(50+(50+15)*7, 50);
  printY(50+(50+15)*8, 50);
  printB(50+(50+15)*9, 50);
  printL(50+(50+15)*10, 50);
  printU(50+(50+15)*11, 50);
  printE(50+(50+15)*12, 50);
}


function printB(x, y) {
  
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+25, x+50, y+25);
  line(x, y+50, x+50, y+50);
  line(x+50, y+25, x+50, y+50);
  line(x+50, y, x+50, y+25);
  
}

function printY(x,y) {
  line(x, y, x, y+25);
  line(x, y+25, x+50, y+25);
  line(x+50, y+25,x+50,y+25);
  line(x+50, y+25, x+50, y);
  line(x+50, y+25, x+50, y+50);
  line(x+50, y+50, x, y+50);
  
}

function printE(x, y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+25, x+50, y+25);
  line(x, y+50, x+50, y+50);

}


function printM(x,y) {
  line(x, y, x, y+50);
  line(x, y, x+25, y);
  line(x+25, y, x+25, y+50);
  line(x+25, y, x+50, y);
  line(x+50, y, x+50, y+50);
  
}


function printL(x,y) {
  line(x, y, x, y+50);
  line(x, y+50, x+50, y+50);
  
}

function printU(x,y) {
  line(x, y, x, y+50);
  line(x, y+50, x+50, y+50);
  line(x+50, y, x+50, y+50);

}

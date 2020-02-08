function setup() {
  createCanvas(2000, 150);
}

function draw() {
  background(255, 204, 94);
  printA(50+(50+15)*0, 50);
  printB(50+(50+15)*1, 50);
  printC(50+(50+15)*2, 50);
  printD(50+(50+15)*3, 50);
  printE(50+(50+15)*4, 50);
  printF(50+(50+15)*5, 50);
  printG(50+(50+15)*6, 50);
  printH(50+(50+15)*7, 50);
  printI(50+(50+15)*8, 50);
  printJ(50+(50+15)*9, 50);
  printK(50+(50+15)*10, 50);
  printL(50+(50+15)*11, 50);
  printM(50+(50+15)*12, 50);
  printN(50+(50+15)*13, 50);
  printO(50+(50+15)*14, 50);
  printP(50+(50+15)*15, 50);
  printQ(50+(50+15)*16, 50);
  printR(50+(50+15)*17, 50);
  printS(50+(50+15)*18, 50);
  printT(50+(50+15)*19, 50);
  printU(50+(50+15)*20, 50);
  printV(50+(50+15)*21, 50);
  printW(50+(50+15)*22, 50);
  printX(50+(50+15)*23, 50);
  printY(50+(50+15)*24, 50);
  printZ(50+(50+15)*25, 50);
}

function printA(x, y) {
  
  line(x, y, x, y+50);
  line(x+50, y, x+50, y+50);
  line(x, y, x+50, y);
  line(x, y+25, x+50, y+25);
  
}

function printB(x, y) {
  
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+25, x+50, y+25);
  line(x, y+50, x+50, y+50);
  line(x+50, y+25, x+50, y+50);
  line(x+50, y, x+50, y+25);
  
}

function printC(x, y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+50, x+50, y+50);
  
}

function printD(x, y) {
  line(x, y, x+50, y);
  line(x, y+50, x+50, y+50);
  line(x+50, y, x+50, y+50);
  
}

function printE(x, y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+25, x+50, y+25);
  line(x, y+50, x+50, y+50);

}

function printF(x, y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+25, x+50, y+25);
  
}

function printG(x, y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+50, x+50, y+50);
  line(x+50, y+50, x+50, y+25);
  line(x+50, y+25, x+25, y+25);
  
}

function printH(x,y) {
  line(x, y, x, y+50);
  line(x+50, y, x+50, y+50);
  line(x, y+25, x+50, y+25);
  
}

function printI(x, y) {
  line(x, y, x+50, y);
  line(x, y+50, x+50, y+50);
  line(x+25, y, x+25, y+50);
  
}

function printJ(x, y) {
  line(x, y, x+50, y);
  line(x+25, y, x+25, y+50);
  line(x, y+50, x+25, y+50);

}

function printK(x, y) {
  line(x, y, x, y+50);
  line(x, y+25, x+25, y+25);
  line(x+25, y+25, x+50, y);
  line(x+25, y+25, x+50, y+50);
  
}

function printL(x,y) {
  line(x, y, x, y+50);
  line(x, y+50, x+50, y+50);
  
}

function printM(x,y) {
  line(x, y, x, y+50);
  line(x, y, x+25, y);
  line(x+25, y, x+25, y+50);
  line(x+25, y, x+50, y);
  line(x+50, y, x+50, y+50);
  
}

function printN(x,y) {
  line(x, y, x, y+50);
  line(x, y, x+25, y);
  line(x+25, y, x+25, y+50);
  line(x+50, y, x+50, y+50);
  line(x+25, y+50, x+50, y+50);
  
}

function printO(x,y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+50, x+50, y+50);
  line(x+50, y, x+50, y+50);
  
}

function printP(x,y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x+50, y, x+50, y+25);
  line(x+50, y+25, x, y+25);
  
}

function printQ(x,y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x, y+50, x+50, y+50);
  line(x+50, y, x+50, y+25);
  line(x+50, y+50, x+25, y+25);
  
}

function printR(x,y) {
  line(x, y, x, y+50);
  line(x, y, x+50, y);
  line(x+50, y, x+50, y+25);
  line(x+50, y+25, x, y+25);
  line(x+25, y+25, x+50, y+50);
  
}
  
function printS(x,y) {
  line(x, y, x+50, y);
  line(x, y, x, y+25);
  line(x, y+25, x+50, y+25);
  line(x+50, y+25, x+50, y+50);
  line(x+50, y+50, x, y+50);
  
}

function printT(x,y) {
  line(x, y, x+50, y);
  line(x+25, y, x+25, y+50);
  
}

function printU(x,y) {
  line(x, y, x, y+50);
  line(x, y+50, x+50, y+50);
  line(x+50, y, x+50, y+50);

}

function printV(x,y) {
  line(x, y, x+15, y+50);
  line(x+50, y, x+35, y+50);
  line(x+15, y+50, x+35, y+50);
  
}

function printW(x,y) {
  line(x, y, x, y+50);
  line(x, y+50, x+50, y+50);
  line(x+50, y, x+50, y+50);
  line(x+25, y+50, x+25, y);
  
}

function printX(x,y) {
  line(x, y, x+25, y+25);
  line(x, y+50, x+25, y+25);
  line(x+25, y+25, x+50, y);
  line(x+25, y+25, x+50, y+50);
  
}

function printY(x,y) {
  line(x, y, x, y+25);
  line(x, y+25, x+50, y+25);
  line(x+50, y+25,x+50,y+25);
  line(x+50, y+25, x+50, y);
  line(x+50, y+25, x+50, y+50);
  line(x+50, y+50, x, y+50);
  
}

function printZ(x,y) {
  line(x, y, x+50, y);
  line(x+50, y, x+50, y+25);
  line(x+50, y+25, x, y+25);
  line(x, y+25, x, y+50);
  line(x, y+50, x+50, y+50);
  
}


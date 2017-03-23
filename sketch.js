var MinNumBlob = 5;
var MinNumBot = 1;
var NumPGen = 10;
var Gen = 0;
var Blobs = [];
var Bots = [];
var NGen = [];
var CGen = [];
var PGen = [];
var PGenProtect= [];
var Plot = [];
function setup() {
  createCanvas(1000, 800);
  fullscreen();
}

function draw() {
  Grid();
  if(Blobs.length < MinNumBlob){for(i=0; i<(MinNumBlob-Blobs.length);i++){Blobs.push(new Blob())}}
  Populate();
  for(i=0; i<Blobs.length;i++){Blobs[i].show();if(Blobs[i].x < 0){Blobs.splice(Blobs[i])}}
  for(i=0; i<Bots.length;i++){Bots[i].show();Bots[i].update()}
  for(i=0; i<Blobs.length;i++){
    if(Bots[0].x == Blobs[i].x&&Bots[0].y==Blobs[i].y){Bots[0].Kill();Blobs.splice(Blobs[i]);break;}


  }
}

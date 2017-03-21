var MinNumBlob = 5;
var MinNumBot = 1;
var Blobs = [];
var Bots = [];
function setup() {
  createCanvas(1000, 500);
  fullscreen();
}

function draw() {
  Grid();
  if(Blobs.length < MinNumBlob){for(i=0; i<(MinNumBlob-Blobs.length);i++){Blobs.push(new Blob())}}
  if(Bots.length < MinNumBot){for(i=0; i<(MinNumBot-Bots.length);i++){Bots.push(new Bot())}}
  for(i=0; i<Blobs.length;i++){Blobs[i].show();if(Blobs[i].x < 0){Blobs.splice(Blobs[i])}}
  for(i=0; i<Bots.length;i++){Bots[i].show();Bots[i].update()}
  for(i=0; i<Blobs.length;i++){
    if(Bots[0].x == Blobs[i].x&&Bots[0].y==Blobs[i].y){Bots[0].Kill();}

  }
}

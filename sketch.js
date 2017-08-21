MinNumBlob = 4;
botPerGen = 10;
Grid = [[0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ];
Blobs = [];
TargBot = 1;
nextGen = [];
currGen = [];
prevGen = [];
Gen = 0;


function setup() {
  createCanvas(1000, 500);
  fullscreen();
  Grid();
}
tick = 0
function draw() {
  while(Blobs.length < MinNumBlob) {
    Blobs.push(new Blob());
  }

  //EVERY ACTION SHOULD BE INSIDE THE TICK SECTION BELLOW TO LIMIT SPEED
  if(tick % 20 == 0){
    background(255);
    Grid();
    for(i = 0;i<Blobs.length;i++){
      Blobs[i].update();
      if(Blobs[i].x<0){Blobs[i] = new Blob()}
    }

  }
  tick +=1

}

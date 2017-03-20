function Blob(){
  this.x = round(map(round(random(0,4)),0,4,700,1000));
  this.y = round(random(0,500));
  if(this.x < 800){this.x=715};
  if(this.x > 800 && this.x < 900){this.x=815};
  if(this.x > 900 && this.x < 1000){this.x=915};
  if(this.y < 100){this.y=15};
  if(this.y > 100 && this.y < 200){this.y=115};
  if(this.y > 200 && this.y < 300){this.y=215};
  if(this.y > 300 && this.y < 400){this.y=315};
  if(this.y > 400 && this.y < 500){this.y=415};

  var tick = 0
  this.show = function(){
    colorMode(RGB);
    fill(255,0,0);
    rect(this.x,this.y,70,70);
    if(tick%25 == 0){this.x = this.x -100}
    tick ++;
  }
}

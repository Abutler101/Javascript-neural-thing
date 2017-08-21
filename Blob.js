function Blob(){
  this.x = round(random(7,9))*100;
  this.y = round(random(0,4))*100;
  console.log(this.x,this.y);

  this.show = function(){
    colorMode(RGB);
    rectMode(CORNER)
    fill(255,0,0);
    rect(this.x,this.y,100,100);
  }

  this.update = function(){
    this.x -= 100;
    this.show()
  }
}

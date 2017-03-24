function Bot(){
  this.x = 115;
  this.y = 215;
  this.yAb = 0;
  this.score = 0;
  this.genes = [];
  this.Net=new Net(this.genes);
  this.Kill = function(){
    this.genes = [this.Net.L1nw,this.Net.L2nw,this.Net.L3nw];
    console.log("I Died");
    GenScore+=this.score;
    CGen.push([this.genes,this.score]);
    Bots.pop();
  }
  this.show = function(){
    this.update();
    colorMode(RGB);
    fill(0,0,225);
    rect(this.x,this.y,70,70);
  }
  this.update = function(){
    this.composite =[];
    this.score ++;
    if(this.y == 15) {this.yAb = 1;}
    else if(this.y == 115) {this.yAb = 2;}
    else if(this.y == 215) {this.yAb = 3;}
    else if(this.y == 315) {this.yAb = 4;}
    else if(this.y == 415) {this.yAb = 5;}
    this.Sight = [get(250,50)[0],get(250,150)[0],get(250,250)[0],get(250,350)[0],get(250,450)[0]]
    this.composite = this.Sight;
    this.composite.push(this.yAb);
    this.Net.update(this.composite);
    if(this.Net.o[0]>this.Net.o[1]&&this.y>100){this.y -=100};
    if(this.Net.o[1]>this.Net.o[0]&&this.y<400){this.y +=100};
  }

}

function Bot(){
  this.x = 100;
  this.y = 200;
  this.sight = [[0.0,0.0,0.0,0.0],
                [0.0,0.0,0.0,0.0],
                [0.0,0.0,0.0,0.0],
                [0.0,0.0,0.0,0.0],
                [0.0,0.0,0.0,0.0]
               ];

//  this.genes = [];
//  this.nodeDistribution = [20,10,10,10,2];
//  for(var i=0;i<nodeDistribution.length-1;i++){
//    this.genes[i] = new Matrix(nodeDistribution[i+1],nodeDistribution[i]);
//    this.genes[i].randomise();
//  }
//  this.brain = new NeuralNetwork(this.nodeDistribution,this.genes);

  this.show = function(){
    colorMode(RGB);
    rectMode(CORNER)
    fill(0,0,255);
    rect(this.x,this.y,100,100);
  }

  this.see = function(){
    if (get(50,50)[0] > get(50,50)[1] || get(50,50)[0] > get(50,50)[2]) {this.sight[0][0] = 1.0; console.log(this.sight[0][0]);}
    if (get(50,150)[0] > get(50,150)[1] || get(50,150)[0]>get(50,150)[2]) {this.sight[1][0] = 1.0; console.log(this.sight[1][0]);}
    if (get(50,250)[0] > get(50,250)[1] || get(50,250)[0]>get(50,250)[2]) {this.sight[2][0] = 1.0; console.log(this.sight[2][0]);}
    if (get(50,350)[0] > get(50,350)[1] || get(50,350)[0]>get(50,350)[2]) {this.sight[3][0] = 1.0; console.log(this.sight[3][0]);}
    if (get(50,450)[0] > get(50,450)[1] || get(50,450)[0]>get(50,450)[2]) {this.sight[4][0] = 1.0; console.log(this.sight[4][0]);}

    if (get(150,50)[0] > get(150,50)[1] || get(150,50)[0] > get(150,50)[2]) {this.sight[0][1] = 1.0; console.log(this.sight[0][1]);}
    if (get(150,150)[0] > get(150,150)[1] || get(150,150)[0] > get(150,150)[2]) {this.sight[1][1] = 1.0; console.log(this.sight[1][1]);}
    if (get(150,250)[0] > get(150,250)[1] || get(150,250)[0] > get(150,250)[2]) {this.sight[2][1] = 1.0; console.log(this.sight[2][1]);}
    if (get(150,350)[0] > get(150,350)[1] || get(150,350)[0] > get(150,350)[2]) {this.sight[3][1] = 1.0; console.log(this.sight[3][1]);}
    if (get(150,450)[0] > get(150,450)[1] || get(150,450)[0] > get(150,450)[2]) {this.sight[4][1] = 1.0; console.log(this.sight[4][1]);}

    if (get(250,50)[0] > get(250,50)[1] || get(250,50)[0] > get(250,50)[2]) {this.sight[0][2] = 1.0; console.log(this.sight[0][2]);}
    if (get(250,150)[0] > get(250,150)[1] || get(250,150)[0] > get(250,150)[2]) {this.sight[1][2] = 1.0; console.log(this.sight[1][2]);}
    if (get(250,250)[0] > get(250,250)[1] || get(250,250)[0] > get(250,250)[2]) {this.sight[2][2] = 1.0; console.log(this.sight[2][2]);}
    if (get(250,350)[0] > get(250,350)[1] || get(250,350)[0] > get(250,350)[2]) {this.sight[3][2] = 1.0; console.log(this.sight[3][2]);}
    if (get(250,450)[0] > get(250,450)[1] || get(250,450)[0] > get(250,450)[2]) {this.sight[4][2] = 1.0; console.log(this.sight[4][2]);}

    if (get(350,50)[0] > get(350,50)[1] || get(350,50)[0] > get(350,50)[2]) {this.sight[0][3] = 1.0; console.log(this.sight[0][3]);}
    if (get(350,150)[0] > get(350,150)[1] || get(350,150)[0] > get(350,150)[2]) {this.sight[1][3] = 1.0; console.log(this.sight[1][3]);}
    if (get(350,250)[0] > get(350,250)[1] || get(350,250)[0] > get(350,250)[2]) {this.sight[2][3] = 1.0; console.log(this.sight[2][3]);}
    if (get(350,350)[0] > get(350,350)[1] || get(350,350)[0] > get(350,350)[2]) {this.sight[3][3] = 1.0; console.log(this.sight[3][3]);}
    if (get(350,450)[0] > get(350,450)[1] || get(350,450)[0] > get(350,450)[2]) {this.sight[4][3] = 1.0; console.log(this.sight[4][3]);}
  }

  this.update = function(){
    this.show()
    this.see()
//    this.thought = this.brain.query(this.sight);
    console.log(this.sight);
  }

}

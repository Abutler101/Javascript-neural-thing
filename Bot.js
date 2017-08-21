function Bot(){
  this.x = 100;
  this.y = 200;
  this.sight = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
               ];

  this.genes = [];
  this.nodeDistribution = [20,10,10,10,2];
  for(var i=0;i<nodeDistribution.length-1;i++){
    this.genes[i] = new Matrix(nodeDistribution[i+1],nodeDistribution[i]);
    this.genes[i].randomise();
  }
  this.brain = new NeuralNetwork(this.nodeDistribution,this.genes);

  this.show = function(){
    colorMode(RGB);
    rectMode(CORNER)
    fill(0,0,255);
    rect(this.x,this.y,100,100);
  }

  this.update = function(){
    this.show()
    //update vision
    this.sight
    this.thought = this.brain.query(this.sight);
  }

}

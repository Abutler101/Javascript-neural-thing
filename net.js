function Net(){
  //output after Layer 1
  this.L1o = [null,null,null,null,null,null];
  //output after layer 2
  this.L2o = [null,null];
  //weights for layer 1 of synapses
  this.L1nw = [random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1)];
  //weights for layer 2 of synapses
  this.L2nw = [random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1),random(0,1)];
  //final output
  this.o = null;
  this.update = function(rawIn){
    this.I1=rawIn[0]; //color value
    this.I2=rawIn[1]; //color value
    this.I3=rawIn[2]; //color value
    this.I4=rawIn[3]; //color value
    this.I5=rawIn[4]; //color value
    this.I6=rawIn[5]; //Y pos in abstract form
    //synapses for layer one with weights factored
    this.L1syn = [this.I1*this.L1nw[0],this.I2*this.L1nw[1],this.I3*this.L1nw[2],this.I4*this.L1nw[3],this.I5*this.L1nw[4],this.I6*this.L1nw[5]]
    //generating the nodes of layer one - 15 nodes
    this.L1n1 = Sig(this.L1syn[0],this.L1syn[1]);//1,2
    this.L1n2 = Sig(this.L1syn[0],this.L1syn[2]);//1,3
    this.L1n3 = Sig(this.L1syn[0],this.L1syn[3]);//1,4
    this.L1n4 = Sig(this.L1syn[0],this.L1syn[4]);//1,5
    this.L1n5 = Sig(this.L1syn[0],this.L1syn[5]);//1,6
    this.L1n6 = Sig(this.L1syn[1],this.L1syn[2]);//2,3
    this.L1n6 = Sig(this.L1syn[1],this.L1syn[3]);//2,4
    this.L1n6 = Sig(this.L1syn[1],this.L1syn[4]);//2,5
    this.L1n6 = Sig(this.L1syn[1],this.L1syn[5]);//2,6
    this.L1n6 = Sig(this.L1syn[2],this.L1syn[3]);//3,4
    this.L1n6 = Sig(this.L1syn[2],this.L1syn[4]);//3,5
    this.L1n6 = Sig(this.L1syn[2],this.L1syn[5]);//3,6
    this.L1n6 = Sig(this.L1syn[3],this.L1syn[4]);//4,5
    this.L1n6 = Sig(this.L1syn[3],this.L1syn[5]);//4,6
    this.L1n6 = Sig(this.L1syn[4],this.L1syn[5]);//5,6
  }
}

function Net(){
  //output after Layer 1
  this.L1o = [];
  //output after layer 2
  this.L2o = [];
  //weights for layer 1 of synapses
  this.L1nw = [random(0,1),random(0,1),random(0,1),random(0,1),
               random(0,1),random(0,1),random(0,1),random(0,1),
               random(0,1),random(0,1),random(0,1),random(0,1)];
  //weights for layer 2 of synapses
  this.L2nw = [random(0,1),random(0,1),random(0,1),random(0,1),
               random(0,1),random(0,1),random(0,1),random(0,1),
               random(0,1),random(0,1),random(0,1),random(0,1)];
  //weights for layer 3 of synapses
  this.L3nw = [random(0,1),random(0,1),random(0,1),random(0,1),
               random(0,1),random(0,1),random(0,1),random(0,1),
               random(0,1),random(0,1),random(0,1),random(0,1)]
  //final output
  this.o = [0,0];
  this.update = function(rawIn){
    this.I1=rawIn[0]; //color value
    this.I2=rawIn[1]; //color value
    this.I3=rawIn[2]; //color value
    this.I4=rawIn[3]; //color value
    this.I5=rawIn[4]; //color value
    this.I6=rawIn[5]; //Y pos in abstract form
    //synapses for layer one with weights factored
    this.L1syn = [this.I1*this.L1nw[0],this.I2*this.L1nw[1],this.I3*this.L1nw[2],
                  this.I4*this.L1nw[3],this.I5*this.L1nw[4],this.I6*this.L1nw[5]];
    //generating the nodes of layer one - 15 nodes
    this.L1n1 = Sig2(this.L1syn[0],this.L1syn[1]);//1,2
    this.L1n2 = Sig2(this.L1syn[0],this.L1syn[2]);//1,3
    this.L1n3 = Sig2(this.L1syn[0],this.L1syn[3]);//1,4
    this.L1n4 = Sig2(this.L1syn[0],this.L1syn[4]);//1,5
    this.L1n5 = Sig2(this.L1syn[0],this.L1syn[5]);//1,6
    this.L1n6 = Sig2(this.L1syn[1],this.L1syn[2]);//2,3
    this.L1n7 = Sig2(this.L1syn[1],this.L1syn[3]);//2,4
    this.L1n8 = Sig2(this.L1syn[1],this.L1syn[4]);//2,5
    this.L1n9 = Sig2(this.L1syn[1],this.L1syn[5]);//2,6
    this.L1n10 = Sig2(this.L1syn[2],this.L1syn[3]);//3,4
    this.L1n11 = Sig2(this.L1syn[2],this.L1syn[4]);//3,5
    this.L1n12 = Sig2(this.L1syn[2],this.L1syn[5]);//3,6
    this.L1n13 = Sig2(this.L1syn[3],this.L1syn[4]);//4,5
    this.L1n14 = Sig2(this.L1syn[3],this.L1syn[5]);//4,6
    this.L1n15 = Sig2(this.L1syn[4],this.L1syn[5]);//5,6
    //write results of layer one to a results list
    this.L1o = [this.L1n1,this.L1n2,this.L1n3,this.L1n4,this.L1n5,
                this.L1n6,this.L1n7,this.L1n8,this.L1n9,this.L1n10,
                this.L1n11,this.L1n12,this.L1n13,this.L1n14,this.L1n15]
    //synapses for layer two with weights factored
    this.L2syn = [this.L1n1*this.L2nw[0],this.L1n2*this.L2nw[1],this.L1n3*this.L2nw[2],
                  this.L1n4*this.L2nw[3],this.L1n5*this.L2nw[4],this.L1n6*this.L2nw[5],
                  this.L1n7*this.L2nw[6],this.L1n8*this.L2nw[7],this.L1n9*this.L2nw[8],
                  this.L1n10*this.L2nw[9],this.L1n11*this.L2nw[10],this.L1n12*this.L2nw[11],
                  this.L1n13*this.L2nw[12],this.L1n14*this.L2nw[13],this.L1n15*this.L2nw[14]];
    //generating the nodes of layer two - 5 nodes
    this.L2n1 = Sig3(this.L2syn[0],this.L2syn[1],this.L2syn[2]);    //1,2,3
    this.L2n2 = Sig3(this.L2syn[3],this.L2syn[4],this.L2syn[5]);    //4,5,6
    this.L2n3 = Sig3(this.L2syn[6],this.L2syn[7],this.L2syn[8]);    //7,8,9
    this.L2n4 = Sig3(this.L2syn[9],this.L2syn[10],this.L2syn[11]);  //10,11,12
    this.L2n5 = Sig3(this.L2syn[12],this.L2syn[13],this.L2syn[14]); //13,14,15
    //synapses for layer three with weights factored
    this.L3syn = [this.L2n1*this.L3nw[0],this.L2n2*this.L3nw[1],this.L2n2*this.L3nw[2],
                  this.L2n3*this.L3nw[3],this.L2n3*this.L3nw[4],this.L2n4*this.L3nw[5],
                  this.L2n4*this.L3nw[6],this.L2n5*this.L3nw[7],this.L2n1*this.L3nw[8],
                  this.L2n5*this.L3nw[9],this.L2n2*this.L3nw[10],this.L2n4*this.L3nw[11]];
    //generating the nodes of layer three - 6 nodes
    this.L3n1 = Sig2(this.L3syn[0],this.L3syn[1]);
    this.L3n2 = Sig2(this.L3syn[2],this.L3syn[3]);
    this.L3n3 = Sig2(this.L3syn[4],this.L3syn[5]);
    this.L3n4 = Sig2(this.L3syn[6],this.L3syn[7]);
    this.L3n5 = Sig2(this.L3syn[8],this.L3syn[9]);
    this.L3n6 = Sig2(this.L3syn[10],this.L3syn[11]);
  }
}

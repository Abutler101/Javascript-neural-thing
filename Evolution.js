function Evolve(){
  for(i=0; i < PGen.length;i++){PGen[i].pop();}
  PGen.splice(5,5);
//Too lazy to loop - num1 - Breed 1&2
  L1Dom = PGen[0][0][0];
  L1Res = PGen[0][0][0];
  L1New1 = [L1Dom[0],L1Res[1],L1Dom[2],L1Res[3],L1Dom[4],L1Res[5],
           L1Dom[6],L1Res[7],L1Dom[8],L1Res[9],L1Dom[10],L1Dom[11]];
  L2Dom = PGen[0][0][0];
  L2Res = PGen[0][0][0];
  L2New1 = [L2Dom[0],L2Res[1],L2Dom[2],L2Res[3],L2Dom[4],L2Res[5],
           L2Dom[6],L2Res[7],L2Dom[8],L2Res[9],L2Dom[10],L2Res[11],
           L2Dom[12],L2Res[13],L2Dom[14],L2Dom[15]];
  L3Dom = PGen[0][0][0];
  L3Res = PGen[0][0][0];
  L3New1 = [L3Dom[0],L3Res[1],L3Dom[2],L3Res[3],L3Dom[4],L3Res[5],
           L3Dom[6],L3Res[7],L3Dom[8],L3Res[9],L3Dom[10],L3Res[11],
           L3Dom[12],L3Res[13],L3Dom[14],L3Dom[15]];
//Tooo lazy to loop - num2 - Breed 3&4
L1Dom = PGen[0][0][0];
L1Res = PGen[0][0][0];
L1New2 = [L1Dom[0],L1Res[1],L1Dom[2],L1Res[3],L1Dom[4],L1Res[5],
         L1Dom[6],L1Res[7],L1Dom[8],L1Res[9],L1Dom[10],L1Dom[11]];
L2Dom = PGen[0][0][0];
L2Res = PGen[0][0][0];
L2New2 = [L2Dom[0],L2Res[1],L2Dom[2],L2Res[3],L2Dom[4],L2Res[5],
         L2Dom[6],L2Res[7],L2Dom[8],L2Res[9],L2Dom[10],L2Res[11],
         L2Dom[12],L2Res[13],L2Dom[14],L2Dom[15]];
L3Dom = PGen[0][0][0];
L3Res = PGen[0][0][0];
L3New2 = [L3Dom[0],L3Res[1],L3Dom[2],L3Res[3],L3Dom[4],L3Res[5],
         L3Dom[6],L3Res[7],L3Dom[8],L3Res[9],L3Dom[10],L3Res[11],
         L3Dom[12],L3Res[13],L3Dom[14],L3Dom[15]];




  NGen = [[L1New,L2New,L3New]]
}

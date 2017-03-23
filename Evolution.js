function Evolve(){
  for(i=0; i < PGen.length;i++){PGen[i].pop();}
  PGen.splice(5,5);
//Too lazy to loop - num1 - Breed 1&2
//[which geneset][0][which layer]
  L1Dom = PGen[0][0][0];
  L1Res = PGen[1][0][0];
  L1New1 = [L1Dom[0],L1Res[1],L1Dom[2],L1Res[3],L1Dom[4],L1Res[5],
           L1Dom[6],L1Res[7],L1Dom[8],L1Res[9],L1Dom[10],L1Dom[11]];
  L2Dom = PGen[0][0][1];
  L2Res = PGen[1][0][1];
  L2New1 = [L2Dom[0],L2Res[1],L2Dom[2],L2Res[3],L2Dom[4],L2Res[5],
           L2Dom[6],L2Res[7],L2Dom[8],L2Res[9],L2Dom[10],L2Res[11],
           L2Dom[12],L2Res[13],L2Dom[14],L2Dom[15]];
  L3Dom = PGen[0][0][2];
  L3Res = PGen[1][0][2];
  L3New1 = [L3Dom[0],L3Res[1],L3Dom[2],L3Res[3],L3Dom[4],L3Res[5],
           L3Dom[6],L3Res[7],L3Dom[8],L3Res[9],L3Dom[10],L3Res[11],
           L3Dom[12],L3Res[13],L3Dom[14],L3Dom[15]];

//Too lazy to loop - num1 - Breed 2&3
  L1Dom = PGen[1][0][0];
  L1Res = PGen[2][0][0];
  L1New2 = [L1Dom[0],L1Res[1],L1Dom[2],L1Res[3],L1Dom[4],L1Res[5],
           L1Dom[6],L1Res[7],L1Dom[8],L1Res[9],L1Dom[10],L1Dom[11]];
  L2Dom = PGen[1][0][1];
  L2Res = PGen[2][0][1];
  L2New2 = [L2Dom[0],L2Res[1],L2Dom[2],L2Res[3],L2Dom[4],L2Res[5],
           L2Dom[6],L2Res[7],L2Dom[8],L2Res[9],L2Dom[10],L2Res[11],
           L2Dom[12],L2Res[13],L2Dom[14],L2Dom[15]];
  L3Dom = PGen[1][0][2];
  L3Res = PGen[2][0][2];
  L3New2 = [L3Dom[0],L3Res[1],L3Dom[2],L3Res[3],L3Dom[4],L3Res[5],
           L3Dom[6],L3Res[7],L3Dom[8],L3Res[9],L3Dom[10],L3Res[11],
           L3Dom[12],L3Res[13],L3Dom[14],L3Dom[15]];

//Too lazy to loop - num1 - Breed 3&4
  L1Dom = PGen[2][0][0];
  L1Res = PGen[3][0][0];
  L1New3 = [L1Dom[0],L1Res[1],L1Dom[2],L1Res[3],L1Dom[4],L1Res[5],
            L1Dom[6],L1Res[7],L1Dom[8],L1Res[9],L1Dom[10],L1Dom[11]];
  L2Dom = PGen[2][0][1];
  L2Res = PGen[3][0][1];
  L2New3 = [L2Dom[0],L2Res[1],L2Dom[2],L2Res[3],L2Dom[4],L2Res[5],
            L2Dom[6],L2Res[7],L2Dom[8],L2Res[9],L2Dom[10],L2Res[11],
            L2Dom[12],L2Res[13],L2Dom[14],L2Dom[15]];
  L3Dom = PGen[2][0][2];
  L3Res = PGen[3][0][2];
  L3New3 = [L3Dom[0],L3Res[1],L3Dom[2],L3Res[3],L3Dom[4],L3Res[5],
            L3Dom[6],L3Res[7],L3Dom[8],L3Res[9],L3Dom[10],L3Res[11],
            L3Dom[12],L3Res[13],L3Dom[14],L3Dom[15]];
//Too lazy to loop - num1 - Breed 4&5
  L1Dom = PGen[3][0][0];
  L1Res = PGen[4][0][0];
 L1New4 = [L1Dom[0],L1Res[1],L1Dom[2],L1Res[3],L1Dom[4],L1Res[5],
           L1Dom[6],L1Res[7],L1Dom[8],L1Res[9],L1Dom[10],L1Dom[11]];
  L2Dom = PGen[3][0][1];
  L2Res = PGen[4][0][1];
  L2New4 = [L2Dom[0],L2Res[1],L2Dom[2],L2Res[3],L2Dom[4],L2Res[5],
            L2Dom[6],L2Res[7],L2Dom[8],L2Res[9],L2Dom[10],L2Res[11],
            L2Dom[12],L2Res[13],L2Dom[14],L2Dom[15]];
  L3Dom = PGen[3][0][2];
  L3Res = PGen[4][0][2];
  L3New4 = [L3Dom[0],L3Res[1],L3Dom[2],L3Res[3],L3Dom[4],L3Res[5],
            L3Dom[6],L3Res[7],L3Dom[8],L3Res[9],L3Dom[10],L3Res[11],
            L3Dom[12],L3Res[13],L3Dom[14],L3Dom[15]];
//Too lazy to loop - num1 - Breed 1&5
  L1Dom = PGen[0][0][0];
  L1Res = PGen[4][0][0];
  L1New5 = [L1Dom[0],L1Res[1],L1Dom[2],L1Res[3],L1Dom[4],L1Res[5],
                                  L1Dom[6],L1Res[7],L1Dom[8],L1Res[9],L1Dom[10],L1Dom[11]];
  L2Dom = PGen[0][0][1];
  L2Res = PGen[4][0][1];
  L2New5 = [L2Dom[0],L2Res[1],L2Dom[2],L2Res[3],L2Dom[4],L2Res[5],
            L2Dom[6],L2Res[7],L2Dom[8],L2Res[9],L2Dom[10],L2Res[11],
            L2Dom[12],L2Res[13],L2Dom[14],L2Dom[15]];
  L3Dom = PGen[0][0][2];
  L3Res = PGen[4][0][2];
  L3New5 = [L3Dom[0],L3Res[1],L3Dom[2],L3Res[3],L3Dom[4],L3Res[5],
            L3Dom[6],L3Res[7],L3Dom[8],L3Res[9],L3Dom[10],L3Res[11],
            L3Dom[12],L3Res[13],L3Dom[14],L3Dom[15]];
//Generate the new 5
  New6 = [[random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1)],
          [random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1)],
           [random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1)]
         ];
  New7 = [[random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1)],
          [random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1)],
           [random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1)]
         ];
  New8 = [[random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1)],
          [random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1)],
           [random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1)]
         ];
  New9 = [[random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1)],
          [random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1)],
           [random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1)]
         ];
  New10 = [[random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1),
          random(0,1),random(0,1),random(0,1),random(0,1)],
          [random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1),
           random(0,1),random(0,1),random(0,1),random(0,1)],
           [random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1),
            random(0,1),random(0,1),random(0,1),random(0,1)]
         ];
  NGen = [[L1New1,L2New1,L3New1],[L1New2,L2New2,L3New2],[L1New3,L2New3,L3New3],
          [L1New4,L2New4,L3New4],[L1New5,L2New5,L3New5],New6,New7,New8,New9,New10];
}

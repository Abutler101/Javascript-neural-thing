function Populate(){
  if(CGen.length < NumPGen && Gen === 0){
    if(Bots.length < MinNumBot){for(i=0; i<MinNumBot-Bots.length;i++){Bots.push(new Bot())}}
  }
  else if (CGen.length < NumPGen && Gen != 0) {
    if(Bots.length < MinNumBot){
      for(i=0; i<MinNumBot-Bots.length;i++){
        Bots.push(new Bot(NGen[CGen.length]));
      }
    }
  }

  else{
    CGen.sort(twod);
    PGen = CGen;
    PGenProtect = CGen;
    CGen = [];
    Evolve();
    Populate()
    Gen ++;
    console.log(Gen);
    //TO DD: Add graph of scores
//    line(45,525,45,775);
//    line(45,775,900,775);
    var Temp=0;
    for(i=0;i<PGenProtect.length;i++){Temp+=PGenProtect[i][1]}
    Temp =  Temp/PGenProtect.length;
//    Graph();
  }
}



function twod(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

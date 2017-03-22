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
    CGen = [];
    NGen = Evolve(PGen);
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

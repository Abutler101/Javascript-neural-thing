function Sig(I1,I2){
  var combo = I1+I2;
  var result = 1/(1+exp(combo));
  return result;
}

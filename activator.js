function Sig2(I1,I2){
  var combo = I1+I2;
  var result = 1/(1+exp(combo));
  return result;
}
function Sig3(I1,I2,I3){
  var combo = I1+I2+I3;
  var result = 1/(1+exp(combo));
  return result;
}

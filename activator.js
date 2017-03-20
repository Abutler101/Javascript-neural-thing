function Sig2(I1,I2){
  if(I1 == NaN){I1=0.2};
  if(I2 == NaN){I2=0.2};
  var combo = I1+I2;
  var result = 1/(1+exp(combo));
  return result;
}
function Sig3(I1,I2,I3){
  if(I1 == NaN){I1=0.2};
  if(I2 == NaN){I2=0.2};
  if(I3 == NaN){I3=0.2};
  var combo = I1+I2+I3;
  var result = 1/(1+exp(combo));
  return result;
}

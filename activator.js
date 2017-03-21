function Sig2(I1,I2){
  I1 = +I1.toFixed(7);
  I2 = +I2.toFixed(7);
  var combo = I1+I2;
  var result = 1/(1+exp(combo));
//  if(result<0.5){result=0}
//  else if (result >= 0.5) {result = 1}
  return +result.toFixed(5);
}
function Sig3(I1,I2,I3){
  I1 = +I1.toFixed(7);
  I2 = +I2.toFixed(7);
  I3 = +I3.toFixed(7);
  var combo = I1+I2+I3;
  var result = 1/(1+exp(combo));
//  if(result<0.5){result=0}
//  else if (result >= 0.5) {result = 1}
  return +result.toFixed(5);
}

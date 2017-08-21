function Grid() {
  for(x = 0; x < width;x+=100){
    line(x,0,x,height);
  }
  for(y=0; y<height;y+=100){
    line(0,y,width,y);
  }
}

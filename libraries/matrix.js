//var matrix = new Matrix(3,2)
//console.table(matrix.matrix)
//
function Matrix(rows,cols){
  this.rows=rows;
  this.cols=cols;
  this.matrix= new Array(rows);
  for(var i =0; i<this.rows; i++){
    this.matrix[i] = new Array(cols);
    for(var j=0;j<this.cols;j++){
      this.matrix[i][j] = 0;
    }
  }
}

//Seems to work
Matrix.prototype.randomise = function(){
  for(var i=0; i< this.rows; i++){
    for(var j=0; j<this.cols; j++){
      this.matrix[i][j] = Math.floor(Math.random() * 10)
    }
  }
}

//Seems to work
Matrix.prototype.convToArray = function(){
  var array = [];
  for(var i = 0;i<this.rows;i++){
    for(var j = 0;j<this.cols;j++){
      array.push(this.matrix[i][j]);
    }
  }
  return array;
}

//Not sure if it works
Matrix.prototype.transpose = function(){
  var out = new Matrix(this.cols,this.rows);
  for(var i = 0;i<out.rows;i++){
    for(var j = 0;j<out.cols;j++){
      out.matrix[i][j] = this.matrix[j][i];
    }
  }
  return out;
}

//Seems to work
Matrix.prototype.copy = function(){
  var out = new Matrix(this.rows, this.cols);
  for(var i = 0;i<this.rows;i++){
    for(var j = 0;j<this.cols;j++){
      out.matrix[i][j]= this.matrix[i][j];
    }
  }
  return out;
}

//Seems to work
Matrix.prototype.multiply = function (n) {
  if(n instanceof Matrix){
    for(var i=0; i< this.rows; i++){
      for(var j=0; j<this.cols; j++){
        this.matrix[i][j] *= n.matrix[i][j];
      }
    }
  }
  else{
    for(var i=0; i< this.rows; i++){
      for(var j=0; j<this.cols; j++){
        this.matrix[i][j] *= n;
      }
    }
  }
}

//Seems to work
Matrix.prototype.add = function (n) {
  if(n instanceof Matrix){
    for(var i=0; i< this.rows; i++){
      for(var j=0; j<this.cols; j++){
        this.matrix[i][j] += n.matrix[i][j];
      }
    }
  }
  else{
    for(var i=0; i< this.rows; i++){
      for(var j=0; j<this.cols; j++){
        this.matrix[i][j] += n;
      }
    }
  }
}

//Not sure if it works
Matrix.map = function(m,func){
//  console.log(func);
  var out = new Matrix(m.rows,m.cols);
  for(var i = 0;i<out.rows;i++){
    for(var j = 0;j<out.cols;j++){
      out.matrix[i][j] = func(m.matrix[i][j])
    }
  }
  return out;
}

//Seems to work
Matrix.subtract = function(m1,m2){
  var out = new Matrix(m1.rows,m1.cols);
  for(var i = 0;i<out.rows;i++){
    for(var j = 0;j<out.cols;j++){
      out.matrix[i][j] = m1.matrix[i][j] - m2.matrix[i][j];
    }
  }
  return out;
}

//Seems to work
Matrix.dot = function(m1,m2){
  if(m1.cols != m2.rows){
    console.log("matricies are incompatible")
    return;
  }
  var out = new Matrix(m1.rows,m2.cols);
  for(var i = 0;i<m1.rows;i++){
    for(var j= 0;j<m2.cols;j++){
      var total = 0;
      for(var k =0;k<m1.cols;k++){
        total+= m1.matrix[i][k] * m2.matrix[k][j];
      }
      out.matrix[i][j] = total;
    }
  }
  return out;
}

//Seems to not be working
Matrix.convFromArray = function(array){
  var m = new Matrix(array.length, 1);
  for (var i = 0; i < array.length; i++) {
    m.matrix[i][0] = array[i];
  }
  return m;
}

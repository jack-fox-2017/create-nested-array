function createNestedArray (row,col){

  var t = [];


  for(i=0;i<col;i++){
    t.push([]);
    for(j=0;j<row;j++){
      var alpha = "abcdefghijklmnopqrstuvwxyz";
      var alpha2 = alpha.split('');
      var acak = alpha2[Math.floor(Math.random()*26)];
      t[i].push(acak);
    }
  }
  return t
}

console.log(createNestedArray (5,3))
console.log(createNestedArray (4,2))

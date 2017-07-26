function nestedarray(row,col) {
  var temp = []
  for (var i = 0; i < row; i++) {
    temp.push([])
    for (var j = 0; j < col; j++) {
    var random = Math.floor((Math.random() * 25) + 65);
    temp[i].push(String.fromCharCode(random))
    }
  }
  return temp
}

console.log(nestedarray(4,3));

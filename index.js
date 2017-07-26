function nestedArray(row,col) {
  var strArr = [];
  for (var i = 0; i < 25; i++) {
    //Math.floor(Math.random() * ((y-x)+1) + x);
    var str = String.fromCharCode(Math.floor(Math.random() * ((122-97)+1) + 97))
    strArr.push(str);
  }
  var index = 0;
  var temp = []
  for (let i = 0; i < row; i++) {
    temp.push([])
    for (let j = 0; j < col; j++) {
      temp[i].push(strArr[index])
      if (index < strArr.length) {
      index++;
      }
    }
  }
  return temp;
}


console.log(nestedArray(3,5));
console.log(nestedArray(2,4));
console.log(nestedArray(5,5));

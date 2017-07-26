var huruf = 'abcdefghijklmnopqrstuvwxyz';

function createNestedArr (row, col) {
  var newArr = [];
  for (var i = 0; i < row; i++) {
    newArr.push([]);
    for (var j = 0; j < col; j++) {
      var hurufRandom = huruf.charAt(Math.random()*huruf.length)
      newArr[i].push(hurufRandom);
    }
  }
  return newArr;
}


console.log(createNestedArr(3,5));
console.log(createNestedArr(2,4));

function createNestedArr(jumlahRow, jumlahCol) {
  var text = ""
  var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arr = [];

  for (var i = 0; i < jumlahRow; i++) {
    arr.push([]);
    for (var j = 0; j < jumlahCol;j++) {
      arr[i].push(alp.charAt(Math.floor(Math.random() * alp.length)))
    }
  }
  return arr;
}

console.log(createNestedArr(3,5));

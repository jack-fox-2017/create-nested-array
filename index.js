function createNestedArr(jumlahRow, jumlahCol) {
  var arr = []
  var alphabet = 'abcdefghijklmnopqrstuvwyxz'

  for (var i = 0; i < jumlahRow; i++) {
    let arrRow = []
    for (var j = 0; j < jumlahCol; j++) {
      arrRow.push(alphabet.charAt(Math.floor(Math.random()*26)))
    }
    arr.push(arrRow)
  }
  return arr
}

console.log(createNestedArr(3,5));

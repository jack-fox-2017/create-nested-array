function createNestedArr(jumlahRow, jumlahCol){
  //YOUR CODE here
  var arr =[];
  var huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < jumlahRow; i++){
      arr.push([]);
    for (var j = 0; j< jumlahCol; j++){

      arr[i].push(huruf.charAt(Math.floor(Math.random()*huruf.length)));
    }
  }
    return arr;
}
  // for (var i = 0; i < jumlahRow.length, i++){


console.log(createNestedArr(3,5))

//outputs
//[["a","q","r","s","t"]]

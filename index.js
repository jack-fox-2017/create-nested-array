function createNestedArray(jumlahRow, jumlahCol){

  let board = []
  //console.log(board);
  for(let i=0; i<jumlahRow; i++){
    //board.push([])
    var temp = []
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let j=0; j<jumlahCol; j++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      temp.push(text[j])
    }
    board.push(temp)
  }
  return board;
}

//createNestedArray(3,5)
console.log(createNestedArray(3,5));
console.log("*--------*******----------*");
console.log(createNestedArray(2,4));

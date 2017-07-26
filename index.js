class NestedArr{
  constructor(){
    this.az = 'abcdefghijklmnopqrstuvwxyz'
  }

  getAZ(){
    let char = Math.floor(Math.random()*26)
    return this.az.charAt(char)
  }

  createNestedArr(row, col){
    let printBoard = []
    for(let i = 0; i < row; i++){
      let printRow = []
      for(let j = 0; j < col; j++){
        printRow.push(this.getAZ())
        // console.log(this.getAZ());
      }
      printBoard.push(printRow)
    }
    return printBoard
  }

}

var nestedArr = new NestedArr()
console.log('===== BOARD 3 x 5 =====');
console.log(nestedArr.createNestedArr(3,5));
console.log('===== BOARD 5 x 3 =====');
console.log(nestedArr.createNestedArr(5,3));

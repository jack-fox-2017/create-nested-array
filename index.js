'use strict'

var createNestedArr = (row,col) => {
  let arr = []
  let alph = 'abcdefghijklmnopqrstuvwxyz'

  for (let i=0; i<row; i++) {
    let arrRow = []
    for (let j=0; j<col; j++) {
      arrRow.push(alph.charAt(Math.floor(Math.random()*26)))
    }
    arr.push(arrRow)
  }

  return arr
}

console.log(createNestedArr(3,5));
console.log('===============================');
console.log(createNestedArr(2,4));

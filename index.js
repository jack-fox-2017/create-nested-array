'use strict'

function createNestedArr(jumlahRow, jumlahCol) {
  let board = [];
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y,','z' ];
  for (var i = 0; i < jumlahRow; i++) {
    let baris = [];
    board.push(baris);
    for (var j = 0; j < jumlahCol; j++) {
      let random = Math.floor((Math.random() * 25) + 0);
      baris.push(alphabet[random])
    }
  }
  return board;
}

console.log(createNestedArr(4, 4));
console.log(createNestedArr(6, 5));

"use strict"

function createNestedArr(jumlahRow,jumlahColumn){
  let arr = []

  for (var i = 0; i < jumlahRow; i++) {
    arr.push([])
  }
  //return arr
  for (var i = 0; i < jumlahRow; i++) {
    for (var j = 0; j < jumlahColumn; j++) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

      arr[i].push(getRandomLetter)
    }
  }
  return arr
}

console.log("");
console.log("Nested 3,5");
console.log("");
console.log(createNestedArr(3,5));
console.log("");
console.log("Nested 2,4");
console.log("");
console.log(createNestedArr(2,4));
console.log("");

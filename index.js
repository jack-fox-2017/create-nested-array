
function createNastedArr(jumlahRow, jumlahCol){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let arr = []

  for (let i = 0; i < jumlahRow ; i++) {
      let alphabet1 =[]
        for (let j = 0; j < jumlahCol; j++) {
        alphabet1.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
      }
      arr.push(alphabet1)
  }
  return arr
}

console.log(createNastedArr(3,5));

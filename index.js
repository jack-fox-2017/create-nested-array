function random(alphabet) {
  let text = ""
  for (var i = 0; i < 5; i++) {
    // text+= alphabet.charAt(Math.floor(Math.random()* alphabet.length))
    text+= String.fromCharCode(Math.floor(Math.random() * ((122 - 97)+1)+97))
  }
  return text.split("")
}
console.log(random("abcdefghijklmnopqrstuvwxyz"));

function arr(jumlahRow, jumlahCol) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let nestedArr = [];
  for (let i = 0; i < jumlahRow; i++) {
    nestedArr.push([])
    for(let j = 0; j < jumlahCol; j++){
      nestedArr[i].push(String.fromCharCode(Math.floor(Math.random() * ((122 - 97)+1)+97)))
      // nestedArr[i].push(alphabet.charAt(Math.floor(Math.random()* alphabet.length)))

  }
}

return nestedArr


}
console.log(arr(3,5));
console.log(arr(2,4));

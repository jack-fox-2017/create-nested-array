function createNestedArr(jumlahRow, jumlahCol){
  let arr = [];
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  for(let i=0;i<jumlahRow;i++){
    arr.push([]);
    for(let j=0;j<jumlahCol;j++){
      arr[i].push(alphabet[Math.floor(Math.random()*alphabet.length)]);
    }
  }return arr;
}

console.log(createNestedArr(2,4));
console.log(createNestedArr(3,5));

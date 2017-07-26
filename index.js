function createNestedArr(row, col){
  //my code here
  let alphabet = 'a b c d e f g h i j k l m n o p q r s t v w x y z'.split(' ');
  let rowArr = [];
  for(let i=0; i<row; i++){
    let colArr = [];
    for(let j=0; j<col; j++){
      colArr.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    rowArr.push(colArr);
  }
  return rowArr;
}

console.log(createNestedArr(5,3));

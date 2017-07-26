var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function createNestedArr(row, col) {
  var result = [];
  let i =0;
  for(z=0; z<col; z++) {
    // console.log(i);
    var temp = [];
    if (z>0) {
      var limit = i+row;
      // console.log(lol);
      while (i<limit) {
            temp.push(input[i]);
            i++;
          }
    } else {
      while (i<row) { 
            temp.push(input[i]);
            i++;
          }
    }
    result.push(temp);
  }
  return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));

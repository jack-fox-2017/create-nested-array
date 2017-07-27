function array(row, col)
{
  var str = "abcdefghijklmnopqrstuvwxyz";
  console.log(str);

  var temp = []
  var count = 0

  for(var i=0; i<row; i++){
    temp.push([])
    for(var j=0; j<col; j++)
    {
      temp[i].push(str.charAt(Math.floor(Math.random()*str.length)))
    }
  }
  return temp;
}

console.log(array(3,5));

//membuat fungsi yang menerima 2 input angka (jumlahRow,jumlahCol)
// untuk membentuk arry 2 dimensi dengan ukuran sesuai dengan jumlahRow dan
// jumlahCol yang di input, dan isinya merupakan random alphabet.

function createNestedArr(jmlRow,jmlCol){
  var ar = [] ;
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  for (var i=0 ; i<jmlRow ; i++){
    ar.push([])
    for (var j=0 ; j<jmlCol ; j++){

      ar[i].push(alphabet.charAt(Math.floor(Math.random()*alphabet.length)))
    }
  }
  return ar ;
}
console.log(createNestedArr(7,5));

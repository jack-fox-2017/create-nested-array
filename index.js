function createNestedArr(jumlahRow, jumlahCol){

  let tmp = [];
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m', 'n', 'o', 'p', 'q' ,'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (var i = 0; i < jumlahRow; i++) {
    let tmpBaris = [];

      for(let j=0; j<jumlahCol; j++){
        tmpBaris.push(alphabet[Math.floor(Math.random()*26)]) // mengabil array colom berdasrakan alhpahbet random
      }
      tmp.push(tmpBaris) // menampung tmpBaris berdasarkan sebanyak jumlah row
  }

  return tmp;
  //

}

console.log(createNestedArr(3, 5));

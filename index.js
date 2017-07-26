function createNestedArr(jumlahRow, jumlahCol) {

  let arr =[];

  let string=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   for (let i =0; i < 3; i++)
   {
     let kelompok =[];
     for (let j =0; j < 5; j++)
        {
          if (kelompok.length<6)
          {
            let rand = Math.floor(Math.random()*26);
            kelompok.push(string[rand]);
          }
        }
    arr.push(kelompok);
   }
return arr;
// return kelompok;
  //createNestedArr(5,3)
}

console.log(createNestedArr(3,1))

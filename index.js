let createNestedArr = (jumlahRow, jumlahCol) => {
	let huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	let result = []
	for (let i = 0; i < jumlahRow; i++) {
		let arr = []
		for (let j = 0; j < jumlahCol; j++) {
			let toPush = huruf.splice(Math.floor(Math.random() * huruf.length), 1)
			arr.push(toPush[0])
		}
		result.push(arr)
	}

	return result
}

console.log(createNestedArr(3,5));
console.log(createNestedArr(2,4));
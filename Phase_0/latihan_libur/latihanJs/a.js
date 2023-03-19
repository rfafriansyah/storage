function findEvenIndex(arr) {
  //Code goes here!
  let output
  let result = 0
  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
      if(arr[j+1] != undefined) output = arr[i] - arr[j+1]
      // output = arr[i] - arr[j+1]
    }
    console.log(output)
    if(output < 0){
      break;
    } else {
      if(i == arr.length - 1){
        result = arr[i]
      }
      // retuslt = arr[i]
    }
    // console.log(result)
  }
  // return result
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3 => index ke 3 karena jumlah angka index 0, 1, 2 sama dengan jumlah angka index 4, 5, 6;
console.log(findEvenIndex([1,100,50,-51,1,1])) // 1 => index ke 1 karena jumlah angka index 0 sama dengan jumlah angka index 2, 3, 4, 5;
console.log(findEvenIndex([1,2,3,4,5,6])) // -1 => bila hasil tidak memenuhi syarat;
console.log(findEvenIndex([20,10,30,10,10,15,35])) // 3 => index ke 3 karena jumlah angka index 0, 1, 2 sama dengan jumlah angka index 4, 5, 6;
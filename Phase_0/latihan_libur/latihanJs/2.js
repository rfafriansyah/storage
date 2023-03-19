function descendingOrder(n){
  //...
  let number = n.toString()
  let arr = []
  for(let i = 0; i < number.length; i++){
    arr.push(number[i])
  }
  let counter = false
  let temp
  for(let i = 0; i < arr.length; i++){
    counter = false
    for(let j = 0; j < arr.length; j++){
      if(arr[j] < arr[j+1]){
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  number = ''
  for(let i = 0; i < arr.length; i++){
    number += arr[i]
  }
  
  return Number(number)
}

// Input: 42145 Output: 54421
descendingOrder(0)
// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

function descendingOrder(n) {
  return +n.toString().split('').sort().reverse().join('');
}

function descendingOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){
    return b - a;
  }).join(''));
}
function findOutlier(integers){
  //your code here
  let arr1 = []
  let arr = []
  let odd = 0
  let even = 0
  for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0){
      even++
      arr.push(integers[i])
    } else {
      odd++
      arr1.push(integers[i])
    }
  }
  //console.log(odd, even)
  if(odd == 1){
    return arr1[0]
  } else if(even == 1){
    return arr[0]
  }
  // return output
}

console.log(findOutlier([0, 1, 2])) // 1 => karena 1 = ganjil dari kumpulan genap
console.log(findOutlier([1, 2, 3])) // 2 => karena 2 = genap dari kumpulan ganjil
console.log(findOutlier([2,6,8,10,3])) // 3
console.log(findOutlier([0,0,3,0,0])) // 3
console.log(findOutlier([1,1,0,1,1])) // 0
console.log(findOutlier([-140572494,-90758112,123728630,-33939762,-173104886,60347366,-64169274,-135426262,-194284908,-116131800,178026380,-79677282,-180635564,-190359894,168922042,-174653002,76673678,69778112,60672454,-83908525,27128486,-134766526,5845734,-894172,-138916454])) // -83908525
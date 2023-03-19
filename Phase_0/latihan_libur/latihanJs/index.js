// function validBraces(braces){
//   //TODO 
//   let arr = []

//   for(let i = 0; i < braces.length; i++){
//     if(braces[i] ==='[' || braces[i] ==='(' || braces[i] ==='{'){
//       arr.push(braces[i])
//     } else {
//       if(arr.length === 0) return false
//       let last = arr[arr.length - 1]
//       //console.log(arr, last, braces[i])
//       if(braces[i] == ']' && last == '[' || braces[i] == ')' && last == '(' || braces[i] == '}' && last == '{'){
//         arr.pop()
//       } else {
//         break
//       }
//     }
//   }
//   return arr.length === 0 
// }

// console.log(validBraces("(){}[]"))   // =>  True
// console.log(validBraces("([{}])()"))   // =>  True
// console.log(validBraces("(}"))      // =>  False
// console.log(validBraces("[(])"))     // =>  False
// console.log(validBraces("[({})](]")) // =>  False
const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
  console.log(points[i],points[j],k,j,i)
  console.log(points)
}
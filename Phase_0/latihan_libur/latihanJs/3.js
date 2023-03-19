// function getMiddle(s)
// {
//   //Code goes here!
//   input =  [(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)]
//   let str = input.toString()
//   split(str, ',')
//   console.log(str)
// }
// getMiddle()
// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

var minRemoveToMakeValid = function(s) {
  let chars = s.split("")
  let open = []  
  let close = []
  for(let i = 0; i < chars.length; i++){
    if(chars[i] == "("){
      open.push(i)
    }
    if(chars[i] == ")"){
      close.push(i)
      if(close.length > open.length){
        chars[i] = null
        close.pop()
      }
    }
  }
  while(open.length > close.length){
    const curr = open.pop()
    chars[curr] = null
  }
  return chars.filter(ch => ch !== null).join("")
};

console.log(minRemoveToMakeValid([(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)]))
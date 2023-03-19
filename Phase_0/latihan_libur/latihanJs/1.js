function accum(s) {
	// your code
  let output = ''
  for(let i = 0; i < s.length; i++){
    if(i == s.length - 1){
      if(i!=0) output += s[i].toUpperCase()
      for(let j = 0; j < i; j++){
        output += s[i].toLowerCase()
      }
      if(i==0) output += s[i].toUpperCase()
    } else {  
      if(i!=0) output += s[i].toUpperCase();
      for(let j = 0; j < i; j++){
        output += s[i].toLowerCase()
        if(j == i-1) output += '-'
      }
      if(i==0) output += s[i].toUpperCase() + '-';
    }
  }
  return output
}

accum("abcd") //-> "A-Bb-Ccc-Dddd"
accum("RqaEzty") //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") //-> "C-Ww-Aaa-Tttt"
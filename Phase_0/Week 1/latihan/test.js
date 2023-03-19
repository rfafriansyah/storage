//buatlah program untuk mengubah huruf sesuai urutan abjad dimana urutan a - z adalah 1 - 26 menjadi simbol dengan urutan 1- 9 sebagai berikut
let symbol = '!@#$%^&*()'
// dimana ! = 1, @ = 2, # = 3, dst
//untuk spasi akan digantikan dengan uderscore '_'
let huruf = 'abcdefghijklmnopqrstuvwxyz'
//contoh
//let input = 'hai bro';
// output = '*!(_@*%';
// dimana 
// h = abjad ke 8 di modulus 10 = 8 => symbol urutan ke 8 = '*'
// a = abjad ke 1 di modulus 10 = 1 => symbol urutan ke 1 = '!'
// i = abjad ke 9 di modulus 10 = 9 => symbol urutan ke 9 = '('
// spasi = langsung digantikan dengan = '_'
// b = abjad ke 2 di modulus 10 = 2 => symbol urutan ke 2 = '@'
// r = abjad ke 18 di modulus 10 = 8 => symbol urutan ke 8 = '*'
// o = abjad ke 15 di modulus 10 = 5 => symbol urutan ke 5 = '%'

// diasumsikan semua input lower case
// dan apabila hasil modulus = 0, maka symbol yang digunakan adalah yang berada di urutan 10

//contoh 2
let input = 'i love javascript'
// output = '(_@%@%_)!@!(#*(^)'
var output = ''
for(let i = 0; i < input.length; i++){
  
  if(input[i] === ' '){
    output += '_'
  }
  
  for(let j = 0; j < huruf.length; j++){
    
    if(input[i] === huruf[j]){
        
      for(let x = 0; x < symbol.length; x++){
        //var output = ''
        if(j % 10 === x){

          output += symbol[x]

        }
        
      }
      
    } 
    
  }
  
}
console.log(output)
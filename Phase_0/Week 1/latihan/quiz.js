// var input = 'the beatles'
// var output = ''

// for(var i =0; i < input.length; i++){
//   //console.log(i)
//   if(i == 0){
//     output += input[i].toUpperCase()
//   } else if(input[i] === ' '){
//     output += ' '
//     output += input[i+1].toUpperCase()
//     i++
//   } else{
//     output += input[i]
//   }

// }

// console.log(output)


// var kolom = 10
// var baris = 5

// for(var i =0; i < baris; i++){
//   var output = ''
//   for(var j = 0; j < kolom; j++){
//     output += j
//   }
//   console.log(output)
// }

/*
 * STUDY CASE 3
 * Tampilkan nama website di dalam variabel url
 * Contoh 1:
 *  input: www.facebook.com
 *  output: facebook
 *
 * Contoh 2:
 *  input: www.google.co.id
 *  output: google
 * 
 *  Contoh 3:
 *  input: www.9gag.com   www.9gag.c
 *  output: 9gag
 *
 */

// 1. setelah www ada . pertama
// 2. Value yang mau diambil ada di antara titik pertama dan kedua
// 3. kita ambil value setelah titik yang pertama dan sebelum titik ke dua



 

// for(var i = 0; i < input.length; i++){

//    if(input[i] === 'w'){

//    } else if(input[i] === '.'){
//      if(input[i -1]=== 'w'){

//      }else{
//        break;
//     }
//    } else{
//     output += input[i]
//   }


// }

 // console.log(output);
 var input = "www.facebook.com"
 var output = ""
 for (var i = 0; i < input.length; i++) {
   if (input[i  -1] === ".") {
     for (var j = i; j < input.length; j++) {
       output += input[j];
       if (input[j + 1] === ".") {
         break;
       }
     }
     break;
   }
 }
 console.log(output);

// var input = "www.facebook.com"
// var output = ""

//     let flag = false
//     for (let i = 0; i < input.length; i++) {
//         const element = input[i];
//         if (flag === true) {
//             output += element
//         }
//         if (element === ".") {
//             flag = true
//         }

//     }
// console.log(output);

// var input = "www.google.co.id"
// var output = ""
// var jumlahTitikDitemukan = 0

// for (var i = 0; i < input.length; i++) {
//   if (input[i] === ".") {
//     jumlahTitikDitemukan++
//     continue;
//   }

//   if (jumlahTitikDitemukan === 1 ) {
//     output += input[i]
//   }

//   if (jumlahTitikDitemukan > 1) {
//     break;
//   }
// }

// console.log(output);
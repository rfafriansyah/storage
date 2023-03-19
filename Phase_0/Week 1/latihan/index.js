// Pembelajaran di hacktiv dilaksanakan selama 5 hari dari senin hingga jumat, setiap harinya diadakan lecture dari jam 9 sampai 11 dan jam 1 hingga 3. 
// Buatlah sebuah program untuk menentukan pada hari tersebut apakah ada lecture atau tidak dan pada waktu yang diinputkan oleh user apakah ada lecture atau tidak?

//contoh input
// var hari = 'senin'
// var jam = 4

// output:
// "di hari senin jam 4 tidak ada lecture"

//contoh input2
// var hari = 'selasa'
// var jam = 9

// output
// "di hari selasa jam 9 ada lecture"

// var hari = 'selasa'
// var jam = 4

// if((hari !== 'sabtu' && hari!=='minggu') && ((jam >= 9 && jam <= 11) || (jam >= 1 && jam <=3))){
//   console.log('di hari ' + hari +' '+ jam + ' ada lecture')
// } else{
//   console.log('di hari ' + hari +' '+ jam + ' tidak ada lecture')
// }


// hello
//         01234
var str = 'hello'; //=> length (jumlah element/ jumlah karakter dalam sebuah string)
// console.log(str);
// h-e-l-l-o
// i = 2
var newStr = ''; //
for (var i = 0; i < str.length; i++) {
    // if (i === str.length - 1) {
    //     newStr += str[i];
    // } else {
    //     newStr += str[i] + '-';
    // }
    newStr += str[i];
    if (i !== str.length - 1) {
        newStr += '-';
    }
}
console.log(newStr);
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
 *  input: www.9gag.com  www.9gag.c
 *  output: 9gag
 *
 */

// 1. setelah www ada . pertama
// 2. Value yang mau diambil ada di antara titik pertama dan kedua
// 3. kita ambil value setelah titik yang pertama dan sebelum titik ke dua


//           0123456789012345
var input = "www.facebook.com"
var output = "" // 
// i = 12

// CARA 3
// var titik1 = 0;
// var titik2 = 0;
// for (var i = 0; i < input.length; i++) {
//     if (input[i] === '.') {
//         if (titik1 === 0) {
//             titik1 = i + 1;
//         } else {
//             titik2 = i - 1;
//             break;
//         }
//     }
// }
// for (var i = titik1; i <= titik2; i++) {
//     output += input[i];
// }


// CARA 2
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === '.') {
//         for (let j = i + 1; j < input.length; j++) {
//             if (input[j] !== '.') {
//                 output += input[j];
//             } else {
//                 break;
//             }
//         }
//         break;
//     }
// }


// CARA 1
// let findTitik = false;
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === '.') {
//         findTitik = true;
//     }
//     if (findTitik === true) {
//         if (input[i + 1] === '.') {
//             break;
//         } else {
//             output += input[i + 1];
//         }
//     }
// }


console.log(output);
var kata = 'Javascript is so cool';

/**
 * output: 
 * Javascipt
 * is
 * so
 * cool
 */

//mindmap nya : pisahkan kata berdasarkan spasi

var temp = ''; //Javascriptis
for (var i = 0; i <= kata.length; i++) {
    // if (kata[i] !== ' ' ) {
    //     temp += kata[i];
    // } else {
    //     console.log(temp);
    //     temp = '';
    // }
    // if (i === kata.length - 1) {
    //     console.log(temp);
    // }
    if (kata[i] !== ' ' && kata[i] !== undefined) {
        temp += kata[i];
    } else {
        console.log(temp);
        temp = '';
    }
}
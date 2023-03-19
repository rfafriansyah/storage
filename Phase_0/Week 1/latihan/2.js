/*
=============================
Menerjemahkan angka ke simbol
=============================
Kamu diberikan input yang berisikan angka-angka, tugasmu adalah menerjemahkan angka-angka tersebut ke barisan simbol.
Jumlah baris yang muncul sesuai dengan panjang input dan jumlah simbol yang ditampilkan di tiap baris sesuai dengan angka-angka di dalam input. Simbol yang ditampilkan di baris ganjil adalah '$' dan simbol yang ditampilkan di baris genap adalah '|'.
Contoh 1
--------
let input = '123'
output:
$
||
$$$
penjelasan:
$   -> $ ditampilkan 1 kali
||  -> | ditampilkan 2 kali
$$$ -> $ ditampilkan 3 kali 
Contoh 2
--------
let input = '4212'
output:
$$$$
||
$
||
penjelasan:
$$$$    -> $ ditampilkan 4 kali
||      -> | ditampilkan 2 kali
$       -> $ ditampilkan 1 kali
||      -> | ditampilkan 2 kali
Rule:
- Hanya gunakan built in function yang diperbolehkan (cek readme).
*/

// var input = '431'

// for(var i = 0; i < input.length; i++) {
//     var row = ""
//     for(var j = 0; j < Number(input[i]); j++) {
//         if(i % 2 == 0) {
//             row += "$"
//         } else {
//             row += "|"
//         }
//     }
//     console.log(row);
// }


//     *                i = 0 * = 1 ' ' = 8
//    * *               i = 0 * = 1 ' ' = 8
//   * * *              i = 0 * = 1 ' ' = 8
//  * * * *             i = 0 * = 1 ' ' = 8
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
var row = 9;

for(let i = 0; i < row; i++) {
    let temp = '';
    for(let j = 0; j < i; j++) {
        temp += ' ';
    }
    for (let j = 0; j < row - i; j++) {
        temp += '*';
    }
    console.log(temp);   
}
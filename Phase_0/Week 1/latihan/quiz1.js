"use strict";
/**
 * Buatlah program untuk menghitung keliling atau luas lingkaran.
 * Program harus dibuat dengan menerapkan fitur" pada ES6.
 *
 * Menghitung keliling atau luas ditentukan dari variable code
 * jika pada variable code terdapat huruf L maka menghitung luas
 * jika terdapat huruf K maka menghitung keliling
 * (tidak mungkin ada huruf L dan K berbarengan dalam variable code)
 *
 * Jika berhasil menghitung keliling, tampilkan
 * 'Keliling lingkaran dengan jari-jari 2 adalah 12.56'
 *
 * Jika berhasil menghitung luas, tampilkan
 * 'Luas lingkaran dengan r 2 adalah 12.56'
 *
 * Jika tidak ditemukan huruf L atau K pada code, tampilkan
 * 'Error :('
 */

const PI = 3.14;
let r = 2;
let code = "097628";
let keliling
let luasLingkaran
// luasLingkaran = r * PI *r
// keliling = 2 * PI * r
let value;

for(i = 0; i < code.length; i++){
  if(code[i] == 'K'){
    var keliling = 2 * 3.14 * r;
    hasil = Keliling lingkaran dengan jari-jari ${r} adalah ${keliling} 
    break;
  } else if(code[i] == 'L'){
    var luas = 3.14 * r * r;
    hasil = Luas lingkaran dengan jari-jari ${r} adalah ${luas}
    break;
  } else {
    hasil = 'Error :('
  }
}
console.log(hasil)
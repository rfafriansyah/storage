/**
 * =================
 * WORDS GAME SOLVER
 * =================
 * Contoh 1:
 * word1 = "BULAN"
 * letters = "AEYEKBUMIBULANXHY"
 *            ^^^^^^^^^|
 * index ==>  0123456789....dst
 *
 * Output:
 * Kata BULAN ditemukan pada index ke 9.
 *
 *
 * Contoh 2:
 * word1 = "JUPITER"
 * letters = "AEYEK7BUMIBULANXHY"
 *
 * Output:
 * Kata JUPITER tidak ditemukan.

 */

var letters = "AEYEKBUMIBULANXHY";
var word1 = "BULAN";
let index = 0
let foundIdx = 0

var isFound = false
for(var i = 0; i < letters.length; i++) {        
    if(letters[i] == word1[index]) {
        isFound = true
        if(index == 0 && isFound) {
            foundIdx = i
        }
        index++
        if(index == word1.length) {
            break
        }
    } else {
        isFound = false
        index = 0
    }
        
}
if(isFound) {
    console.log("ditemukan", foundIdx);
} else {
    console.log("tidak ditemukan");
}
 

// var letters = "AEYEKTBUMIBULAXHY";
// var word1 = "BULAN";
// var countFound = 0;
// var indexGet = 0;
// for(var i = 0; i < word1.length; i++) {
//   for(var j = 0; j < letters.length; j++) {
//     if(word1[i] == letters[j]) {
//       if(countFound < word1.length) {
//         countFound++;
//       }
//         indexGet = (j + 1) - countFound;
//         break;
//     }
//   }
//  }
// if(countFound == word1.length) {
//    console.log("Kata " + word1 + " ditemukan pada index ke " + indexGet);
// } else {
//    console.log("Kata " + word1 + " tidak ditemukan");
// }

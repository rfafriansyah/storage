/**
 Hapus Karakter Terlarang (Implementasi nested loop)
-------------------------
Diberikan sebuah kata. 
Tugas Anda adalah memfilter agar kata tidak mengandung karakter terlarang, yaitu karakter s,r,a,9,8.
contoh:
input: 'hayo andi'
output: 'hyo ndi'
input: '17 agustus 1945'
output: '17 gutu 145'
RULES:
- DILARANG MENGGUNAKAN built in function apapun.
*/
var input = '17 agustus 1945'
var hurufTerlarang = 'sra98'
var output = ''

for(var i = 0; i < input.length; i++) {
    var isExists = false
    for(var j = 0; j < hurufTerlarang.length; j++) {
        if(input[i] == hurufTerlarang[j]) {
            isExists = true
            break
        }
    }
    if(!isExists) output += input[i]
}

console.log(output);
let NIK = "1212144709840002";
// Kode provinsi 12
// Kode kota/kab 12
// Kode kecamtan  14
// tanggal lahir 47 > 31 perempuan 47 - 40 => 7
// bulan lahir 09
// tahun lahir 1984
// kode wilayah 0002

// validasi , jika NIK < 16  atau > 16 maka output NIK harus 16
// jika NIK mengandung bukan angka maka output NIK harus berupa angka
// jika NIK kosong atau undefined maka output NIK harus diisi

if (!NIK) {
  console.log("NIK harus diisi");
} else if (NIK.length < 16 || NIK.length > 16) {
  console.log("NIK harus 16");
} else if (!Number(NIK)) {
  console.log("NIK harus berupa angka");
} else {
  let kodeProvinsi = 0;
  let kodeKota = 0;
  let kodeKecamatan = 0;
  let tanggalLahir = 0;
  let bulanLahir = 0;
  let tahunLahir = 0;
  let kodeWilayah = 0;
  kodeProvinsi = NIK[0] + NIK[1];
  kodeKota = NIK[2] + NIK[3];
  kodeKecamatan = NIK[4] + NIK[5];
  if (NIK[6] + NIK[7] > 31) {
    tanggalLahir = Math.abs(40 - Number(NIK[6] + NIK[7]));
  } else {
    tanggalLahir = NIK[6] + NIK[7];
  }
  bulanLahir = NIK[8] + NIK[9];
  tahunLahir = "19" + NIK[10] + NIK[11];
  kodeWilayah = NIK[12] + NIK[13] + NIK[14] + NIK[15];
  console.log("Kode provinsi " + kodeProvinsi);
  console.log("Kode kota " + kodeKota);
  console.log("Kode kecamatan " + kodeKecamatan);
  console.log("Tanggal lahir " + tanggalLahir);
  console.log("Bulan lahir " + bulanLahir);
  console.log("Tahun lahir " + tahunLahir);
  console.log("Kode wilayah " + kodeWilayah);
}


//TRACING 6
const arr = ['jennie', 'ivan', 'lisa', 'jisoo', 'rose']
const filter = ['jennie', 'lisa']

for(let i = 0; i < arr.length; i++) {
  let flag = false
  for(let j = 0; j < filter.length; j++) {
    if(arr[i] === filter[j]) {
      flag = true
      break
    }
  }

  if(flag) {
    console.log(arr[i])
  } else {
    console.log('#')
  }
}


//CODE FUNCTION 1
const str = 'lisa'
let output = ''

function checkUdahAda(str) {
  const filter = 'ia'
  let flag = false
  for(let i = 0; i < filter.length; i++) {
    if(str === filter[i]) {
      flag = true
    }
  }

  return flag
}

for(let i = 0; i < str.length; i++) {
  const hasilCheck = checkUdahAda(str[i])

  if(hasilCheck) {
    output += '$'
  } else {
    output += str[i]
  }
}

console.log(output)

//TRACING 5
const nama = 'winter'
const filter = 'jennie'
const symbol = '%'

let output = ''

for(let i = 0; i < nama.length; i++) {
  let temp = ''
  for(let j = 0; j < filter.length; j++) {
    if(nama[i] !== filter[j]) {
      temp += nama[i]
    }
  }

  console.log(temp)

  if(temp.length !== filter.length) {
    output += temp
  }
}

console.log(output)


//TRACING 4
const nama = 'lisa'
const filter = 'ls'
const symbol = '%'

let output = ''

for(let i = 0; i < nama.length; i++) {
  let flag = false
  for(let j = 0; j < filter.length; j++) {
    if(nama[i] === filter[j]) {
      flag = true
      break
    }
  }

  if(flag) {
    output += symbol
  } else {
    if(nama[i] === 'a') {
      output += 'abc'
    }
  }
}

console.log(output)


//TRACING 1
const nama = 'jennie'
let output = ''

for(let i = 0; i < nama.length; i++) {
  if(i % 2 === 0) {
    output += nama[i]
  } else {
    output += '!@'
  }
}

console.log(output)


//TRACING 2
const nama = 'jennie'
let output = ''

for(let i = 0; i < nama.length; i++) {
  if(nama !== 'e') {
    output += str[i] + '#'
  }
}

console.log(output)
 

//TRACING 3
const nama = 'l1s4'

for(let i = 0; i < nama.length; i++) {
  let output = ''

  if(isNaN(nama[i])) {
    output += nama[i] + ' isNaN'
  } else {
    output += nama[i] + ' not isNaN'
  }

  console.log(output)
}
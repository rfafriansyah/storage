/**
 * Buatlah sebuah program untuk membuat kode karyawan Hacktiv8 berdasarkan nama, peran, dan tahun lahir.
 * 
 * Format kode karyawan adalah sebagai berikut:
 * H8-<kode peran><kategori tahun lahir>-<huruf depan nama><huruf belakang nama>
 * 
 * Kode peran didapat sesuai berikut:
 *  Frontend => FE
 *  Backend => BE
 *  Full Stack => FS
 *  Mobile => MO
 * Jika role tidak sesuai maka mendapatkan kode peran NE
 * 
 * Jika karyawan lahir pada tahun genap maka kategori tahun lahir adalah 0, jika ganjil maka 1.
 * Nama wajib diisi dan harus berjumlah minimal 3 huruf.
 */

 var name = 'JOHN DOE';
 var role = 'Frontend';
 var yob = 1999;
 // output: H8-FE1-JE

if()


 
 var name = 'ALICE';
 var role = 'Backend';
 var yob = 1990;
 // output: H8-BE0-AE
 
 var name = 'BOB';
 var role = 'Accounting';
 var yob = 1995;
 // output: H8-NE1-BB
 
 var name = '';
 var role = 'Full Stack';
 var yob = 1992;
 // output: Please input name
 
 var name = 'BO';
 var role = 'Mobile';
 var yob = 1991;
 // output: Name must be at least 3 characters


 var role2 = "";
 var yob2 = yob % 2;
 
 if (role === "Frontend") {
   role2 = "FE";
 } else if (role === "Backend") {
   role2 = "BE";
 } else if (role === "Full Stack") {
   role2 = "FS";
 } else if (role === "Mobile") {
   role2 = "MO";
 } else {
   role2 = "NE";
 }
 if (!name) {
   console.log("Please input name");
 } else if (name.length < 3) {
   console.log("Name must be at least 3 characters");
 } else {
   console.log("H8-" + role2 + yob2 + "-" + name[0] + name[name.length - 1]);
 }


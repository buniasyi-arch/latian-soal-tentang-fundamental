// Soal 2 - Operator Aritmatika
// Data sudah diubah biar beda dari soal asli

// Data belanja
let hargaBarang = 45000;
let jumlahBarang = 6;
let persenDiskon = 20; // 20%

// Menghitung total sebelum diskon
let totalSebelumDiskon = hargaBarang * jumlahBarang;

// Menghitung besaran diskon
let besaranDiskon = totalSebelumDiskon * persenDiskon / 100;

// Menghitung total setelah diskon
let totalSetelahDiskon = totalSebelumDiskon - besaranDiskon;

// Menampilkan hasil
console.log("Total Harga Sebelum Diskon: Rp" + totalSebelumDiskon);
console.log("Besaran Diskon (20%): Rp" + besaranDiskon);
console.log("Total Pembayaran Setelah Diskon: Rp" + totalSetelahDiskon);
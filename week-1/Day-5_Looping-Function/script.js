// // Looping
// // Perulangan
// // perulangan yang dilakukan ketika statement memenuhi syarat
// // suatu proses dimana proses nya akan di ulang sebanyak / selama statement memenuhi syarat

// // for

// for (let index = 0; index < 10; index = index + 1) {
//   console.log('audy');
//   console.log('simon');
// }

// // while
// let idx = 1;
// while (idx > 10) {
//   console.log('yuli');
//   console.log('mutiara');

//   idx = idx + 3;
//   idx++;
// }

// // do while
// do {
//   console.log('audy ashjdklaskdljklasjdl');

//   idx++;
// } while (idx > 10);

// function
// harus di panggil oleh suatu event
// bisa menerima beberapa params / parameter
// paramater adalah suatu variable yang di gunakan untuk menangkap value yang dikirim ketika memanggil function
// parameter itu sangat terikat oleh urutan

// function <nama_function> () {}

const hariIni = "Jum'at";

function sayHello(myName, myAge, isMarried) {
  console.log(hariIni);
  console.log('hallo ' + myName + ' umur saya ' + myAge + ' dan saya sudah ' + isMarried);

  return 20;
}

function summary(angka1, angka2, angka3) {
  const result = 'audy';
  console.log(result);
}

const hasilDariFunctionSummary = summary(5, 8, 9);

console.log(sayHello('audy', 20, 'sudah menikah'), 'say hello');
console.log(hasilDariFunctionSummary, 'summary');

// summary(5, 6, 7);

// sayHello('yohanes', 20, '');
// sayHello('Rafi', 17, 'belum menikah');
// sayHello('Kia', 15, 'belum menikah');
// sayHello('Nur', 20, 'belum menikah');
// sayHello('Rahmat', 30, 'belum menikah');

// ada function menggunakan return

// tanpa return

// const <nama_function> = function () {}

// const penjumlahan = function (angka1, angka2) {
//   console.log(angka1 + angka2);
// };

const penjumlahan = function (a, b) {
  return a + b;
};

let rubahNilaiA = function (value) {
  return value;
};

let a = rubahNilaiA('hallo guys');
console.log(a);

const resultPenjumlahan = penjumlahan(5, 6);

console.log(noReturn());

console.log(penjumlahan());

// penjumlahan(5, 6);

// const <nama_function> = () => {}

// event

console.log('Day 3');

// variables

// var
// ini sudah tidak pakai, karna datanya bisa diubah ubah
// ini bisa di deklarasi lagi dengan value yang berbeda
// versi jadul, bisa di deklarasi lebih dari sekali dengan nama yang sama

// let
// lebih di sarankan dari pada var, karna nanti terdapat undefined
// rekomendasi orang
// satu variable satu nama,

// const
// variable yang nilai nya gak bisa dirubah, harus tetap constant
// nilai nya pasti , dan tidak bisa diubah
// imuttable / tidak bisa diubah

const nama = 'audy';


console.log(nama);
console.log(nama);
console.log(nama);
console.log(nama);
console.log(nama);
console.log(nama);

// type data

// number
    // - float
        const rataRataPendudukIndonesia = parseInt(200.5)
        
    // - integer
        const age = 18

// string
    const name = "audy wisuda pratama"
    const myName = 'Simon'
    const hari = "Jum'at"
    const description = '"Hari ini cerah"'
    const myMoney = "Rp 200.000"
    
// boolean
    const isMarried = true
    const isOld = false

// object
// selalu pasangan key dan value
// key adalah mirip kayak variable , tapi milik nya object, gak perlu keyword var, let / const
    const audy = {
        height: "169 cm",
        weight : "168 lbs",
        tintColor : "sawo matang",
        age : 20,
        pengalamanKerja : ["Teravin", "Warung pintar", "Binar", "Omind"],
        isUsingGlasses : false
    }

// array
 const myHobbies = ["tidur", "makan", "scrolling tiktok", "repeat", false, 80, { name : "Suhendani", age: 18 }]

// NaN
const hasil = "a" + 20


// null
// let audy = null // --> 0

// undefined
// let akdeas = undefined // --> 4byte

// operator
// number
const lakiLaki = 18
const wanita = 7
//  + (penjumlahan)
const jumlahStudent = lakiLaki + wanita

// - (pengurangan)
const penguranganStudent = lakiLaki + wanita - 2

// * perkalian
const perkalianStudent = lakiLaki * wanita

// / pembagian
const pembagianStudent = (lakiLaki + wanita) / 2 

// ** pangkat
const pemangkatanStudent = lakiLaki ** 2

// % modulus
const hasilBagiStudent = wanita % 3


// String
const firstName = "audy"
const nickName = "audy"
const secondName = "wisuda"
const lastName = "pratama"

const fullName = firstName + " " + secondName + " " + lastName // audy wisuda pratama
console.log(fullName)

const testMyName = firstName + secondName
console.log(testMyName)

const gabunginNama = "20" + 20
console.log(gabunginNama)

const angka1 = 10
const angka2 = angka1 + 10

let angka3 = 10
angka3 = angka3 + 60 // sama dengan
angka3 += 60

let angka4 = 100
angka4 = angka4 - 50
angka4 -= 50

let angka5 = 5
angka5 = angka5 * 6
angka5 *= 6
console.log(angka5)

// Comparison

// > lebih dari
const isGreaterThan = 5 > 8 

// < kurang dari
const isLessThan = 9 < 20

// >= lebih dari atau sama dengan
const isGreaterThanOrEqual1 = 10 > 10 // false
const isGreaterThanOrEqual2 = 10 >= 10 // true

// <= kurang dari atau sama dengan
const isLessThanOrEqual1 = 20 < 20 // false
const isLessThanOrEqual2 = 20 <= 20 // true

// equal to
// ==
const isEqualTo = "15" == 15 // true

// equal to
// ===
const isEqualTo1 = "15" === 15 // false
const isEqualTo2 = 20 === 20 // true
const isEqualTo3 = "audy" === "iqbal" // false
const isEqualTo4 = "gilbert" === "gilbert" // true
const isEqualTo5 = 'riko' === "riko" // true
const isEqualTo6 = firstName === nickName // true
const isEqualTo7 = firstName === lastName // false

// != is not equal
const isNotEqual = "15" != 15 // false

// !== is not equal
const isNotEqual1 = "15" !== 15 // true
const isNotEqual2 = 20 !== 20 // false
const isNotEqual3 = "audy" !== "iqbal" // true
const isNotEqual4 = "gilbert" !== "gilbert" // false
const isNotEqual5 = 'riko' !== "riko" // false
const isNotEqual6 = firstName !== nickName // false
const isNotEqual7 = firstName !== lastName // true

const isTrue = (20 > 80) === true // false
const isTrue1 = (20 >= 20) != false // true
const isTrue2 = ( (20 > 80) === (60 * 2 > 96) ) !== false // false
console.log(isTrue, isTrue1, isTrue2)
// Algorithm

// kesimpulan nya adalah,
// algorithm adalah suatu instruksi yang digunakan untuk menyelesaikan suatu masalah , berdasarkan runtutan / langkah langkah yang sistematis dan logis

// pseudeocode
/* if komputer tidak hidup
    maka siapkan obeng, alkohol 70%, kuas, hairdrier

    bongkar komputer
    bersihkan komponent komputer
    bagian vga dan motherboard
    di lap pakai alkohol 70%
    lalu keringkan menggunakan hairdrier

    coba hidupkan komputer

    if komputer tidak hidup kembali ke step awal
    else maka komputer sudah siap digunakan
*/

// flowchart
// menggunakan symbol , untuk penyelesaian nya

// conditional
// if statement

const angka1 = 60
const angka2 = 80

if (angka1 >= angka2) {
    console.log("hallo")
} else if (angka1 === 20) {
    console.log("hai")
} else {
    console.log("gracias")
}

const myName = "audy"
const myFriendName = "Rico"

if (angka1 >= (angka2 - 15)){
    console.log(myName)
} else if (myName === "audy wisuda pratama") {
    console.log("hallo" + myName)
} else if (myFriendName === "Rico Aminanda") {
    console.log("hai" + myFriendName)
} else {
    console.log("who are you ?")
}

if (angka1 >= (angka2 - 15)){
    console.log(myName)
} else if (myName === "audy") {
    console.log("hallo" + myName)
} else if (myFriendName === "Rico Aminanda") {
    console.log("hai" + myFriendName)
} else {
    console.log("who are you ?")
}

// const angka1 = 60
// const angka2 = 80
if (angka1 <= (angka2 - 15)){
    if (myName === "audy") {
        if (myFriendName === "Rico") {
            console.log(myFriendName)
        }
        console.log(myName) 
    } else {
        console.log("i dont know")
    }
} else {
    console.log("who are you ?")
}

if (angka1 >= (angka2 - 15)) {
    console.log("benar")
}


// switch case
const kingName = "Tcala"
const myAge = false

switch (myAge) {
    case 18 :
        console.log("audy")
        break
    
    case false :
        console.log("iqbal")
        break

    case "irfan" :
        console.log("irfan")
        break

    case 20 :
        console.log("irfan")
        break

    default:
        console.log("not match")
        break
}

const nilaiKosong = null

if (false) {
    console.log("i'm truthy")
} else {
    console.log("im falsy")
}

// falsy
// false, undefined, null, NaN, 0, ""

// truthy


// looping
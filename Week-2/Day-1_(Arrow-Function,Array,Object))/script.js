// // buat lah suatu function , dimana function nya menerima 1 parameter, lalu function ini bertugas / bertujuan untuk menentukan nilai paramater itu ganjil / genap
// const ganjilGenap = (angka) => {
//   if (angka % 2 === 0) {
//     return 'Genap';
//   } else {
//     return 'Ganjil';
//   }
// };



// // Arrow function
// const callMyName = (params1, params2, params3) => {
//   return params1 + params2 + params3;
// };

// // jika parameter cuman satu, kurung pada paramsnya boleh di hapus
// // const genapGanjil = (angka) => {
// //     return angka % 2 === 0 ? 'Genap' : 'Ganjil';
// // };

// const iniLebihDari1AtauKurangDari1Params = (params, params1) => {

// }

// const genapGanjil = angka => {
//     return angka % 2 === 0 ? 'Genap' : 'Ganjil';
//   };

// // jika arrow function hanya mereturn sesuatu , maka tidak perlu scop / {} dan kata kata return

// const genapGanjil = angka => angka % 2 === 0 ? 'Genap' : 'Ganjil';

// const cobaCoba = (params1) => {
//     const name = "audy" 
//     return name
// }



// Function dengan 2 parameter, paramter pertama digunakan untuk menentukan kelipatan berapa , parameter kedua batas akhi
// function(2, 11) should return array [2,4,6,8,10]
// function(3, 19) should return array [3,6,9,12,15,18]

// const multiple = (step, stop) => {
//     let result = []
//     for(let i = step; i <= stop; i = i + step){
//         result.push(i) 
//     } 
//     return result
// }
// // mic saya ga bisa aktifkan mas wkkwkwk
// console.log(multiple(6, 92))

// const students = ["Nurfauziah", "Iqbal", "Akbar", "Shobrina", ["Irfan", "Akdeas" , "Diah"], ["A'zham", "Iran", ["Mutiara", ["audy"]]]]
// const guys = ["audy", "rahmat", "rafi"]

// // array
//     // CRUD
//     // READ
//     // console.log(students[2])
//     // console.log(students[4][1])
//     // console.log(students[1], students[2])
//     console.log(students[5][2][1][0]);
//     console.log(students[5][1]); 
//     students[5][1] = "Irfan";
//     console.log(students[5][1]);
//     // CREATE
//     // unshift
//         // meletakan value pada awal array
//         console.log(guys, "ini sebelum di tambahkan")
//         guys.unshift("hari ini cerah")
//         console.log(guys, "ini sesudah di tambahkan")

//     // push
//         // meletakan value di akhir array
//         guys.push("Akdeas")
//         guys.push(1)
//         guys.push(2)
//         guys.push(3)
//         guys.push(4)
//         guys.push(5)
//         guys.push(6)
//         console.log(guys, "ini sesudah di push")


//     // UPDATE
//     guys[1] = "audy wisuda pratama"
//     console.log(guys, " setelah update")

//     // DELETE
//     // shift
//         guys.shift()
//         console.log(guys)
//     // pop
//     guys.pop()
//     console.log(guys)

//     console.log(guys.length)
//     guys.length = 2
//     console.log(guys)


    let bioData = {
        firstName : "audy",
        secondName : null,
        lastName : "pratama",
        age : 20,
        isMarried : true,
        hobbies : ["tidur", "makan", "scrolling tiktok", "repeat"],
        myFullName :  function () {
            return this.firstName + this.lastName
        }
    }
// object
    // CRUD
    // READ
        // dot notation
            console.log(bioData.firstName)
            console.log(bioData.lastName)
            console.log(bioData.hobbies[1])

        // square notation
            console.log(bioData["firstName"])
            console.log(bioData['lastName'])
            console.log(bioData["hobbies"][1])

    // CREATE
    console.log(bioData, "ini sebelum di create")
    bioData.address = "jalan raya ramai sekali"
    bioData.nilai = [99,100,98,97,65]
    bioData.kriteria = {height : "168 cm", weight : "168 lbs"}
    bioData.kriteria.bloodType = "AB"
    console.log(bioData, "ini sesudah di create")
    console.log(bioData.kriteria.bloodType)
    console.log(bioData["kriteria"]["bloodType"])

    // UPDATE
    bioData.address = "Jalan yang baru"
    console.log(bioData)

    // DELETE
    delete bioData.nilai
    console.log(bioData)

    // Destruction pada array dan object
    // Array
    let students = ["Nurfauziah", "Iqbal", "Akbar", "Shobrina", "audy"]
    let [name1, name2, name3, name4, name5] = students
    
    // Object
    let {firstName, secondName, hobbies} = bioData
    console.log(secondName, "object")
    console.log(hobbies[1])

    // spread operator
    // Array
    students = [ "Yohanes" , ...students, "Rico"]
    console.log(students)


    // Object
    bioData = {...bioData, kelas : "RN-1", firstName : "Audy Wisuda"}
    console.log(bioData)

    const iDontKnow = (data) => {

    }

    iDontKnow(["audy", ""])
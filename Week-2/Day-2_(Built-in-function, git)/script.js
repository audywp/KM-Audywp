// Built-in function / method bawaan javascript


const firstName = "Audy"
const lastName = "Pratama"
const age = 20

// String
const myName = "Audy wisuda pratama"

const myFullName = "Audy?wisuda?pratama"
    // slice
    const hasilSlice = myName.slice(3 , 10)
    console.log(hasilSlice)

    // concat
    // mengabungkan 2 atau lebih suatu 
    const hasilConcat = myName.concat(" adalah", " seroang", " kapiten", ["audy" , "kalian"])
    console.log(hasilConcat)

    // string literal
    // const fullName = firstName + " " + lastName
    const fullName = `hallo nama saya ${firstName} ${lastName}, dan umur saya adalah ${age}`
    console.log(fullName)


    // split
    const hasilSplit = myFullName.split("?")
    const hasilSplit1 = myName.split(" ")
    console.log(hasilSplit)
    console.log(hasilSplit1)

    // toUpercase
    const hasilUpperCase = myName.toUpperCase()
    console.log(hasilUpperCase)

    // toLowercase
    const hasilLowerCase = myName.toLowerCase()
    console.log(hasilLowerCase)

    // includes
    const isExist = myName.includes("zha")
    console.log(isExist)

    // dll


    const students = ["A'zham", "Rico", "Akbar", "Yuli", "Rafi", "Mutiara", "Rahmat", "Rizky"]
// array
    // splice
    // const hasilSplice = students.splice(2 , 6)
    // console.log(hasilSplice)
    
    // slice
    const hasilSliceArray = students.slice(2 , 4)
    console.log(hasilSliceArray)

    // concat
    const hasilConcatArray = students.concat("Irfan", "Shobrina")
    console.log(hasilConcatArray)

    // reverse
    const hasilReverse = students.reverse()
    console.log(hasilReverse)

    // join
    const hasilJoin = students.join("")
    console.log(hasilJoin)
    

    const reverseName = myName.split(" ").reverse().join(" ")
    console.log(reverseName)

    // includes
    const isExistInArray = students.includes("Akbar")
    console.log(isExistInArray)

    // const students = ["A'zham", "Rico", "Akbar", "Yuli", "Rafi", "Mutiara", "Rahmat", "Rizky"]
    let numbers = [2,5,6,8,9,3,4,10]
    
    // tolong dong kalikan semua nilai yang ada didalam array ini dengan 3
 
    // how about kalau isi datanya ada 1000

    console.log(numbers)

    // foreach
    
    // const hasilForEach = numbers.forEach((isiArray, index) => {
    //     numbersWithMultiple3.push(isiArray * 3)

    //     return "audy"
    // })
    

    // map
    //  let numbers = [2,5,6,8,9,3,4,10]
    const hasilForEach = numbers.map((isiArray, index) => {
        return isiArray * 5
    })

   
    console.log(hasilForEach)
    
    // indexOf
    const indexKe = numbers.indexOf(3)
    console.log(indexKe, "index ke")

    // sort
    const sortFunction = data => {
        const hasilSort = data.sort((a, b) => {
            return a - b
        }).reverse()

        return hasilSort
    }
    
    console.log(sortFunction(numbers) , "hasil sorting")
    
    // find
    //  let numbers = [2,5,6,8,9,3,4,10]
    const hasilFind = numbers.find((value, index) => {
        return value < 8
    })
    console.log(hasilFind, "hasil find")

    // filter
    const hasilFilter = numbers.filter((value, index) => {
        return value % 2 !== 0
    }).sort((a,b) => a-b)
    console.log(hasilFilter, "hasil filter")




// Number
    // parseInt
    const myAge = "50 ashjdkshajdhsajkhjk 50 20"
    const hasilParseInt = parseInt(myAge)
    console.log(hasilParseInt)

    // parseFloat
    const resultTest = "20.5"
    const hasilParseInt1 = parseFloat(resultTest)
    console.log(hasilParseInt1)

    // math round
    const hasilMathRound = Math.round(2.5)
    console.log(hasilMathRound)

    // math ceil
    const hasilMathCeil = Math.ceil(5.01)
    console.log(hasilMathCeil)

    // math floor
    const hasilMathFloor = Math.floor(8.9999999999)
    console.log(hasilMathFloor)
    
    // math random
    const  hasilRandom = () => {
        const number = parseInt(Math.random() * numbers.length)

        if (number !== -0) {
            return number
        } else {
            return 0
        }
    }
    console.log(hasilRandom()) 

    

// buatlah satu function yang menerima 1 parameter untuk merubah huruf awal dari setiap kata dari parameter menjadi kapital
// rules: 
    // type data dari parameter harus string , selain itu alert
    // setiap kata harus berawalan kapital , 
    // contoh :
        // hari ini hari selasa, berubah jadi Hari Ini Hari Selasa
        // besok adalah hari rabu, berubah jadi Besok Adalah Hari Rabu
        // audy wisuda pratama, berubah jadi Audy Wisuda Pratama

// clue: split , map , join
const changeChar = (str) => {
    if (typeof str === 'string') {
        let splitStr = str.split(' ');
        console.log(splitStr);
        let tmp = splitStr.map(val => {
            let eachWord = val.split('');
            eachWord[0] = eachWord[0].toUpperCase();
            return eachWord.join('');
        })

        return tmp.join(' ');
    } else {
        alert('salah parameter')
        return new Error("Ada yang salah nih")
    }
}

console.log(changeChar("audy wisuda pratama"))
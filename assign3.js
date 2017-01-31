
const myVal = process.argv
let myArr1 = []
myArr1.push(Number(myVal[2]))
myArr1.push(Number(myVal[3]))
myArr1.push(Number(myVal[4]))
myArr1.forEach(function(element) {
    console.log(element+2)
})
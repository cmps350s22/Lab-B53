// int add(int a, int b){
//     return a + b
// }
//
// add(10,20)

// function add(a, b) {
//     return a + b
// }
// console.log('Sum = ' , add(22, 55))
// console.log('Sum = ' , add(22.2, 55.2))
// console.log('Sum = ' , add('Omama ', 'Alhamed'))
//
// console.log(`
//     Sum of Integers : ${add(22,33)}
//     Sum of Floats : ${add(22.2,33.4)}
//     Concatenated String : ${add("Omama "," Alhamed")}
// `)

// const add = function (a, b) {
//     return a + b
// }
// const a = 10
//
// console.log(add(10, 2))
// console.log(add(a, 2))

// const display1 = function (a) {
//     console.log(`From Display 1 - ${a}`)
// }
// const display2 = function (a) {
//     console.log(`From Display 2 - ${a}`)
// }
// const display3 = function (a) {
//     console.log(`From Display 3 - ${a}`)
// }
//
// function addDisplay(a, b, theDisplayFunction) {
//     theDisplayFunction(a + b)
// }
// const x = 12
// addDisplay(x,24,12)
// addDisplay(x,24, display2)
// addDisplay(x,24, display3)


// const name = 'Abdulahi'


function add(a, b) {
    return a + b
}

const multiply = function (a, b) {
    return a * b
}

function operator(a, b, fun) {
    return fun(a, b)
}
const a = 10
const b = 10

console.log(operator(a,b, (a,b)=> a * b))
console.log(operator(10,10, add))

// function max(a, b) {
//     if(a > b)
//         return a
//     else
//         return b
// }
//
// (a, b) => a > b ? a : b














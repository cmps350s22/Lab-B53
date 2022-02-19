//How to declare variable

let x = 10
const y = 10

x = 100

const student = {
    name : 'Amna',
    age : 21,
    height : 1.75,
    gender : 'Female',
    hobbies : ['Movies', 'Basketball'],
    pets : [
        {
            name : "lulu",
            age : 2
        },
        {
            name : "juju",
            age : 3
        }
    ]
}

student.brothers = [{name : 'Mohamed'},{name : 'Ali'}]
console.log(student)
console.log(student.pets[0].name)
console.log(student.hobbies[1])

const students = [
    {name: 'Amana', gender: 'Female', grade: 92, age: 19},
    {name: 'Ahmed', gender: 'Male', grade: 81, age: 30},
    {name: 'Sara', gender: 'Female', grade: 99, age: 24},
    {name: 'Emany', gender: 'Female', grade: 50, age: 26},
    {name: 'Issa', gender: 'Male', grade: 70, age: 24}
]

// students.reduce((acc, curr)=> acc.grade > curr.grade ? acc : curr)


//
// let acc = students[0]
//
// for (const student of students) {
//     acc += student.grade
// }
//
// console.log(acc)

    // ['Amana','Ahmed','Sara','Emany''Issa']

// const femaleStudents = students.filter(student => student.gender == 'Female')
// const findIssa = students.find(s => s.name === 'Issa')
// const studentNames = students.map(s => s.name)
// students.forEach(s => console.log(`
//     Name : ${s.name} Gender : ${s.gender}  Grade : ${s.grade}  Age : ${s.age}
// `))
//
// const studentGrades =students.reduce((acc, curr)=> acc.grade + curr.grade )
// console.log()

















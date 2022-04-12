import fs from 'fs-extra'


/*
1.Rewrite the you created in Part-1 using promises.
*/

// fs.readFile('data/student.json', (err, data)=> {
//     if (!err)
//         console.log(JSON.parse(data))
//     else
//         console.log(err)
// })

fs.readJson('data/courses.json')
    .then(courses => {
        return fs.readJson('data/students.json')
            .then(students => {
                return courses
            })
    })

    .then(previousResult => console.log(previousResult))
    .catch(err => console.error(err))

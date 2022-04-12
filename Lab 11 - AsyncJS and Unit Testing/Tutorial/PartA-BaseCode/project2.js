/*
1)	We need to read data from two files. course.json and staff.json. Both using callbacks.
2)	We need finally print all courses with their corresponding instructor names.
a)	Instructor name can be found at the staff file.
b)	Use staffNo in staff.json property to match the instructorId from course.json
3)	Create two functions getCourses and setInstructorNames.
function getCourses(cb)
	function setInstrctorNames(courses , cb)
4)	Instructor names are set as a new property to the course object in the setInstrctorNames function.

 */

// {
//     "crn": 107,
//     "courseCode": "GENG 107",
//     "courseName": "Engineering Skills and Ethics",
//     "semester": "Fall 2015",
//     "instructorId": 3,
//     "instructor": "Mohamed Alrazi",
//     "students": [
//         "Fn1 Ln1",
//         "Fn2 Ln2",
//         "Fn3 Ln1",
//     ]
// },

import fs from 'fs'

function setInstructorNames(courses, cb) {

}
function getCourses(cb) {
    fs.readFile('data/course.json', (err, data) => {
        if (!err) {
            const courses = JSON.parse(data)
            setInstructorNames(courses, cb)
        } else
            cb(err, null)
    })
}

getCourses((err, data) => {
    if (!err) console.log(data)
    else console.log(err)
})

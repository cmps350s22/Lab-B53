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

//macdonald

function setCourseStudents(courses, cb) {
    fs.readFile('data/student.json', (err, data) => {
        if (!err) {
            const students = JSON.parse(data)
            for (const course of courses) {
                //crn and courseIds
               course.students = students
                   .filter(student => student.courseIds.includes(course.crn))
                   .map(student => `${student.firstname} ${student.lastname}`)
            }
           cb(null, courses)
        } else
            cb(err, null)
    })
}
function setInstructorNames(courses, cb) {
    fs.readFile('data/staff.json', (err, data) => {
        if (!err) {
            const staffs = JSON.parse(data)
            for (const course of courses) {
                const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
                course.instructor = `${firstname} ${lastname}`
            }
            setCourseStudents(courses, cb)
        } else
            cb(err, null)
    })
}

//Starbucks
function getCourses(cb) {
    fs.readFile('data/course.json', (err, data) => {
        if (!err) {
            const courses = JSON.parse(data)
            // cb(null, courses)
            setInstructorNames(courses, cb)
        } else
            cb(err, null)
    })
}

getCourses((err, data) => {
    if (!err) console.log(data)
    else console.log(err)
})

console.log('hello this code willnot be blocked')














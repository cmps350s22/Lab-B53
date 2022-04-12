import fs from 'fs-extra'

/* 1.	In project7.js :  Rewrite the code you created in project5.js using Async/await.
*/

async function getCourses() {
    const courses = await fs.readJson('data/course.json')
    const staffs = await fs.readJson('data/staff.json')
    const students = await fs.readJson('data/student.json')

    for (const course of courses) {
        const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
        course.instructor = `${firstname} ${lastname}`
        course.students = students
            .filter(student => student.courseIds.includes(course.crn))
            .map(student => `${student.firstname} ${student.lastname}`)
    }
    return courses
}

getCourses().then(courses=> console.log(courses))

console.log('this will not be blocked')

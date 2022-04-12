import fs from 'fs'
//Synchronous code. Change it to async using callback.
// let data = fs.readFileSync('data/student.json');
// console.log(JSON.parse(data));

/*
1.Convert this code to asynchronous form using a separate callback function (callBack).
2.Change the callback function to an anonymous one.
2.Take care of error handling in the callback function
*/


function readFile(fialename, cb){
    //read the data
    const data = [1,2,3,4,5,5]
    const isError = false

    if(!isError){
        cb(null, data)

    }else{
        cb('error', null)
    }
}


fs.readFile('data/student.json', (err, data)=> {
    if (!err)
        console.log(JSON.parse(data))
    else
        console.log(err)
})

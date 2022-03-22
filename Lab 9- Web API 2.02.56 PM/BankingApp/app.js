import express from 'express';

const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})

/*
    1.Initialize the package.json by typing
    npm init -y

    2.put this line inside package.json
    "type": "module",

    3.download express framework
    npm i express

    4. install nodemon [only once in the entire semester]
    npm i -g nodemon    [window user]
    sudo npm i -g nodemon [mac users]

    5. run the application using
    nodemon
    OR
    nodemon app.js

 */

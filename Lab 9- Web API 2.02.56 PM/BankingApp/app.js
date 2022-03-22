import express from 'express';

const app = express();
const port = process.env.PORT || 3000

//http://localhost:3000/api/accounts
//http://localhost:3000/api/accounts?type=current

app.get('/api/accounts', (req, res) => {
    const query = req.query
    // res.send('this route will return all the accounts')
    res.send(req.query)
})

app.get('/api/accounts/:acctNo',(req, res)=>{
    res.send(req.params)
})

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

 */

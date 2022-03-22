import express from 'express';

const app = express();
const port = process.env.PORT || 3000

app.get('/api/accounts', (req, res) => {
    const query = req.query
    // res.send('this route will return all the accounts')
    res.send(`getting accounts of type ${req.query.type}`)
})

app.get('/api/accounts/:acctNo',(req, res)=>{
    res.send(`getting single account with account no ${req.params.acctNo}`)
})

app.delete('/api/accounts/:acctNo',(req, res)=>{
    res.send(`deleting ${req.params.acctNo}`)
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

    4. install nodemon [only once in the entire semester]
    npm i -g nodemon    [window user]
    sudo npm i -g nodemon [mac users]

 */

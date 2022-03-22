
//install a json middleware
import express from "express";
const router = express.Router();
const accounts = [
    {
        accountNo: 1101,
        acctType: "Current",
        balance: 500
    },
    {
        accountNo: 1155,
        acctType: "Current",
        balance: 500
    },
    {
        accountNo: 1102,
        acctType: "Saving",
        balance: 500
    }
]

router.use(express.json())
//http://localhost.:3000/api/accounts?type=Saving
router.get('/accounts', (req, res) => {
    const acctType = req.query.type
    if (acctType) {
        const filteredAccounts = accounts.filter(account => account.acctType == acctType)
        res.json(filteredAccounts)
    }
    else
        res.json(accounts)
})

router.post('/accounts', (req, res) => {
    // res.send('this route will add an account')
    res.json(req.body)
})

router.put('/accounts', (req, res) => {
    // res.send('this route will update accounts')
    res.json(req.body)
})

router.get('/accounts/:acctNo', (req, res) => {
    res.send(`getting single account with account no ${req.params.acctNo}`)
})

router.delete('/accounts/:acctNo', (req, res) => {
    res.send(`deleting ${req.params.acctNo}`)
})

export default router;

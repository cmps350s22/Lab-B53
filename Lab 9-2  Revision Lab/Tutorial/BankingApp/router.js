import express from 'express';
const router = express.Router()

router.get('/accounts', getAccounts)
router.get('/accounts/:acctNo',getAccount)
router.post('/accounts',addAccount)
router.put('/accounts',updateAccount)
router.delete('/accounts/:acctNo',deleteAccount)
router.post('/accounts/:acctNo/trans',addTransaction)

function addTransaction(req, res) {
    res.send(req.body)
}
function deleteAccount(req, res) {
    res.send(req.params)
}
function getAccount(req, res) {
    res.send(req.params)
}
function addAccount(req, res) {
    res.send(req.body)
}
function updateAccount(req, res) {
    res.send(req.body)
}
function getAccounts(req, res) {
    res.send(req.query)
}

export default router

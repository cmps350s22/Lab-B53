import express from 'express';
import AccountService from './service/account-service.js'
const router = express.Router()
const accountService = new AccountService()

// router.get('/accounts', accountService.getAccounts)
// router.post('/accounts',accountService.addAccount)
// router.put('/accounts',accountService.updateAccount)
// router.get('/accounts/:acctNo',accountService.getAccount)
// router.delete('/accounts/:acctNo',accountService.deleteAccount)
// router.post('/accounts/:acctNo/trans',accountService.addTransaction)

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)
    .put(accountService.updateAccount)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

router.route('/accounts/:acctNo/trans')
    .post(accountService.addTransaction)




export default router

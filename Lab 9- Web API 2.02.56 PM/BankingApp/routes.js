
//install a json middleware
import express from "express";
import BankService from './service/bank-service.js'
const bankService = new BankService();
const router = express.Router();

router.use(express.json())
router.route('/accounts')
    .get(bankService.getAccounts)
    .put(bankService.updateAccount)
    .post(bankService.addAccount)

router.route('/accounts/:acctNo')
    .get(bankService.getAccount)
    .delete(bankService.deleteAccount)


export default router;

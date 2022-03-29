export default class AccountService {

    getAccounts(req, res) {
        res.send(req.query)
    }
    getAccount(req, res) {
        res.send(req.params)
    }
    deleteAccount(req, res) {
        res.send(req.params)
    }
    addAccount(req, res) {
        res.send(req.body)
    }
    updateAccount(req, res) {
        res.send(req.body)
    }
    addTransaction(req, res) {
        res.send(req.body)
    }
}

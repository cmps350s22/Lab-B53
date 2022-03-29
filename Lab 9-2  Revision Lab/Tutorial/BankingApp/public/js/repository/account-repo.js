const baseUrl = '/api/accounts'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        // const url = `http://localhost:3000/api/accounts?type=${acctType}`
        const url = `/api/accounts?type=${acctType}`
        const data = await fetch(url)
        return data.json()
    }

    async deleteAccount(accountNo) {
        const url = `/api/accounts/${accountNo}`
        const init = {method: 'DELETE'}
        const response = await fetch(url, init)
        return response
    }

    async addAccount(account) {
        const url = `/api/accounts`
        const init = {
            method: 'POST',
            body : JSON.stringify(account),
            headers: {'Content-Type' : 'application/json'}
        }
        const response = await fetch(url, init)
        return response
    }

    async updateAccount(account) {
        const url = `/api/accounts`
        const init = {
            method: 'PUT',
            body : JSON.stringify(account),
            headers: {'Content-Type' : 'application/json'}
        }
        const response = await fetch(url, init)
        return response
    }

    async addTrans(trans) {
        const url = `/api/accounts/${trans.accountNo}/trans`
        const init = {
            method: 'POST',
            body : JSON.stringify(trans),
            headers: {'Content-Type' : 'application/json'}
        }
        const response = await fetch(url, init)
        return response
    }
}

export default new AccountRepo()

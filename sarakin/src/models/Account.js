const uuid = require('uuid/v1')

class Account {
    constructor(params = {}) {
        this.id = uuid()
        this.agency = "001"
        this.numberAccount = uuid()
        this.cpf = uuid()
        this.name = params.name
        this.email = params.email
        this.balance = 0
        this.createdAt = Date.now() //TimeStamp 
    }
}

export default Account
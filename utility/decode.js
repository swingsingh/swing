const jsonwebtoken = require('jsonwebtoken')
const {promisify} = require('util')
const Account = require('./../model/auth.model')

class Decode{


    async decodingToken(token){
        const decoding = await promisify(jsonwebtoken.verify)(token, process.env.STRING)
        const user = await Account.find({_id : decoding.id})
        return user
    }

}

const decodeSystem = new Decode()

module.exports = decodeSystem
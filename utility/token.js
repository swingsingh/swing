const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class Token{
    tokenSign(id){
        const token = jwt.sign({id : id}, process.env.STRING)
        return token
    }
}


const tokenization = new Token()

module.exports = tokenization
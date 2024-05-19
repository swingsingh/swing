const Account = require('./../model/auth.model')
const token = require('./../utility/token')

const decodeSystem = require("./../utility/decode")

exports.openAccount = async(req, res, next)=>{
    const {username, email, phone, password, catagory} = req.body;
    const openAccount = await Account.create({username, email, phone, password, catagory})
    const tokenSigning = token.tokenSign(openAccount._id)
    
    res.status(200).json({
        status : 'success',
        data : {
            token : tokenSigning,
            account : openAccount,
            message : "Account opened successfully!"
        }
    })

}


exports.liveEventRegisteration = async(req, res, next)=>{
    const {date, token} = req.body;
    const user = await decodeSystem.decodingToken(token)
    user[0].liveEventRegisteration.push({
        date : date,
        registered : true
    })
    user[0].save()
    res.status(200).json({
        status : 'success',
        data : {
            message : 'Great you are registered'
        }
    })
}

exports.addingDoubts = async(req, res, next)=>{
    const {subject, detail, course,id,token} = req.body;
    const user = await decodeSystem.decodingToken(token)
    user[0].doubts.push({
        subject,
        detail,
        course,
        id
    })
    user[0].save()

    res.status(200).json({
        status : 'success',
        data : {
            message : "Your doubt is added"
        }
    })

}

const results = [
    {
        name : "Whirlpool india",
        gainLoss : "+6%"
    }
    ,
    {
        name : "Britannia India",
        gainLoss : "+10%"
    }
    ,
    {
        name : "KCP LTD",
        gainLoss : "+3%"
    }
    ,
    {
        name : "M&M",
        gainLoss : "+7%"
    }
    ,
    {
        name : "Tata Motors LTD",
        gainLoss : "+27%"
    }
]
exports.resultsSending = async(req,res,next)=>{
    res.status(200).json({
        status : "success",
        data : {
            results
        }
    })
}
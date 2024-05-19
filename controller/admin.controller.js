const Account = require('./../model/auth.model')
const token = require('./../utility/token')

exports.sendingNextLiveSession = async(req, res,next)=>{
    const date = '30-05-2024'
    res.status(200).json({
        status : "success",
        data : {
            date
        }
    })
}
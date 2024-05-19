const mongoose = require('mongoose')

const OpenAccount = new mongoose.Schema({
    username : {
        type : String
    }
    ,
    email : {
        type : String
    }
    ,
    password : {
        type : String
    }
    ,
    phone : {
        type : String
    }
    ,
    catagory : {
        type : String
    }
    ,
    liveEventRegisteration : [{
        date : {
            type : String
        }
        ,
        registered : {
            type : Boolean
        }
        
    }]
    ,
    doubts : [{
        subject : {
            type : String
        }
        ,
        detail : {
            type : String
        }
        ,
        course : {
            type : String
        }
        ,
        id : {
            type : String
        }
        ,
        clear : {
            type : Boolean,
            default : true
        }
        ,
    }]
})

const Account = mongoose.model('Account', OpenAccount)

module.exports = Account
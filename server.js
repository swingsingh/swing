const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path : './environment/config.env'})

const connect = mongoose.connect(process.env.CONNECTION).then(()=>{
    console.log('connection establish')
})

const server = app.listen(1234, (req, res)=>{
    console.log("app is running on 1234")
})
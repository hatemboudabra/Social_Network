const express = require ('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')

//app.use( cors())
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to MongoDb');
    app.listen(PORT,()=>{
        console.log(`server listening on ${PORT}`)
    })
}).catch((err) =>{
    console.error('Error connecting to mongodb:',err.message)
})
app.get('/',(req,res)=>{
    return res.status(200).send('hello chabeb !')
})
    /*
app.listen(4000,()=>{
    console.log(`server listening on 4000`)
})
*/

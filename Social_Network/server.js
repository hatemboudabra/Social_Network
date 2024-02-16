const express = require ('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
//const path = require("path");
const PostLike = require("./models/PostLike");
const Post = require("./models/Post")
dotenv.config()
//app.use( cors())
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
const users = require("./routes/users");

mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to MongoDb');
    app.listen(PORT,()=>{
        console.log(`server listening on ${PORT}`)
    })
}).catch((err) =>{
    console.error('Error connecting to mongodb:',err.message)
})
app.get('/',(req,res)=>{
    return res.status(200).send('hello world !')
})
    /*
    app.listen(4000,()=>{
    console.log(`server listening on 4000`)
})
*/

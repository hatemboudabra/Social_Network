
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Social_Network').then(
    ()=>{
        console.log('connected!!!');
    }

);
module.exports=mongoose
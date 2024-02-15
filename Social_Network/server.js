const express = require("express");
const app = express();
const mongoose = require('./db/db');

app.use(express.json());

app.listen(4000,()=>{
    console.log(`server listening on 4000`)
})

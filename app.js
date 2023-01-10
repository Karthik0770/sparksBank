const express = require('express')
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
app.use(express.json())
dotenv.config({path:'./config.env'})

const PORT = process.env.PORT || 4000

const userRoutes =require('./routes/users')
app.use(cors())
app.use('/users',userRoutes)

const url = 'mongodb+srv://karthik:iyer1234@sparksmern.glakp.mongodb.net/sparks-mern?retryWrites=true&w=majority'
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const con = mongoose.connection

con.on('open',()=>{
    console.log("Connected")
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log('Server Started')
})
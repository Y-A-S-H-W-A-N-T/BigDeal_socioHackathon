// EXPRESS CONNECTION

const express = require('express')
const app = express()
const cors=require("cors")
const port = 8000
app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`Server is running at http://localhost:${port}`) 
})

// DATABASE CONNECTION

const mongoose = require('mongoose')
const User = require('./schema')

const URL = `mongodb+srv://raoyashwant132:hackathon@website.jbmnv7g.mongodb.net/Hackathon?retryWrites=true&w=majority`
mongoose.connect(URL)
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log(err)
})


// MIDDLEWEARS

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


// API

app.post('/login',async(req,res)=>{
    const result = await User.findOne(req.body)
    //use .then() function
    result?res.json({status: 200,msg: 'User Found in Database'}):res.json({status: 400,msg: 'Wrong Credentials'})
})

app.post('/signup',async(req,res)=>{
    console.log("User - > ",req.body)
    const user = new User(req.body)
    const result = await user.save()
    //use .then() function
    result?res.json({status: 200,msg: 'User Created'}):res.json({status: 400,msg: 'Error in creating user'})
})
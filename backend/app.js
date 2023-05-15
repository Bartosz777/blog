require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})



const postRouter = require('./routes/posts');

app.use('/', postRouter);



app.listen(4000, function() {
    console.log("Server is running on port 4000")
})
/* eslint-disable no-unused-vars */
const express = require('express')
const cors = require('cors')
const Note = require('./models/note.js')
const app = express()
const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const mongoose = require('mongoose')
require('dotenv').config()
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zpqcb.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    

}).then(result => {
    console.log('connected to mongoDB')
})
.catch(err=> {
    console.log('error connecting to mongoDB: ', error.message)
})

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

app.use('/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/notes', notesRouter)

// eslint-disable-next-line no-undef
module.exports = app
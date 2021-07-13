const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
    User.find({})
        .then((notes) => res.json(notes))
        .catch((err) => console.log('Error in getting users', err))
})

usersRouter.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const newUser = new User({
        username: body.username,
        name: body.name,
        passwordHash
    })

    const savedUser = await newUser.save()

    res.json(savedUser)
})

module.exports = usersRouter
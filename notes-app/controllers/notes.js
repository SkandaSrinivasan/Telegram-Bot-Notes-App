const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', (req, res) => {
    Note.find({}).then((notes) => {
        res.json(notes)
    })
        .catch((err)=>{
            console.error('Notes fetch failed', err)
        })  
})

notesRouter.delete('/:id', (req,res)=>{
    Note.findByIdAndRemove(req.params.id).then(result => {
        res.status(204).end()
    })
        .catch(error => res.send({error: error}))
})

module.exports = notesRouter
const { response } = require('express')
const express = require('express')
const app = express()

let Note = require('./models/note.js')
const cors = require('cors')
app.use(cors())

app.use(express.static('build'))
app.use(express.json())

app.get('/api/notes', (req, res) => {
    Note.find({}).then((notes) => {
        res.json(notes)
    })
    .catch((err)=>{
        console.error('Notes fetch failed', err)
    })
    
})
app.post('/api/notes', (req, res) => {
    const body = request.body
    if(body.content === undefined){
        return res.status(400).json({error: 'content is missing'})
    }

    const note = new Note({
        content:body.content,
        date: new Date()
    })
    note.save().then(savedNote => {
        response.json(savedNote)
    })
})

app.delete('/api/notes/:id', (req,res)=>{
    Note.findByIdAndRemove(req.params.id).then(result => {
        res.status(204).end()
    })
    .catch(error => res.send({error: error}))
})
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>{
    console.log('app listening on ', PORT);
})
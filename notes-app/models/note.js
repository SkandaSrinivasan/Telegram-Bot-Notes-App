const mongoose = require('mongoose')
const NoteSchema = new mongoose.Schema({
    content: String,
    date: Date
})

NoteSchema.set('toJSON', {
    transform: (doc, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', NoteSchema)
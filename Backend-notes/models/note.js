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
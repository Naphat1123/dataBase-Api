const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    id: String ,
    name : String ,
    Category : String , 
    Price : Number
})

const bookModel = mongoose.model('Book' , bookSchema)

module.exports = bookModel

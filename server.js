const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')
const bookModel = require('./newModel')

mongoose.connect('mongodb://localhost:27017/dataBase', { useNewUrlParser: true })

app.use(express.json())

// get all book data
app.get('/books', async (req, res) => {
    const book = await bookModel.find({})
    res.json(book)
})

// get one book data
app.get('/books/:id', async(req, res) => {
    const { id } = req.params
    const book = await bookModel.findOne({id})
    res.json(book)
})


app.put('/books/:id', async (req, res) => {
    const payload = req.body
    const { id } = req.params

    const book = await bookModel.findByIdAndUpdate(id , { $set:payload})
    res.json(book)
})

app.post('/books', async (req, res) => {
    const payload = req.body
    const book = new bookModel(payload)
    await book.save()
    res.status(201).end()
})


app.listen(PORT, () => {
    console.log(`application is running on port ${PORT}`)
})
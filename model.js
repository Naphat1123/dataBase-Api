const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/dataBase', { useNewUrlParser: true })

const Cat2 = mongoose.model('Cat' , {name:String})

const kitty2 = new Cat2({name:"javascript2"})

kitty2.save().then(() => console.log('meow'))
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

require('dotenv').config()

const app = express()
const PORT = process.env.port || 3000

app.use(express.json())
app.use(cors())

const routes = require('./routes/ToDoRoute')
mongoose
    .connect('mongodb://127.0.0.1:27017/databaseAnyar')
    .then( () => console.log(`Connected To MongoDB...`))
    .catch((err) => console.log(err)),{
    useNewUrlParser:true, useUnifiedTopology:true
    }

app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))


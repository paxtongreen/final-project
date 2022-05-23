const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')
const router = require('./app/routes/router')

const PORT = process.env.PORT || 3001

server.use(helmet())

server.use(cors())

server.set('view engine', 'ejs')

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use('/', router)

server.listen(PORT, ()=> {
    console.log(`Port: ${PORT}`)
})
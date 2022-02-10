const express = require('express')
const app = express()
const router = require('./routes/router.js')
const cors = require('cors')
// const bodyParser = require('body-parser')

app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.enable('trust proxy')
// app.use(bodyParser.urlencoded({ extend: true }))

// const store = require('local-storage-pro')

// import express from 'express'
// const app = express()
// import fs from 'fs'
// import store from 'local-storage-pro'

// const indexPage = path.join(__dirname, './index.html')

// const myId = require('./static/token-cross-browsers')

app.use('/static', express.static('./static/'))
app.use(router)
app.use(cors({}))
app.use(express.json())
// console.log(myId.x)

const port = process.env.port || 5000

app.listen(port, console.log('listening on port' + port))

const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const bodyparser = require('body-parser')
const db = new sqlite3.Database('db/data.db')
var app = express()
// const index = require('/routes/index')

app.use(bodyparser.urlencoded({extended:true}))
app.use('view engine', 'ejs')
// app.use('/index', index)

app.listen(3000, ()=>{
    console.log('I am on 3000')
})
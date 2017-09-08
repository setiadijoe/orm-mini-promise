const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const bodyparser = require('body-parser')
const db = new sqlite3.Database('db/data.db')
var app = express()

app.listen(3001, ()=>{
    console.log('I am on 3001')
})
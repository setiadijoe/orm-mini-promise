const sqlite3 = require('sqlite3').verbose()
const bodyparser = require('body-parser')
const db = new sqlite3.Database('db/data.db')

db.serialize(()=>{

    db.run(`CREATE TABLE IF NOT EXISTS supervisor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama VARCHAR(200),
        email VARCHAR(200) 
    )`,()=>{
        console.log('TABEL supervisor selesai dibuat!')
    }
    )
    db.run(`CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama VARCHAR(200),
        status VARCHAR(200),
        idsupervisor INTEGER,
        FOREIGN KEY (idsupervisor) REFERENCES supervisor(id)
    )`,()=>{
        console.log('TABEL projects selesai dibuat!')
    })
    
})
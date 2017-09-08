const sqlite3 = require('sqlite3').verbose()
const bodyparser = require('body-parser')
const db = new sqlite3.Database('db/data.db')

db.serialize(()=>{

    db.run(`CREATE TABLE IF NOT EXISTS supervisor (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama STRING,
        email STRING 
    )`
    )
    console.log('TABEL supervisor selesai dibuat!')

    db.run(`CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama STRING,
        status STRING,
        idsupervisor INTEGER,
        FOREIGN KEY (idsupervisor) REFERENCES supervisor(id)
    )`)
    console.log('TABEL projects selesai dibuat!')
})
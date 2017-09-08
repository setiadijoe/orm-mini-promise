const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

class Siswa{
    
    static findAll(){
        let promise = new Promise((resolve, reject)=>{
            db.all(`SELECT * FROM siswa`, (err, row)=>{
                if (!err){
                    resolve(row)
                } else {
                    reject(err)
                }
            })
        })
    }
}
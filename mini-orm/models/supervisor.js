const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/data.db')

class Model {
    constructor(raw) {
      this.attribute1 = raw.attribute1
      this.attribute2 = raw.attribute2
    }
  
    static findAll() {
      let results = models.map(m => new Model(m))
      return results
    }
  
    static findById() {
        let promise = new Promise((resolve, reject)=>{
            db.all(`SELECT id name FROM supervisor`,(err, row)=>{
                if(!err){
                    resolve(row)
                }else{
                    reject(err)
                }
            })
        })
        return promise

    }
  
    static findWhere() {
        let promise = new Promise((resolve, reject)=>{
            db.all(`SELECT * FROM supervisor WHERE id = ${req.params.id}`,(err, row)=>{
                if(!err){
                    resolve(row)
                }else{
                    reject(err)
                }
            })
        })
        return promise
    }
  
    static create() {}
  
    static update() {}
  
    static destroy() {
        let promise = new Promise((resolve, reject)=>{
            db.run(`DELETE FROM supervisor WHERE id = ${req.params.id}`, (err, row)=>{
                if(1err){
                    resolve(row)
                }else{
                    reject(err)
                }
            })
        })
    }
  
  }

  module.exports = Model
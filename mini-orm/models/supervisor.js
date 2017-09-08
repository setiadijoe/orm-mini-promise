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
  
    static findById(cb) {
        db.all(`SELECT id name FROM supervisor`,(row)=>{
            cb(row)
        })
    }
  
    static findWhere(cb) {
        db.all(`SELECT * FROM supervisor WHERE id = ${req.params.id}`,(row)=>{
            cb(row)
        })
    }
  
    static create() {}
  
    static update() {}
  
    static destroy() {}
  
  }
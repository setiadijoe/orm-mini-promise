const express = require('express')
const router = express.Router();
const SPV = require('./models/supervisor')

router.get('/',(req, res)=>{
    SPV.findAll(row=>{
        res.render('supervisor', {data:row})
    })    
})

router.post('/', (req, res)=>{
    SPV.findById()
    .then(row=>{
        res.send(row)
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/delete/:id', (req, res)=>{
    SPV.destroy()
    .then(()=>{
        res.redirect('/supervisor')
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router
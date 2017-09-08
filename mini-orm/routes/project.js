const express = require('express')
const router = express.Router();
const Project = require('./models/project')

router.get('/',(req, res)=>{
    Project.findAll(row=>{
        res.render('project', {data:row})
    })    
})

router.post('/', (req, res)=>{
    Project.findById()
    .then(row=>{
        res.send(row)
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/delete/:id', (req, res)=>{
    Project.destroy()
    .then(()=>{
        res.redirect('/project')
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router
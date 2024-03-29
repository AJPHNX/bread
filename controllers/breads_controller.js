// const {title} = require('chart.js')
const express = require('express')
const bread = require('../models/bread')
const breads = express.Router()


// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
        {
            breads: bread,
            title: 'Index Page'
        })
  // res.send(bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
  })
  
module.exports = breads

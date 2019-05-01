'use strict';
const express = require('express');
const router = express.Router();
const Meme = require('../models/meme')
const memeRouter = require('./meme')

router.use('/meme', memeRouter);

/* GET home page. */
router.get('/', (req, res, next) =>{
  Meme.find({})
    .then((memes) =>  res.render('index', { title: 'Express', memes }))
    .catch((err) => console.log(err))

});

module.exports = router;

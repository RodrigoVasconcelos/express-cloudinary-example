'use strict';
const express = require('express');
const router = express.Router();

const Meme = require('../models/meme');
const parser = require('../config/cloudinary');

/* GET home page. */
router.post('/', parser.single('photo'), (req, res, next) =>{
  const { title, description } = req.body;
  const image_url = req.file.secure_url
  const newMeme = new Meme({
    title, 
    description,
    image_url
  })
  newMeme.save()
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err))
});

module.exports = router;

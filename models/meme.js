const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema({
  title : String,
  description: String,
  image_url: String
})
const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
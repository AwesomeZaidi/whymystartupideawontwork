// models/idea.js

const mongoose = require('mongoose');

const Idea = mongoose.model('Idea', {
    pitch: String
  });


module.exports = Idea;
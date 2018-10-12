// models/idea.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whymystartupideawontwork');
const Schema = mongoose.Schema; 


const Idea = mongoose.model('Idea', {
    pitch: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
  });


module.exports = Idea;
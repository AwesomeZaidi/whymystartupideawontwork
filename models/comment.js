const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/whymystartupideawontwork');


const Comment = mongoose.model('Comment', {
    name: String,
    content: String
    // ideasId: {type: mongoose.Types.ObjectId, ref: 'Idea'}
});

module.exports = Comment;
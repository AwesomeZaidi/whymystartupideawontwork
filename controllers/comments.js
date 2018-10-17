// comments.js
const Idea = require('../models/idea');
const Comment = require('../models/comment');

module.exports = function(app) {
    // CREATE Comment
    app.post('/ideas/:ideaId/comments', (req, res) => {
        const comment = new Comment(req.body);
        comment.save().then(comment => {
            // console.log(comment);
            
            console.log('this is a comment -----> ' + comment )
            console.log('Idea id ----> ', req.params.ideaId)
            return Idea.findById(req.params.ideaId);
            // res.redirect(`/`);

        }).then(idea => {
            console.log("Idea ----> ",idea);
            
            idea.comments.unshift(comment);
            return idea.save();
        }).then(idea => {
            res.redirect(`/ideas/${req.params.ideaId}`);
        }).catch((err) => {

            console.log(err.message);
        })
     });
};
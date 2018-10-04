const Idea = require('../models/idea');

// INDEX
module.exports = function(app, Idea) {
    app.get('/', (req, res) => {
        Idea.find().then(ideas => {
            res.render('ideas-index', { ideas: ideas });
        })
        .catch(err => {
            console.log(err);
        })
      })
    
    // CREATE
    app.post('/ideas', (req, res) => {
      Idea.create(req.body).then((idea) => {
        console.log(idea)
        res.redirect(`/ideas/${idea._id}`) // Redirect to idea/:id
      }).catch((err) => {
        console.log(err.message)
      })
    })
    
      app.get('/ideas/new', (req, res) => {
        res.render('ideas-new', {});
      })
    
    // SHOW
    app.get('/ideas/:id', (req, res) => {
      Idea.findById(req.params.id).then((idea) => {
        res.render('ideas-show', { idea: idea })
      }).catch((err) => {
        console.log(err.message);
      })
    })
}
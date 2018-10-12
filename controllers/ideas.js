const Idea = require('../models/idea');
const Comment = require('../models/comment');
// INDEX
module.exports = function(app) {
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
        res.redirect(`/ideas/${idea._id}`) // Redirect to idea/:id
      }).catch((err) => {
        console.log(err.message)
      })
    })
    // NEW
    app.get('/ideas/new', (req, res) => {
      res.render('ideas-new', {
        
      });
    })
    
    // SHOW
    // app.get('/ideas/:id', (req, res) => {
    //   Idea.findById(req.params.id).then(idea => {
    //     console.log('inside show function ----- > ' + req.params);
    //     // fetch its comments
    //     Comment.find({ reviewId: req.params.id }).then(comments => {
    //       res.render('ideas-show', { idea: idea, comments: comments })
    //     }).catch((err) => {
    //       console.log(err.message);
    //     })
    //   })
    // })
    // at ideas/:id route let's GET request (fetch)
    //  an idea " > 
    app.get('/ideas/:id', (req, res) => {
      console.log("Helllo world 1");
      
      Idea.findById(req.params.id).populate("comments").then(idea => {
        res.render('ideas-show', {idea: idea});
        // console.log(comments);
      })
    })
  }


//       Idea.findById(req.params.id).then(idea => {
//         // console.log(idea);
//         Comment.find({}).then(comments => {
//           // console.log(idea._id);
//           console.log('this is a commenttt ----> ' + comments)
//           res.render('ideas-show', {idea: idea, comments: comments});
//           // console.log(comments);
          
//         }).catch(err => {
//           console.log(err.message)
//         })
//       })
//     })
 
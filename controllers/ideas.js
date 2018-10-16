const Idea = require('../models/idea');
const Comment = require('../models/comment');

module.exports = function(app) {
    // GET INDEX
    app.get('/', (req, res) => {
      Idea.find().then(ideas => {
          res.render('ideas-index', { ideas: ideas });
      })
      .catch(err => {
          console.log(err);
      })
    })
    // NEW IDEA 
    app.get('/ideas/new', (req, res) => {
      res.render('ideas-new')
    })
    // CREATE IDEA
    app.post('/ideas', (req, res) => {
      console.log("posting new idea!");
      Idea.create(req.body).then((idea) => {
        res.redirect(`/ideas/${idea._id}`) // Redirect to idea/:id
      }).catch((err) => {
        console.log(err.message)
      });
    });

    app.get('/ideas/:id', (req, res) => {
      console.log("Helllo world!");
      
      Idea.findById(req.params.id).populate("comments").then(idea => {
        res.render('ideas-show', {idea: idea});
        // console.log(comments);
      })
    })
  }

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
 
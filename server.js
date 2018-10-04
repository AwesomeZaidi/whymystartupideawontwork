// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
const express = require('express')
const app = express()


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whymystartupideawontwork');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const Idea = mongoose.model('Idea', {
  pitch: String
});
  
// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

  // INDEX
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


app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
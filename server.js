const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whymystartupideawontwork', { useMongoClient: true });

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const Idea = mongoose.model('Idea', {
    title: String
  });

// OUR MOCK ARRAY OF PROJECTS
let ideas = [
    { pitch: "LinkedIn for dogs." },
    { pitch: "Uber for plumbers!" }
  ]
  
  // INDEX
  app.get('/', (req, res) => {
        Idea.find().then(ideas => {
            res.render('ideas-index', { ideas: ideas });
        })
        .catch(err => {
            console.log(err);
        })
  })

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
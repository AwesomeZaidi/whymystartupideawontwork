// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const Idea = require('./models/idea');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whymystartupideawontwork');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


const ideas = require('./controllers/ideas')(app, Idea);
// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
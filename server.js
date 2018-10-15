// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const Idea = require('./models/idea');
const commentController = require('./controllers/comments');
const ideaController = require('./controllers/ideas')
const Comment = require('./models/comment')
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/whymystartupideawontwork', {useNewUrlParser: true});

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));
// admin(app);

commentController(app);
ideaController(app);

// const comments = require('./controllers/comments')(app, Comment);
// ideas(app);
// comments(app);
app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000!')
})
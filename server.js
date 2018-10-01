const express = require('express')
const app = express()

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//     res.render('home', { msg: 'Hello World!' });
// })

// OUR MOCK ARRAY OF PROJECTS
let ideas = [
    { pitch: "LinkedIn for dogs." },
    { pitch: "Uber for plumbers!" }
  ]
  
  // INDEX
  app.get('/', (req, res) => {
    res.render('ideas-index', { ideas: ideas });
  })

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})


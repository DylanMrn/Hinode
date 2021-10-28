const express = require('express')
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use('/media', express.static('public'));
app.use(bodyParser.json());

//MODELS
const Users = require('./models/Users');
const Artists = require('./models/Artists.js');

// CONNECT BDD MONGOOSE
mongoose.connect('mongodb://localhost:27017/test',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//HEADERS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
});

//TEST ROUTES
//let apiRoutes = require("./routes")
//app.use('/api', apiRoutes)

//USERS
app.post('/api/newuser', (req, res, next) => {
    //delete req.body._id;
    const users = new Users({
      //...req.body
        name: 'dydy',
        email: 'dydy@toto.fr',
        password: 'ppasxx',
        userId: '1',
        role: '1',
    });
    users.save()
    .then(doc => console.log(doc))
    .catch(err => console.log('ERROR 💥:', err));
      /*.then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));*/
});

app.get('/api/users', (req, res, next) => {
  Users.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
});

//LISTEN 
app.listen(port, function() {
  console.log(`Listening on port ${port}!`)
});
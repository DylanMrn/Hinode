const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

const Users = require('./models/Users');

/*var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
  if (err) {
    throw err;
  }
});*/

mongoose.connect('mongodb://localhost:27017/simple',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//HEADERS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/', (req, res, next) => {
    
});

const users = new Users({
    name: 'Tituouant',
        pseudo: 'Titi',
        password: 'password',
        userId: '1',
        role: '1',
});
users.save()
.then(doc => console.log(doc))
.catch(err => console.log('ERROR 💥:', err));


/*app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const users = new Users({
      //...req.body
        name: 'Tituouant',
        pseudo: 'Titi',
        password: 'password',
        userId: '1',
        role: '1',
    });
    users.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
});*/

app.use('/api/stuff', (req, res, next) => {
    Users.find()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
  });
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/moviesgo');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

// initialize routes
app.use('/api',require('./api.js'));

//error handling middleware (own code)
app.use(function(err, req, res, next){
   // console.log(err);
   res.status(422).send({error: err.message});
})

//listen for requests
app.listen(4000, function(){
    console.log('now listening for requests');
})


const express = require('express');
const router = express.Router();
const movies = require('./movies');

// get a list of movies from the database
router.get('/movies', function (req, res, next) {
    movies.find({}).then(function(movies){
        res.send(movies);
    })
});

// add a new movie to the db
router.post('/movies', function (req, res, next) {
    movies.create(req.body).then(function (movies) {
        res.send(movies);
    }).catch(next)

});

// update a movie in the db 
router.put('/movies/:id', function (req, res, next) {
    movies.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        movies.findOne({ _id: req.params.id }).then(function (movies) {
            res.send(movies);
        })
    })
});

// delete a movie from the db
router.delete('/movies/:id', function (req, res, next) {
    movies.findByIdAndRemove({ _id: req.params.id }).then(function (movies) {
        res.send(movies);
    })
});

module.exports = router;


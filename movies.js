const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create movies Schema & model
const MoviesSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title field is required']
    },
    director:{
        type: String,
    },
    genre:{
        type: [String],
    },
    date:{
        type: Number,
    }
});

const Movies = mongoose.model('movie', MoviesSchema);

module.exports = Movies;
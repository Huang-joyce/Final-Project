let mongoose = require('mongoose');

let dataSchema = mongoose.Schema({
    object: {
        type: String
    },
    Single: {
        type: Array
    },
    Multiple: {
        type: Array
    },
    Optional: {
        type: Array
    }
});

let objects = module.exports = mongoose.model('objects', dataSchema)
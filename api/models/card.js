const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    id: Number,
    library: String,
    recto_def:String,
    verso_def:String,
    recto: String,
    verso: String,
    position: Boolean,
});

module.exports = mongoose.model('Card', cardSchema);
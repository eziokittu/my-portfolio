const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectTypeSchema = new Schema({
    type: {type: String, required: true }
});

module.exports = mongoose.model('ProjectTypes', projectTypeSchema);
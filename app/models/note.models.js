var mongoose = require('mongoose');
    NoteSchema = mongoose.Schema({
        title: String,
        content: String
    }, {
        timestamps: true
    });

module.exports = mongoose.model('Note', NoteSchema);
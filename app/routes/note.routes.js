module.exports = function(app) {
    var notes = require('../controllers/note.controller.js');
    //crear nueva nota
    app.post('/notes', notes.create);

    //Muestra todas las notas
    app.get('/notes/:noteId', notes.findOne);

    //actualizarr una note con el ID
    app.put('/notes/:noteId', notes.update);

    //borrar una nota
    app.delete('/notes/:noteId', notes.delete);
}


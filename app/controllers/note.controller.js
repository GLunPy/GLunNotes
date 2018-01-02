var Note = require('../models/note.models.js');

exports.create = function(req,res){
    //crea y guarda una nueva nota
    if(!req.body.content) {
        res.status(400).send({message: 'La nota no puede estar vacia'});
    }

    var note = new Note({title: req.body.title  || 'Nota sin titulo', content: req.body.content});

    note.save(function(err,data){
        console.log(data);
        if(err){
            console.log(err);
            res.status(500).send({message: 'Ocurrio algun error mientras se creaba la nota'});
        } else {
            res.send(data);
        }
    })
};

exports.findAll = function(req,res){
    //busca y muestra todas las notas de la base de datos
    Note.find(function(err,notes){
        if(err) {
            res.status(500).send({message: 'Ocurrio algun error mientras se creaba la nota'});
        } else {
            res.send(notes);
        }
    })

};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Note.findById(req.params.noteId, function(err,data){
        if(err){
            res.status(500).send({message: 'No se pudo encontrar la nota con id ' + req.params.noteId});
        } else {
            res.send(data);
        }
    })

};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Note.findById(req.params.noteId, function(err,data){
        if(err){
            res.status(500).send({message: 'No se pudo encontrar la nota con id ' + req.params.noteId});
        }

        note.title = req.body.title;
        note.content = req.body.content;

        note.save(function (err,data){
            if(err) {
                res.status(500).send({message: 'No se pudo encontrar la nota con id ' + req.params.noteId});
            } else {
                res.send(data);
            }
        })
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Note.remove({_id: req.params.noteId}, function(err,data){
        if(err) {
            res.status(500).send({message: 'No se pudo encontrar la nota con id ' + req.params.noteId});
        } else {
            res.send({message: 'Nota borrada'});
        }
    })

};
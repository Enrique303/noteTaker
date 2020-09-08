const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = function(app){
  app.get('/api/notes', function(req, res){
    return res.json(notes)
  });
  app.post('/api/notes', function(req,res){
    const newNote = req.body;
    notes.push(newNote)
  })
}
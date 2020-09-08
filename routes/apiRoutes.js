const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = function(app){
  app.get('/api/notes', function(req, res){
    return res.json(notes)
  });
  app.post('/api/notes', function(req,res){
    const newNote = req.body;
    notes.push(newNote);
    writeFile(notes)
    res.json(newNote);
  });
  app.delete('/api/notes/:id', function(req,res){
    fs.readFile(notes, function(){
      const deleteNote = req.param.id;
      if(notes.id === deleteNote){
        notes.splice()
      }
    })
  })
  function writeFile(){
    fs.writeFileSync('db/db.json', JSON.stringify(notes))
  }
}
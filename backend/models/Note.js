const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String
})

const Note = mongoose.model('notes', NoteSchema);
module.exports = Note;
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String
})

const Note = mongoose.model('notes', NoteSchema);
module.exports = Note;
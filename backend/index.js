require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const NoteModel = require('./models/Note');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.get('/notes', async (req, res) => {
  NoteModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
})

app.post('/notes', async (req, res) => {
  const newNote = {
    title: req.body.title,
    content: req.body.content
  };
  const note = new NoteModel(newNote);
  
  try {
    await note.save();
    res.send("Data inserted!");
  } catch(err) {
    console.log(err);
  }
})

app.listen(3001, () => {
  console.log("Server running on port 3001.");
})
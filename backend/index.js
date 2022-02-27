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
  }).limit(18);
})

app.post('/notes', async (req, res) => {
  const newNote = {
    id: req.body.id,
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

app.patch('/update', (req, res) => {
  const newNote = {
    id: req.body.id,
    title: req.body.title,
    content: req.body.content
  };

  NoteModel.findOneAndUpdate({ id: req.body.id }, newNote, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Update successful");
    }
  }) 
})

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  NoteModel.findOneAndDelete({ id: id }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Document successfully deleted.");
    }
  });
})

app.listen(process.env.PORT || 3001, () => {
  console.log("Server running on port 3001.");
})
import React, { useEffect, useState } from 'react';
import Note from './Note.js';
import AddNote from './AddNote.js';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  function addNote(title, content) {
    const newNote = {
      title: title,
      content: content
    }
    Axios.post('http://localhost:3001/notes', newNote)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <AddNote onAddNote={addNote} />
      <div className='notes__container'>
        {notes.map(note => {
          console.log(notes);
          return <Note key={uuidv4()} title={note.title} content={note.content} />
        })}
      </div>
    </div>
  );
}

export default App;

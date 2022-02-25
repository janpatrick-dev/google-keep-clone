import React, { useState } from 'react';
import Note from './Note.js';
import AddNote from './AddNote.js';

function App() {

  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(title, content) {
    setNotes(prevNotes => {
      const newNote = {
        title: title,
        content: content
      }
      return [...prevNotes, newNote];
    })
  }

  return (
    <div>
      <AddNote onAddNote={addNote} />
      <div className='notes__container'>
        {notes.map(note => {
          return <Note title={note.title} content={note.content} />
        })}
      </div>
    </div>
  );
}

export default App;

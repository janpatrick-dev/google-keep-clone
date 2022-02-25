import React, { useEffect, useState } from 'react';
import Note from './Note.js';
import AddNote from './AddNote.js';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'notes';

function App() {

  const [notes, setNotes] = useState([]);

  // SAVE TO LOCAL START
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedNotes) setNotes(storedNotes);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
  }, [notes])
  // SAVE TO LOCAL END

  function addNote(title, content) {
    setNotes(prevNotes => {
      const newNote = {
        id: uuidv4(),
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
          console.log(notes);
          return <Note title={note.title} content={note.content} />
        })}
      </div>
    </div>
  );
}

export default App;

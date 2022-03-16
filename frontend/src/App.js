import React, { useEffect, useState } from 'react';
import Note from './Note.js';
import AddNote from './AddNote.js';
import EditNote from './EditNote.js';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  // Spinner
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 5rem;
  `;

  useEffect(() => {
    Axios.get('https://keep-mern.herokuapp.com/notes')
      .then(response => {
        setLoading(false);
        setNotes(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  function addNote(title, content) {
    const newNote = {
      id: uuidv4(),
      title: title,
      content: content
    }
    Axios.post('https://keep-mern.herokuapp.com/notes', newNote)
      .then(response => {
        // console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function updateNote(id, title, content) {
    const newNote = {
      id: id,
      title: title,
      content: content
    }
    Axios.patch('https://keep-mern.herokuapp.com/update', newNote)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })

    setNotes(prevNotes => {
      const index = prevNotes.findIndex((note => note.id === newNote.id));
      prevNotes[index] = newNote;
      return [...prevNotes];
    })
  }

  function deleteNote(id) {
    Axios.delete(`https://keep-mern.herokuapp.com/delete/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })

    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
  }

  function handleCloseClick() {
    setEditMode(false);
  }

  function handleEditClick(note) {
    setEditMode(true);
    setNoteToEdit(note);
  }

  return (
    <div>
      <EditNote showPopup={editMode} note={noteToEdit} onCloseClick={handleCloseClick} onDelete={deleteNote} onSave={updateNote}/>
      <AddNote onAddNote={addNote} />
      <ClipLoader color={color} loading={loading} size={100} css={override} />
      <div className='notes__container'>
        {notes.map(note => {
          return <Note key={uuidv4()} title={note.title} content={note.content} onEditClick={handleEditClick} note={note} />
        })}
      </div>
    </div>
  );
}

export default App;

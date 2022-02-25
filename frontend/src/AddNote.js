import React from 'react';

function AddNote(props) {
  return (
    <div className="note__add-box">
      <input type='text' name='title' placeholder='Title' className="note__title-input" />
      <textarea placeholder='Note' className="note__content-textarea" />
    </div>
  );
}

export default AddNote;
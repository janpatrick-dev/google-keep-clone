import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function AddNote(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleTitleChange(e) {
    const title = e.target.value;
    setTitle(title);
  }

  function handleContentChange(e) {
    const content = e.target.value;
    setContent(content);
  }

  function handleAddClick(e) {
    props.onAddNote(title, content);
    setTitle('');
    setContent('');
  }

  return (
    <>
    <div className="add-note__container">
      <div className="add-note__input-container">
        <input type='text' name='title' placeholder='Title' value={title} onChange={handleTitleChange} className="add-note__title-input" />
        <textarea placeholder='Take a note...' value={content} onChange={handleContentChange} className="add-note__content-textarea" />
      </div>
      <div>
        <button className="add-note__btn" onClick={handleAddClick}>
          <AddIcon />
        </button>
      </div>
    </div>
    </>
  );
}

export default AddNote;
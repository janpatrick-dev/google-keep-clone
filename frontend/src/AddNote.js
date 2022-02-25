import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function AddNote(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);

  function handleTitleChange(e) {
    const title = e.target.value;
    setTitle(title);
  }

  function handleContentChange(e) {
    const content = e.target.value;
    setContent(content);
  }

  function handleTextAreaClick(e) {
    setVisible(true);
  }

  function handleAddClick(e) {
    props.onAddNote(title, content);
    setTitle('');
    setContent('');
    setVisible(false);
  }

  function handleOverlayClick(e) {
    setVisible(false);
  }

  return (
    <>
    { visible ? <div className="add-note__overlay" onClick={handleOverlayClick}></div> : null }
    <div className="add-note__container">
      <div className="add-note__input-container">
        { visible ?  <input type='text' name='title' placeholder='Title' value={title} onChange={handleTitleChange} className="add-note__title-input" /> : null }
        <textarea placeholder='Take a note...' value={content} onChange={handleContentChange} onClick={handleTextAreaClick} className="add-note__content-textarea" />
      </div>
      <div>
        <button className="add-note__btn" onClick={handleAddClick} aria-label="Add Note">
          <AddIcon />
        </button>
      </div>
    </div>
    </>
  );
}

export default AddNote;
import React, {useEffect, useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function EditNote(props) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (props.note) {
      setTitle(props.note.title);
      setContent(props.note.content);
    }
  }, [props.note]);

  function handleDelete() {
    props.onCloseClick();
    props.onDelete(props.note.id);
  }

  function handleSave() {
    props.onCloseClick();

    // Check first if there's changes to avoid api call with no updates.
    const hasChanges = title !== props.note.title || content !== props.note.content;
    if (hasChanges) props.onSave(props.note.id, title, content, hasChanges);
  }

  function handleTextChange(e) {
    const { name, value } = e.target;
    
    if (name === "title") setTitle(value);
    else if (name === "content") setContent(value);
  }
  
  return props.showPopup ? (
    <div className="edit-note">
      <div className="edit-note__bg-overlay" onClick={handleSave}></div>
      <div className="edit-note__input">
        <input 
          maxLength="1000"
          type="text" 
          name="title" 
          placeholder="Title" 
          value={title} 
          className="edit-note__title" 
          onChange={handleTextChange} />
        <textarea 
          maxLength="20000"
          name="content" 
          value={content} 
          placeholder="Take a note..." 
          rows="20" 
          className="edit-note__content"
          onChange={handleTextChange} />
        <div className="edit-note__bottom-area">
          <button className="edit-note__delete-btn" aria-label="Update" onClick={handleDelete}>
            <DeleteForeverIcon />
          </button>
          <button className="edit-note__save-btn" aria-label="Update" onClick={handleSave}>
            <CheckIcon />
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default EditNote;
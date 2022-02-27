import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';

function Note(props) {

  function handleEditClick() {
    props.onEditClick(props.note);
  }

  return props.title || props.content ? (
    <div className="card" onClick={handleEditClick}>
      { props.title ? <h1 className="card__title">{props.title}</h1> : null }
      <button className="card__edit-btn" aria-label="Edit Note" onClick={handleEditClick}>
        <EditIcon />
      </button>
      <span>
        <pre className="card__content">
          {props.content}
        </pre>
      </span>
    </div>
  ) : (
    <div className="card" onClick={handleEditClick}>
      <h1 className="card__empty">Empty note</h1>
      <button className="card__edit-btn" aria-label="Edit Note" onClick={handleEditClick}>
        <EditIcon />
      </button>
    </div>
  )
}

export default Note;
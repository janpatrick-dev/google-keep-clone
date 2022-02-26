import React from 'react';

function Note(props) {
  return (
    <div className="card__container">
      { props.title ? <h1 className="card__title">{props.title}</h1> : null }
      <span>
        <pre className="card__content">
          {props.content}
        </pre>
      </span>
    </div>
  );
}

export default Note;
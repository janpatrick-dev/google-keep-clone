import React from 'react';

function Note(props) {
  return (
    <div className="card__container">
      { props.title ? <h1 className="card__title">{props.title}</h1> : null }
      <p>
        <pre className="card__content">
          {props.content}
        </pre>
      </p>
    </div>
  );
}

export default Note;
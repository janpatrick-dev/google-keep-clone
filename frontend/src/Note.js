import React from 'react';

function Note(props) {
  return (
    <div>
      {props.title}
      {props.content}
    </div>
  );
}

export default Note;
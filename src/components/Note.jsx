import React from "react";

function Note(props) {
  function doClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={doClick}>DELETE</button>
    </div>
  );
}

export default Note;

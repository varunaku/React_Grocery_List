import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="typed">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>x</button>
    </div>
  );
}

export default Note;

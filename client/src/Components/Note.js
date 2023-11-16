import React from "react";
import "./Note.css";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ title, content, date}) {
  function handleDelete(e) {
    e.stopPropagation();
  }

  return (
    <section className="note">
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
      <date className="date">{new Date(date).toLocaleDateString()}</date>
      <span className="icon">
        <DeleteIcon onClick={(e) => handleDelete(e)} />
      </span>
    </section>
  );
}

export default Note;

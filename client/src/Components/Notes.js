import "./Notes.css";
import Note from "./Note";

function Notes({ notes , onDeleteNote }) {
  return (
    <section className="notes">
      {notes.map((note) => (
        <Note key={note.id} {...note} onDelete={() => onDeleteNote(note._id)}/>
      ))}
    </section>
  );
}

export default Notes;

import React, { useEffect, useState } from "react";
import "./Main.css";
import AddNotesField from "./AddNotesField";
import Notes from "./Notes";

function Main() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/notes");
      if (response.ok) {
        const data = await response.json();
        setNotes(data);
      } else {
        console.error("Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${noteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Note deleted successfully");
        fetchData();
      } else {
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateNote = async (noteId, updatedNote) => {
    try {
      const response = await fetch(`http://localhost:3000/notes/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedNote.title,
          content: updatedNote.content,
        }),
      });

      if (response.ok) {
        console.log("Note updated successfully");
        fetchData();
      } else {
        console.error("Failed to update note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="main">
      <AddNotesField onAddNote={() => fetchData()} />
      <Notes
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onUpdateNote={handleUpdateNote}
      />
    </main>
  );
}

export default Main;

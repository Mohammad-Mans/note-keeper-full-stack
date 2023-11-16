import React, {useState} from "react";
import "./Note.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialog from "./ConfirmationDialog";


function Note({ title, content, date , onDelete}) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  function handleDelete(e) {
    e.stopPropagation();
    setDialogOpen(true);
  }

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    setDialogOpen(false);
    onDelete();
  };

  return (
    <section className="note">
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
      <date className="date">{new Date(date).toLocaleDateString()}</date>
      <span className="icon">
        <DeleteIcon onClick={(e) => handleDelete(e)} />
      </span>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
      />
    </section>
  );
}

export default Note;

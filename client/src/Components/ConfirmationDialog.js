import React from "react";
import "./ConfirmationDialog.css";

function ConfirmationDialog({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`confirmation-overlay ${isOpen ? "open" : ""}`}>
      <div className="confirmation-dialog">
        <h2>Note Deletion</h2>
        <p>Are you certain you wish to delete this note?</p>
        <div className="buttons">
          <button onClick={onClose}>Close</button>
          <button className="delete" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDialog;

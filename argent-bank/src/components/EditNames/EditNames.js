import React, { useState } from "react";
import './EditNames.css';

function EditNames({ firstName, lastName, onSave, onCancel }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  function handleSubmit(e) {
    e.preventDefault();
    onSave(newFirstName, newLastName);
    setIsEditing(false);
  }

  function handleCancel() {
    onCancel();
    setIsEditing(false);
  }

  return isEditing ? (
    <>
      <form onSubmit={handleSubmit} id="form-update-name">
        <div className="input-container">
          <input
            type="text"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
          <input
            type="text"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </>
  ) : (
    <>
      <span>
        {firstName} {lastName} <br/>
      </span>
      <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Name</button>
    </>
  );
}

export default EditNames;

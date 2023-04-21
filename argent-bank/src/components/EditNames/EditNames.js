import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
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

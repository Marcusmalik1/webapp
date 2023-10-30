

import React, { useState } from "react";

export default function AddFriendModal({ isOpen, onClose, onAddFriend }) {
  const [friendName, setFriendName] = useState("");

  const handleAddFriend = () => {
    if (friendName.trim() !== "") {
      onAddFriend(friendName);
      setFriendName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Tilføj Ven</h2>
        <input
          type="text"
          placeholder="Navn på ven"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={onClose}>Annuller</button>
          <button onClick={handleAddFriend}>Tilføj</button>
        </div>
      </div>
    </div>
  );
}

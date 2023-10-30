


import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../assets/Maleuser.png";
import logoside from "../assets/moviemagmeyside.png";
import GhostIcon from "../components/GhostIcon";
import HeartIcon from "../components/HeartIcon";
import ComedyIcon from "../components/ComedyIcon";
import friend from "../assets/Femaleprofile.png";
import MoviesHistory from "../components/MoviesHistory";

export default function ProfilePage() {
  const [isAddFriendModalOpen, setAddFriendModalOpen] = useState(false);
  const [friends, setFriends] = useState([]);
  const [friendName, setFriendName] = useState("");

  const handleAddFriend = () => {
    if (friendName.trim() !== "") {
      setFriends([...friends, friendName]);
      setFriendName(""); // Clear the input field
      setAddFriendModalOpen(false); // Close the modal
    }
  };

  return (
    <section>
      <Link to="/front">
        <span className="back-arrow">&#8594;</span>
      </Link>
      <div className="user-container">
        <img src={user} alt="Billede af bruger" className="user-profile" />
      </div>
      <h1 className="john-text">John</h1>
      <h2 className="titel-text">Casual Watcher</h2>

      <img src={logoside} alt="Billede af logo" className="logo-side" />

      <h3 className="icons-text">Mine Film Magnets</h3>

      <div className="profile-icons">
        <GhostIcon />
        <HeartIcon />
        <ComedyIcon />
      </div>

      <div className="button-magnet-container">
        <Link to="/magnet" className="button-magnet">
          Opnå Magnets
        </Link>
      </div>

      <h3 className="my-friends-text">Mine Venner</h3>
      <div className="friends">
        {friends.map((friend, index) => (
          <div className="brian-friend" key={index}>
            <img src={user} alt="Billede af bruger" className="friend" />
            <p>{friend}</p>
          </div>
        ))}
      </div>
      <div className="button-friends-container">
        <button
          className="button-magnet"
          onClick={() => setAddFriendModalOpen(true)}
        >
          Tilføj Ven
        </button>
      </div>

      <h3 className="movie-history-text">Filmhistorik</h3>
      <MoviesHistory />

      {/* Modal for adding friends */}
      {isAddFriendModalOpen && (
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
              <button onClick={() => setAddFriendModalOpen(false)}>Annuller</button>
              <button onClick={handleAddFriend}>Tilføj</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

const Profile = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="profile-container">
      <div className="profile-logo" onClick={toggleDropdown}>
        {username.charAt(0).toUpperCase()}
      </div>
      {isOpen && (
        <div className="profile-dropdown">
          <p>{username}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

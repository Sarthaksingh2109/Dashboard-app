import "./styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <p>Manage your personal details and preferences.</p>
      <div className="profile-container">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="profile-details">
          <div className="profile-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="profile-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="john.doe@example.com" />
          </div>
          <div className="profile-field">
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" placeholder="Tell us about yourself..." />
          </div>
          <button className="save-button">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
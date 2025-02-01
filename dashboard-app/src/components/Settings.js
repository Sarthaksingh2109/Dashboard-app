import "./styles/Setting.css";

const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <p>Customize your dashboard experience.</p>
      <div className="settings-options">
        <div className="setting-option">
          <h2>Theme</h2>
          <p>Select your preferred theme:</p>
          <select>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div className="setting-option">
          <h2>Notifications</h2>
          <p>Manage your notification preferences:</p>
          <label>
            <input type="checkbox" /> Email Notifications
          </label>
          <label>
            <input type="checkbox" /> SMS Notifications
          </label>
        </div>
        <div className="setting-option">
          <h2>Privacy</h2>
          <p>Control your privacy settings:</p>
          <label>
            <input type="checkbox" /> Make my profile private
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
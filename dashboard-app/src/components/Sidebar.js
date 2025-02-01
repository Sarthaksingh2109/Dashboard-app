import { Link } from "react-router-dom";
import "./styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/analytics">📊 Analytics</Link></li>
        <li><Link to="/settings">⚙️ Settings</Link></li>
        <li><Link to="/profile">👤 Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

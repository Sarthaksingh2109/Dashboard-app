import "./styles/Home.css";

const Home = () => {
  const stats = [
    { title: "Total Users", value: "1,250", icon: "👥" },
    { title: "Total Sales", value: "$15,000", icon: "💰" },
    { title: "New Signups", value: "300", icon: "📝" },
    { title: "Feedback Ratings", value: "4.8/5", icon: "⭐" },
  ];

  return (
    <div className="home">
      <h1>Welcome to the Dashboard</h1>
      <p>Manage your data efficiently and get insights instantly.</p>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h2 className="stat-title">{stat.title}</h2>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
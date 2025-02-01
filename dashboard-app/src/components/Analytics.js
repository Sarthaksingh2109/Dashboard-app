import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./styles/Analytics.css";

const data = [
  { name: "Jan", uv: 400, pv: 2400 },
  { name: "Feb", uv: 300, pv: 2210 },
  { name: "Mar", uv: 500, pv: 2290 },
  { name: "Apr", uv: 200, pv: 2000 },
];

const additionalData = [
  { name: "Total Visitors", value: "1,500", icon: "👥" },
  { name: "Conversion Rate", value: "5.5%", icon: "📈" },
  { name: "Bounce Rate", value: "30%", icon: "🚪" },
  { name: "Avg. Session Duration", value: "3m 45s", icon: "⏱️" },
];

const Analytics = () => {
  return (
    <div className="analytics">
      <h1>Analytics</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#4CAF50" />
          <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className="stats-container">
        {additionalData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h2 className="stat-title">{stat.name}</h2>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
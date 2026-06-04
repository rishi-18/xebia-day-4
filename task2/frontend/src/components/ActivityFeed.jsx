const ActivityFeed = () => {
  const activities = [
    "User logged in",
    "Profile loaded",
    "Dashboard accessed",
    "Authentication verified"
  ];

  return (
    <div className="glass activity-card">
      <h3>Recent Activity</h3>

      <ul>
        {activities.map(
          (activity, index) => (
            <li key={index}>
              {activity}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ActivityFeed;
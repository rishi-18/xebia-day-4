import { useEffect, useState } from "react";
import { FaUser, FaUsers, FaChartLine } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

import api from "../api/axios";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ActivityFeed from "../components/ActivityFeed";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token =
          localStorage.getItem("token");

        const res = await api.get(
          "/auth/profile",
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12)
      return "Good Morning";

    if (hour < 18)
      return "Good Afternoon";

    return "Good Evening";
  };

  const today = new Date()
    .toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="hero glass">

          <img
            className="avatar"
            src={`https://ui-avatars.com/api/?name=${
              user?.name || "User"
            }&background=random`}
            alt="avatar"
          />

          <div>
            <h1>
              {getGreeting()},
              {" "}
              {user?.name}
            </h1>

            <p>{today}</p>

            <p>
              Welcome to your
              authentication dashboard
            </p>
          </div>

        </div>

        <div className="stats-grid">

          <StatCard
            title="Users"
            value="124"
            icon={<FaUsers />}
          />

          <StatCard
            title="Analytics"
            value="89%"
            icon={<FaChartLine />}
          />

          <StatCard
            title="Profile"
            value="100%"
            icon={<MdVerifiedUser />}
          />

          <StatCard
            title="Account"
            value="Active"
            icon={<FaUser />}
          />

        </div>

        <div className="dashboard-grid">

          <div className="glass profile-card">

            <h2>Profile Information</h2>

            <div className="profile-row">
              <strong>Name:</strong>
              <span>
                {user?.name}
              </span>
            </div>

            <div className="profile-row">
              <strong>Email:</strong>
              <span>
                {user?.email}
              </span>
            </div>

            <div className="profile-row">
              <strong>Status:</strong>
              <span>
                Active
              </span>
            </div>

          </div>

          <ActivityFeed />

        </div>

      </div>
    </>
  );
};

export default Dashboard;
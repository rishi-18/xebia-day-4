import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] =
    useState({
      email: "",
      password: ""
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res =
        await api.post(
          "/auth/login",
          form
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data
          ?.message ||
        "Login Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <motion.form
        className="glass auth-card"
        onSubmit={handleSubmit}
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
      >

        <h1>Welcome Back</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {
            loading
            ? "Logging in..."
            : "Login"
          }
        </button>

        <p>
          Don't have an account?
          {" "}
          <Link to="/">
            Register
          </Link>
        </p>

      </motion.form>

    </div>
  );
};

export default Login;
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar glass">
      <h2>Auth Dashboard</h2>

      <button
        className="logout-btn"
        onClick={logout}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
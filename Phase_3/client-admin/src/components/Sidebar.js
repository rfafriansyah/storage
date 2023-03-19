import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="w-1/6 bg-sky-900 min-h-screen">
      <ul>
        <li className="text-white mb-3 mt-3">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="text-white mb-3 mt-3">
          <Link to="/categories">Categories</Link>
        </li>
        <li className="text-white mb-3 mt-3">
          <Link to="/register">Register Admin</Link>
        </li>
        <li className="text-white mb-3 mt-3" onClick={logout}>
          <button>Sign Out</button>
        </li>
      </ul>
    </div>
  );
}

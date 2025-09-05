import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function HeaderComponent({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false); // ✅ update state immediately
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand fw-bold fs-6">
            Employee Management
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/employees">
                  Employees
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-1 px-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;

import "../styles/landingpage.css";
import logo from "../assets/20250914_185850 1.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  const [userType] = useState<string | null>(() => localStorage.getItem("userType"));

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Innovest Logo" /> Innovest
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        
          <ul className="navbar-nav me-3">
            {userType === null && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
            {(userType === "startup" || userType === "investor" || userType === "admin") && (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            )}

            {(userType === "investor" || userType === "admin") && (
              <li className="nav-item">
                <Link className="nav-link" to="/discover">
                  Discover
                </Link>
              </li>
            )}

            {(userType === "admin" || userType === "investor") && (
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
            )}

            {(userType === "startup" || userType === "admin") && (
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            )}

            {userType === "startup" && (
              <li className="nav-item">
                <Link className="nav-link" to="/startupProfile">
                  Startup Profile
                </Link>
              </li>
            )}

            {userType === "investor" && (
              <li className="nav-item">
                <Link className="nav-link" to="/investorDashboard">
                  Investor Dashboard
                </Link>
              </li>
            )}

            
            {userType=='admin'&&(
              <li className="nav-item">
                <Link className="nav-link" to="/adminDashboard">
                  Admin Dashboard
                  </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

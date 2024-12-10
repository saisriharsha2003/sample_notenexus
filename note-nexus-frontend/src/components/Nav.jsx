import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import user from "../assets/user.svg";
import edit from "../assets/edit.png";
import logout from "../assets/logout.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";

const Nav = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem("name");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    toast.success("Logging off...", {
      position: "top-right",
      autoClose: 1500,
    });
    localStorage.removeItem("name");
    navigate("/");
  };

  const toggleMenu = () => {
    try {
      const subm = document.getElementById("subMenu");
      if (subm) {
        subm.classList.toggle("open-menu");
      } else {
        console.error("subMenu element not found.");
      }
    } catch (error) {
      console.error("Error toggling menu:", error);
    }
  };

  return (
    <div className="hero">
      <nav>
        <Link to="/home">
          <img className="logo" src={logo} alt="App Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/view-notes">View Notes</Link>
          </li>
          <li>
            <Link to="/add-note">Add Note</Link>
          </li>
        </ul>

        <img src={user} className="user-pic" alt="User" onClick={toggleMenu} />

        <div className="sub-menu-wrap" id="subMenu">
          <div className="sub-menu">
            <div className="user-info">
              <img
                src={user}
                alt="User"
                style={{ width: "80px", height: "80px" }}
              />
              <h2 id="cu_name" style={{ color: "#e8779a" }}>
                {userName}
              </h2>
            </div>
            <hr />
            <Link to="/edit-profile" className="sub-menu-link">
              <img
                src={edit}
                alt="Edit Profile"
                style={{ width: "50px", height: "50px" }}
              />
              <p>Edit Profile</p>
              <span className="ext">&gt;</span>
            </Link>
            <Link to="/" className="sub-menu-link" onClick={handleLogout}>
              <img
                src={logout}
                alt="Logout"
                style={{ width: "50px", height: "50px" }}
              />
              <p>Logout</p>
              <span className="ext">&gt;</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

function NavBar() {
  return (
    <nav>
      <h1 className="logo"><a href="/">WeatherWizard</a></h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
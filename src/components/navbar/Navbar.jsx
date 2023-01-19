import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navBar-wrapper">
      <div className="logo">
        <h1>PHISh</h1>
      </div>
      <ul className="navLinks">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#sign up">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

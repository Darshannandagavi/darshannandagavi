import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./GuestNavbar.css";

import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiFillPhone
} from "react-icons/ai";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaBusinessTime } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";


const GuestNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-brand" data-aos="fade-down">
          Darshan Nandagavi
        </NavLink>

        <button
          className={`navbar-toggler ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${open ? "active" : ""}`}>
          <ul className="navbar-nav">

            <li className="nav-item" data-aos="fade-down">
              <NavLink to="/" className="nav-link">
                <AiFillHome className="nav-react-icon" />
                Home
              </NavLink>
            </li>

            <li className="nav-item" data-aos="fade-down">
              <NavLink to="/about" className="nav-link">
                <AiOutlineInfoCircle className="nav-react-icon" />
                About
              </NavLink>
            </li>

            <li className="nav-item" data-aos="fade-down">
              <NavLink to="/education" className="nav-link">
                <PiGraduationCapFill className="nav-react-icon" />
                Education
              </NavLink>
            </li>

            <li className="nav-item" data-aos="fade-down">
              <NavLink to="/projects" className="nav-link">
                <LiaLaptopCodeSolid  className="nav-react-icon" />
                Projects
              </NavLink>
            </li>

            <li className="nav-item" data-aos="fade-down">
              <NavLink to="/experience" className="nav-link">
                <FaBusinessTime className="nav-react-icon" />
                Experience
              </NavLink>
            </li>

            <li className="nav-item" data-aos="fade-down">
              <NavLink to="/contact" className="nav-link">
                <AiFillPhone className="nav-react-icon" />
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default GuestNavbar;

import React from "react";
import "./Navbar.css";
import {
  HiHome,
  HiUser,
  HiAcademicCap,
  HiClipboardList,
  HiChatAlt,
} from "react-icons/hi";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <HiHome className="icon" />
              <span className="navText">Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <HiUser className="icon" />
              <span className="navText">About</span>
            </a>
          </li>
          <li>
            <a href="#experience">
              <HiAcademicCap className="icon" />
              <span className="navText">Experience</span>
            </a>
          </li>
          <li>
            <a href="#works">
              <HiClipboardList className="icon" />
              <span className="navText">Works</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <HiChatAlt className="icon" />
              <span className="navText">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      <footer>
        <div className="copyright">&copy; Koray Uymaz</div>
      </footer>
    </header>
  );
};

export default Navbar;

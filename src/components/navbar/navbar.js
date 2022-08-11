import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div id="navbar">
      <ul>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/monsters">
            <button>Monsters</button>
          </Link>
        </li>
        <li>
          <Link to="/moves">
            <button>Moves</button>
          </Link>
        </li>
        <li>
          <Link to="/battles">
            <button>Battles</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

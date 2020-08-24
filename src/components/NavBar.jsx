import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ children }) {
  return (
    <div>
      <div className="link-container">
        <Link className="home-link" to="/">
          HOME
        </Link>
      </div>

      {children}
    </div>
  );
}

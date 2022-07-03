import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <nav>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contactt</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

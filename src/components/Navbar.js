import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="nav-item" style={{ textDecoration: "none" }} to="/">
            TextUtils
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

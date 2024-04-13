import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <div id="container-notfound">
      <h1>404 - Page not found</h1>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to={"/"}>
        <button>Go to homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;

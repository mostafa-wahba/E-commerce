import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div id="Not-Found"></div>
      <div className="not-found-container">
        <h2>404: Page Not Found</h2>
        <p>We're sorry, but the page you're looking for doesn't exist.</p>
        <Link to="/" className="home-link">
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;

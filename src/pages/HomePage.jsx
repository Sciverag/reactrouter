import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to My App</h1>
      <p className="lead">Join us and explore amazing features!</p>

      <div className="mt-4">
        <Link to="/login" className="btn btn-primary me-3">Log In</Link>
        <Link to="/register" className="btn btn-success">Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 


    const users = JSON.parse(localStorage.getItem("users")) || [];


    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {

      localStorage.setItem("currentUser", JSON.stringify(user));


      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate(`/profile/${user.email}`);
      }
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className="mx-auto p-4 border rounded" style={{ maxWidth: "400px" }}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;

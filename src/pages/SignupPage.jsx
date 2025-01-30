import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { email, password, role } = formData;

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];


    if (users.some((user) => user.email === email)) {
      setError("This email is already registered.");
      return;
    }


    users.push({ email, password, role });
    localStorage.setItem("users", JSON.stringify(users));

 
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mx-auto p-4 border rounded" style={{ maxWidth: "400px" }}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="user">User</option>
            <option value="admin">Administrator</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default SignupPage;
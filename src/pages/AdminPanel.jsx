import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {

    const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));
    

    if (!loggedInUser || loggedInUser.role !== "admin") {
      navigate("/");
      return;
    }

    setCurrentUser(loggedInUser);


    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, [navigate]);


  const changeUserRole = (email) => {
    const updatedUsers = users.map(user =>
      user.email === email ? { ...user, role: user.role === "admin" ? "user" : "admin" } : user
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Panel</h2>
      <p className="text-center">Manage user roles</p>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Change Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.role === "admin" ? "Administrator" : "User"}</td>
              <td>
                {user.email !== currentUser.email && (
                  <button
                    className="btn btn-warning"
                    onClick={() => changeUserRole(user.email)}
                  >
                    Change to {user.role === "admin" ? "User" : "Admin"}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;

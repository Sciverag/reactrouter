import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  const { userId } = useParams(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || currentUser.email !== userId) {
  
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate, userId]);

  if (!user) return null; 

  return (
    <div className="container mt-5">
      <h2 className="text-center">User Profile</h2>
      <div className="card mx-auto p-4 border rounded" style={{ maxWidth: "400px" }}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role === "admin" ? "Administrator" : "User"}</p>
      </div>
    </div>
  );
};

export default ProfilePage;

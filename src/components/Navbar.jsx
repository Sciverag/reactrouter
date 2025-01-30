import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className=" container-fluid row align-items-center p-2">
      <div className=" d-flex justify-content-around align-items-center">
        <Link to="/" className="fw-bold">Home</Link>
        {user ? (
          <>
            <Link to={"/profile/"+user.email} className="fw-bold">Profile</Link>
            {user.role === "admin" && (
              <Link to="/admin" className=" fw-bold">Admin</Link>
            )}
            <button 
              onClick={handleLogout} 
              className="btn btn-outline-danger">
              Log Out
            </button>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
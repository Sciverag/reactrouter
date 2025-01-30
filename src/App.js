import React from 'react'; 
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  Navigate} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';

const setupUsers = () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem(
      "users",
      JSON.stringify([
        { email: "admin@example.com", password: "admin123", role: "admin"},
        { email: "user@example.com", password: "user123", role: "user"},
      ])
    );
  }
};
setupUsers();


function App() {
  return (
    <Router>
      <div className="container-flow mt-5">
        <Navbar />
        <hr/>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage />
            } 
          />
          <Route 
            path="/login" 
            element={
              <LoginPage />
            } 
          />
          <Route 
            path="/register" 
            element={
              <SignupPage />
            } 
          />
          <Route 
            path="/profile/:userId" 
            element={
              <ProfilePage />
            }
          /> 
          <Route 
            path="/admin" 
            element={
              <AdminPanel/>
            } 
          />
        </Routes>        
      </div>
    </Router>
  );
}

export default App;

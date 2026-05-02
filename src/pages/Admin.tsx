import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLoginForm from "../components/AdminLoginForm";
import AdminDashboard from "../components/AdminDashboard";
import styles from "./Admin.module.css";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = (user: string) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <AdminLoginForm onLogin={handleLogin} />;
  }

  return (
    <div className={styles.adminContainer}>
      <AdminDashboard onLogout={() => {
        setIsLoggedIn(false);
        setCurrentUser("");
      }} />
    </div>
  );
}

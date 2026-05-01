import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLoginForm from "../components/AdminLoginForm";
import styles from "./Admin.module.css";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = (user: string) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
  };

  if (!isLoggedIn) {
    return <AdminLoginForm onLogin={handleLogin} />;
  }

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Panel de Administración</h1>
          <div className={styles.userInfo}>
            <span>Usuario: {currentUser}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.dashboard}>
          <h2>Bienvenido al Panel de Administración</h2>
          <p>
            Aquí puedes gestionar los productos, usuarios y otras
            configuraciones del sistema.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>📦 Productos</h3>
              <p>Gestiona el catálogo de productos</p>
              <button>Ir a Productos</button>
            </div>

            <div className={styles.card}>
              <h3>👥 Usuarios</h3>
              <p>Administra los usuarios del sistema</p>
              <button>Ir a Usuarios</button>
            </div>

            <div className={styles.card}>
              <h3>📊 Reportes</h3>
              <p>Visualiza reportes y estadísticas</p>
              <button>Ir a Reportes</button>
            </div>

            <div className={styles.card}>
              <h3>⚙️ Configuración</h3>
              <p>Ajusta los parámetros del sistema</p>
              <button>Ir a Configuración</button>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          ← Volver al sitio principal
        </button>
      </footer>
    </div>
  );
}

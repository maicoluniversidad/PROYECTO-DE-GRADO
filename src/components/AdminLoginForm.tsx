import { useState } from "react";
import styles from "./AdminLoginForm.module.css";

interface AdminLoginFormProps {
  onLogin?: (user: string) => void;
}

export default function AdminLoginForm({ onLogin }: AdminLoginFormProps) {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  const credenciales = {
    admin: "admin123",
    asesor: "asesor123",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!usuario || !contraseña) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (
      credenciales[usuario as keyof typeof credenciales] === contraseña
    ) {
      onLogin?.(usuario);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.headerIcon}>
        <div className={styles.icon}>⚙️</div>
        <h2 className={styles.companyName}>metal mecánica el imperio</h2>
        <p className={styles.companySubtitle}>Panel de Administración</p>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>Iniciar Sesión</h1>

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Usuario</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Contraseña</label>
            <input
              type="password"
              className={styles.input}
              placeholder="Ingresa tu contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" className={styles.submitButton}>
            Acceder
          </button>
        </form>

        <div className={styles.credentials}>
          <p className={styles.credentialsTitle}>Credenciales de prueba:</p>

          <div className={styles.credentialItem}>
            <h3>Administrador</h3>
            <p>Usuario: <span>admin</span></p>
            <p>Contraseña: <span>admin123</span></p>
          </div>

          <div className={styles.credentialItem}>
            <h3>Asesor</h3>
            <p>Usuario: <span>asesor</span></p>
            <p>Contraseña: <span>asesor123</span></p>
          </div>
        </div>

        <a href="/" className={styles.backLink}>
          ← Volver al sitio
        </a>
      </div>
    </div>
  );
}

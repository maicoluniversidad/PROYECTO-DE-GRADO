import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Headercatalogo.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  // Función de navegación forzada
  const navega = (ruta: string) => {
    console.log("Intentando ir a:", ruta);
    navigate(ruta);
  };

  return (
    <header className={[styles.header, className].join(" ")} style={{ zIndex: 999999 }}>
      <div className={styles.container} style={{ pointerEvents: 'auto' }}>
        
        {/* LADO IZQUIERDO: LOGO Y NOMBRE */}
        <div 
          className={styles.link} 
          onClick={() => navega("/")}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', zIndex: 1000000, pointerEvents: 'all' }}
        >
          <img className={styles.containerIcon} alt="Logo" src="/Container11.svg" />
          <div className={styles.container2}>
            <div className={styles.heading1}>
              <h3 className={styles.metalMecnicaEl}>metal mecánica el imperio</h3>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.solucionesB2b}>Soluciones B2B</div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: NAVEGACIÓN */}
        <nav className={styles.navigation} style={{ pointerEvents: 'auto' }}>
          <div 
            className={styles.link2} 
            onClick={() => navega("/")}
            style={{ cursor: 'pointer', zIndex: 1000000, pointerEvents: 'all' }}
          >
            <div className={styles.inicio}>Inicio</div>
          </div>

          <div 
            className={styles.link3} 
            onClick={() => navega("/catalogo")}
            style={{ cursor: 'pointer', zIndex: 1000000, pointerEvents: 'all' }}
          >
            <div className={styles.encontrarPieza}>Encontrar Pieza</div>
          </div>

          <div className={styles.link4} style={{ cursor: 'default' }}>
            <div className={styles.catlogo}>Catálogo</div>
          </div>

          <button className={styles.link5}>
            <div className={styles.acceder}>Acceder</div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
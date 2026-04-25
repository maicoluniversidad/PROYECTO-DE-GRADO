import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Headercatalogoproductos.module.css";

export type HeaderType = {
  className?: string;
};

const Headercatalogoproductos: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkClick = useCallback(() => {
    navigate("/"); 
  }, [navigate]);

  return (
    <section className={[styles.header, className].join(" ")}>
      <div className={styles.container}>
        <Link to="/" className={styles.link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img className={styles.containerIcon} alt="" src="/Containercatalogoproductos1.svg" />
          <div className={styles.container2}>
            <div className={styles.heading1}>
              <h3 className={styles.metalMecnicaEl}>
                metal mecánica el imperio
              </h3>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.solucionesB2b}>Soluciones B2B</div>
            </div>
          </div>
        </Link>

        <nav className={styles.navigation}>
          <Link to="/" className={styles.link2} style={{ textDecoration: 'none' }}>
            <div className={styles.inicio}>Inicio</div>
          </Link>

          {/* LINK ACTUALIZADO */}
          <Link to="/encontrar-pieza" className={styles.link3} style={{ textDecoration: 'none' }}>
            <div className={styles.encontrarPieza}>Encontrar Pieza</div>
          </Link>

          {/* LINK ACTUALIZADO A RUTA ANIDADA */}
          <Link to="/encontrar-pieza/catalogo" className={styles.link4} style={{ textDecoration: 'none' }}>
            <div className={styles.catlogo}>Catálogo</div>
          </Link>

          <button className={styles.link5} onClick={onLinkClick}>
            <div className={styles.acceder}>Acceder</div>
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Headercatalogoproductos;
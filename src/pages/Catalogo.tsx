import { FunctionComponent } from "react";
import ContainerCatalogo from "../components/Containercatalogo"; 
import FooterCatalogo from "../components/Footercatalogo";
import HeaderCatalogo from "../components/Headercatalogoproductos";
import styles from "./catalogo.module.css";

const Catalogo: FunctionComponent = () => {
  return (
    <div className={styles.decor}>
      <main className={styles.body}>
        <section className={styles.mainContent}>
          {/* Aquí va el contenido real de tus piezas */}
          <ContainerCatalogo /> 
        </section>
        <FooterCatalogo />
      </main>
      <HeaderCatalogo />
    </div>
  );
};

export default Catalogo;
import { FunctionComponent } from "react";
import Container from "../components/ContainerEncontrarpieza";
import Footer from "../components/FooterEncontrarpieza";
import Header from "../components/HeaderEncontrarpieza";
import styles from "./Encontrarpieza.module.css";

const Encontrarpieza: FunctionComponent = () => {
  return (
    <div className={styles.Encontrarpieza}>
      <Header />
      <main className={styles.body}>
        <section className={styles.mainContent}>
          <Container />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Encontrarpieza;

import { FunctionComponent, useState, useCallback } from "react";
import Link from "../components/Linkcatalogoproductos";
import Link1 from "../components/Linkcatalogoproductos1";
import Footer from "../components/Footercatalogoproductos";
import Header from "../components/Headercatalogoproductos";
import styles from "./catalogoproductos.module.css";

const catalogoproductos: FunctionComponent = () => {
  const [linkItems] = useState([
    {
      linkWidth: undefined,
      container: "/Container7@2x.png",
      containerPadding: "24px 23px 24px 24px" as const,
      textWidth: "42.4px" as const,
      bIS001: "BIS-001",
      textPadding: "4px 1px 4px 8px" as const,
      textWidth1: "72.5px" as const,
      textBackgroundColor: "#dcfce7" as const,
      stock245: "Stock: 245",
      stock245Color: "#16a34a" as const,
      bisagraInoxidableFijaPremium: "Bisagra Inoxidable Fija Premium",
      bisagraInoxidableFijaWidth: "279px" as const,
      paragraphPadding: undefined,
      bisagraDeAceroInoxidableCon:
        "Bisagra de acero inoxidable 304 con acabado pulido. Ideal para puertas industriales y aplicaciones que requieren resistencia a la corrosión.",
      bisagraDeAceroHeight: "80px" as const,
      textWidth2: "134.5px" as const,
      aceroInoxidable304: "Acero Inoxidable 304",
      textWidth3: "98.5px" as const,
      x75X3mm: "100 x 75 x 3mm",
    },
    {
      linkWidth: undefined,
      container: "/Container7@2x.png",
      containerPadding: undefined,
      textWidth: "47.4px" as const,
      bIS001: "BUJ-002",
      textPadding: "4px 0px 4px 8px" as const,
      textWidth1: undefined,
      textBackgroundColor: undefined,
      stock245: "Stock: 180",
      stock245Color: undefined,
      bisagraInoxidableFijaPremium: "Buje de Bronce Autolubricado",
      bisagraInoxidableFijaWidth: "262px" as const,
      paragraphPadding: undefined,
      bisagraDeAceroInoxidableCon:
        "Buje de bronce SAE 660 con insertos de grafito para autolubricación. Perfecto para aplicaciones de alta carga y velocidad.",
      bisagraDeAceroHeight: "60px" as const,
      textWidth2: "160.9px" as const,
      aceroInoxidable304: "Bronce SAE 660 + Grafito",
      textWidth3: "157.5px" as const,
      x75X3mm: "Ø40 x 50mm (ext x long)",
    },
    {
      linkWidth: undefined,
      container: "/Container7@2x.png",
      containerPadding: undefined,
      textWidth: "47.4px" as const,
      bIS001: "BUJ-003",
      textPadding: "4px 2px 4px 8px" as const,
      textWidth1: "65.6px" as const,
      textBackgroundColor: "#fef3c7" as const,
      stock245: "Stock: 95",
      stock245Color: "#f59e0b" as const,
      bisagraInoxidableFijaPremium: "Buje Cofre Reforzado",
      bisagraInoxidableFijaWidth: "187px" as const,
      paragraphPadding: undefined,
      bisagraDeAceroInoxidableCon:
        "Buje especialmente diseñado para aplicaciones de cofres y contenedores industriales. Alta resistencia al desgaste.",
      bisagraDeAceroHeight: "60px" as const,
      textWidth2: "94px" as const,
      aceroInoxidable304: "Bronce CuSn12",
      textWidth3: "81.2px" as const,
      x75X3mm: "Ø60 x 80mm",
    },
    {
      linkWidth: undefined,
      container: "/Container7@2x.png",
      containerPadding: undefined,
      textWidth: "49.8px" as const,
      bIS001: "SOP-004",
      textPadding: "4px 2px 4px 8px" as const,
      textWidth1: "65.6px" as const,
      textBackgroundColor: "#fef3c7" as const,
      stock245: "Stock: 62",
      stock245Color: "#f59e0b" as const,
      bisagraInoxidableFijaPremium: "Soporte Pivote Angular",
      bisagraInoxidableFijaWidth: "205px" as const,
      paragraphPadding: undefined,
      bisagraDeAceroInoxidableCon:
        "Soporte pivotante de acero estructural con tratamiento anticorrosivo. Permite ajuste angular de ±15°.",
      bisagraDeAceroHeight: "60px" as const,
      textWidth2: "85.6px" as const,
      aceroInoxidable304: "Acero S275JR",
      textWidth3: "114.6px" as const,
      x75X3mm: "200 x 150 x 45mm",
    },
  ]);

  const onContainerClick = useCallback(() => {
    // Please sync "Frame 4" to the project
  }, []);

  const onContainerClick1 = useCallback(() => {
    // Please sync "Frame 5" to the project
  }, []);

  const onContainerClick2 = useCallback(() => {
    // Please sync "Frame 6" to the project
  }, []);

  const onContainerClick3 = useCallback(() => {
    // Please sync "Frame 7" to the project
  }, []);

  const onContainerClick4 = useCallback(() => {
    // Please sync "Frame 8" to the project
  }, []);

  const onContainerClick5 = useCallback(() => {
    // Please sync "Frame 9" to the project
  }, []);

  const onContainerClick6 = useCallback(() => {
    // Please sync "Frame 10" to the project
  }, []);

  const onContainerClick7 = useCallback(() => {
    // Please sync "Frame 11" to the project
  }, []);

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.body}>
        <section className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.container2}>
              <div className={styles.heading1}>
                <h1 className={styles.catlogoDeProductos}>
                  Catálogo de Productos
                </h1>
              </div>
              <div className={styles.paragraph}>
                <div className={styles.exploraNuestroCatlogo}>
                  Explora nuestro catálogo completo de componentes industriales
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerWrapper}>
            <div className={styles.container3}>
              <section className={styles.containerParent}>
                <div className={styles.container4}>
                  <div className={styles.container5}>
                    <div className={styles.container6}>
                      <div className={styles.textInput}>
                        <input
                          className={styles.buscarProductos}
                          placeholder="Buscar productos..."
                          type="text"
                        />
                      </div>
                      <img className={styles.icon} alt="" src="/Icon13.svg" />
                    </div>
                    <img
                      className={styles.containerIcon}
                      alt=""
                      src="/Container8.svg"
                    />
                    <div className={styles.container7}>
                      <img
                        className={styles.buttonIcon}
                        alt=""
                        src="/Button.svg"
                      />
                      <img
                        className={styles.buttonIcon2}
                        loading="lazy"
                        alt=""
                        src="/Button1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.container8}>
                  <div className={styles.paragraph2}>
                    <div className={styles.mostrando8ProductosContainer}>
                      <span>{`Mostrando `}</span>
                      <span className={styles.span}>8</span>
                      <span> productos</span>
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles.container9}>
                <div className={styles.productCard}>
                  {linkItems.map((item, index) => (
                    <Link
                      key={index}
                      linkWidth={item.linkWidth}
                      container={item.container}
                      containerPadding={item.containerPadding}
                      textWidth={item.textWidth}
                      bIS001={item.bIS001}
                      textPadding={item.textPadding}
                      textWidth1={item.textWidth1}
                      textBackgroundColor={item.textBackgroundColor}
                      stock245={item.stock245}
                      stock245Color={item.stock245Color}
                      bisagraInoxidableFijaPremium={
                        item.bisagraInoxidableFijaPremium
                      }
                      bisagraInoxidableFijaWidth={
                        item.bisagraInoxidableFijaWidth
                      }
                      paragraphPadding={item.paragraphPadding}
                      bisagraDeAceroInoxidableCon={
                        item.bisagraDeAceroInoxidableCon
                      }
                      bisagraDeAceroHeight={item.bisagraDeAceroHeight}
                      textWidth2={item.textWidth2}
                      aceroInoxidable304={item.aceroInoxidable304}
                      textWidth3={item.textWidth3}
                      x75X3mm={item.x75X3mm}
                    />
                  ))}
                  <Link1
                    lEN005="LEN-005"
                    stock420="Stock: 420"
                    lengetaDeCierrePlatina="Lengüeta de Cierre Platina"
                    lengetaDeCierreDeAceroInoxida="Lengüeta de cierre de acero inoxidable para cofres y contenedores. Sistema de liberación rápida."
                    aceroInoxidable316="Acero Inoxidable 316"
                    x30X5mm="80 x 30 x 5mm"
                    onContainerClick4={onContainerClick4}
                  />
                  <Link1
                    linkWidth="unset"
                    containerPadding="24px 23px 24px 24px"
                    textWidth="44.2px"
                    lEN005="BIS-006"
                    textWidth1="65.3px"
                    textBackgroundColor="#fef3c7"
                    textPadding="4px 2px 4px 8px"
                    stock420="Stock: 78"
                    stock420Color="#f59e0b"
                    lengetaDeCierrePlatina="Bisagra Industrial Reforzada"
                    lengetaDeCierreWidth="249px"
                    paragraphPadding="unset"
                    lengetaDeCierreDeAceroInoxida="Bisagra de acero al carbono reforzada para aplicaciones de alta carga. Diseño robusto para maquinaria pesada."
                    lengetaDeCierreHeight="60px"
                    textWidth2="136.3px"
                    aceroInoxidable316="Acero al carbono C45"
                    textWidth3="104.4px"
                    x30X5mm="180 x 120 x 6mm"
                    onContainerClick4={onContainerClick5}
                  />
                </div>
                <section className={styles.linkParent}>
                  <Link1
                    linkWidth="394.7px"
                    containerPadding="24px"
                    textWidth="49.3px"
                    lEN005="SOP-007"
                    textWidth1="72.3px"
                    textBackgroundColor="#dcfce7"
                    textPadding="4px 0px 4px 8px"
                    stock420="Stock: 650"
                    stock420Color="#16a34a"
                    lengetaDeCierrePlatina="Soporte Ajustable Electrónico"
                    lengetaDeCierreWidth="264px"
                    paragraphPadding="0px 0px 1px"
                    lengetaDeCierreDeAceroInoxida="Soporte ajustable de plástico industrial reforzado. Ideal para montaje de equipos electrónicos ligeros."
                    lengetaDeCierreHeight="40px"
                    textWidth2="131.9px"
                    aceroInoxidable316="PA6 Nylon reforzado"
                    textWidth3="101.2px"
                    x30X5mm="60 x 40 x 25mm"
                    onContainerClick4={onContainerClick6}
                  />
                  <Link

                  />
                </section>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <Header />
    </div>
  );
};

export default catalogoproductos;

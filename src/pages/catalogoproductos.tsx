import { FunctionComponent, useState } from "react";
import Link from "../components/Linkcatalogoproductos";
import Link1 from "../components/Linkcatalogoproductos1";
import Footer from "../components/Footercatalogoproductos";
import Header from "../components/Headercatalogoproductos";
import styles from "./catalogoproductos.module.css";

const Catalogoproductos: FunctionComponent = () => {
  const [products] = useState([
    {
      id: "BIS-001",
      name: "Bisagra Inoxidable Fija Premium",
      stock: "245",
      stockColor: "#16a34a",
      desc: "Bisagra de acero inoxidable 304 con acabado pulido. Ideal para puertas industriales.",
      material: "Acero Inoxidable 304",
      dims: "100 x 75 x 3mm",
      img: "/Container7@2x.png"
    },
    {
      id: "BUJ-002",
      name: "Buje de Bronce Autolubricado",
      stock: "180",
      stockColor: "#16a34a",
      desc: "Buje de bronce SAE 660 con insertos de grafito para autolubricación.",
      material: "Bronce SAE 660 + Grafito",
      dims: "Ø40 x 50mm",
      img: "/Container7@2x.png"
    },
    {
      id: "SOP-004",
      name: "Soporte Pivote Angular",
      stock: "62",
      stockColor: "#f59e0b",
      desc: "Soporte pivotante de acero estructural con tratamiento anticorrosivo.",
      material: "Acero S275JR",
      dims: "200 x 150 x 45mm",
      img: "/Container7@2x.png"
    }
  ]);

  return (
    <div className={styles.root}>
      <Header />
      
      <main className={styles.body}>
        <section className={styles.heroSection}>
          <div className={styles.bannerContainer}>
            <h1 className={styles.catlogoDeProductos}>Catálogo de Productos</h1>
            <p className={styles.exploraNuestroCatlogo}>
              Explora nuestro catálogo completo de componentes industriales
            </p>
          </div>
        </section>

        <section className={styles.catalogWrapper}>
          <div className={styles.filterBar}>
            <div className={styles.searchContainer}>
              <input 
                className={styles.buscarProductos} 
                placeholder="Buscar productos..." 
                type="text" 
              />
              <img className={styles.searchIcon} src="/Iconcatalogoproductos13.svg" alt="Buscar" />
            </div>
            <div className={styles.displayOptions}>
               <img src="/Buttoncatalogoproductos.svg" alt="Filtro" />
               <img src="/Buttoncatalogoproducotos1.svg" alt="Vista" />
            </div>
          </div>

          <div className={styles.statsBar}>
             <p>Mostrando <span className={styles.bold}>{products.length + 1}</span> productos</p>
          </div>

          {/* GRID: Asegúrate de que en el .css este div tenga display: grid */}
          <div className={styles.productGrid}>
            {products.map((item) => (
              <Link
                key={item.id}
                linkWidth="100%"
                container={item.img}
                bIS001={item.id}
                stock245={`Stock: ${item.stock}`}
                stock245Color={item.stockColor}
                bisagraInoxidableFijaPremium={item.name}
                bisagraDeAceroInoxidableCon={item.desc}
                aceroInoxidable304={item.material}
                x75X3mm={item.dims}
              />
            ))}
            
            <Link1
              lEN005="LEN-005"
              stock420="Stock: 420"
              lengetaDeCierrePlatina="Lengüeta de Cierre Platina"
              lengetaDeCierreDeAceroInoxida="Lengüeta de cierre de acero inoxidable para aplicaciones industriales."
              aceroInoxidable316="Acero Inoxidable 316"
              x30X5mm="80 x 30 x 5mm"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogoproductos;
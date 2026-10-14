import { FunctionComponent, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footercatalogoproductos";
import Header from "../components/Headercatalogoproductos";
import styles from "./catalogoproductos.module.css";

type Product = {
  sku: string;
  stock: string;
  stockColor: string;
  name: string;
  description: string;
  material: string;
  dimensions: string;
  image: string;
  categorySlug: string;
};

const products: Product[] = [
  {
    sku: "BIS-001",
    stock: "Stock: 245",
    stockColor: "#dcfce7",
    name: "Bisagra Inoxidable Fija Premium",
    description:
      "Bisagra de acero inoxidable 304 con acabado pulido. Ideal para puertas industriales y aplicaciones que requieren resistencia a la corrosión.",
    material: "Acero Inoxidable 304",
    dimensions: "100 x 75 x 3mm",
    image: "/Container7@2x.png",
    categorySlug: "bisagras",
  },
  {
    sku: "BUJ-002",
    stock: "Stock: 180",
    stockColor: "#ecfccb",
    name: "Buje de Bronce Autolubricado",
    description:
      "Buje de bronce SAE 660 con insertos de grafito para autolubricación. Perfecto para aplicaciones de alta carga y velocidad.",
    material: "Bronce SAE 660 + Grafito",
    dimensions: "Ø40 x 50mm (ext x long)",
    image: "/Container7@2x.png",
    categorySlug: "bujes",
  },
  {
    sku: "BUJ-003",
    stock: "Stock: 95",
    stockColor: "#fef3c7",
    name: "Buje Cofre Reforzado",
    description:
      "Buje especialmente diseñado para aplicaciones de cofres y contenedores industriales. Alta resistencia al desgaste.",
    material: "Bronce CuSn12",
    dimensions: "Ø60 x 80mm",
    image: "/Container7@2x.png",
    categorySlug: "bujes",
  },
  {
    sku: "SOP-004",
    stock: "Stock: 62",
    stockColor: "#fef3c7",
    name: "Soporte Pivote Angular",
    description:
      "Soporte pivotante de acero estructural con tratamiento anticorrosivo. Permite ajuste angular de ±15°.",
    material: "Acero S275JR",
    dimensions: "200 x 150 x 45mm",
    image: "/Container7@2x.png",
    categorySlug: "soportes",
  },
  {
    sku: "LEN-005",
    stock: "Stock: 420",
    stockColor: "#dcfce7",
    name: "Lengüeta de Cierre Platina",
    description:
      "Lengüeta de cierre de acero inoxidable para cofres y contenedores. Sistema de liberación rápida.",
    material: "Acero Inoxidable 316",
    dimensions: "80 x 30 x 5mm",
    image: "/Container7@2x.png",
    categorySlug: "lenguetas",
  },
  {
    sku: "BIS-006",
    stock: "Stock: 78",
    stockColor: "#fef3c7",
    name: "Bisagra Industrial Reforzada",
    description:
      "Bisagra de acero al carbono reforzada para aplicaciones de alta carga. Diseño robusto para maquinaria pesada.",
    material: "Acero al carbono C45",
    dimensions: "180 x 120 x 6mm",
    image: "/Container7@2x.png",
    categorySlug: "bisagras",
  },
  {
    sku: "VAL-007",
    stock: "Stock: 120",
    stockColor: "#dcfce7",
    name: "Válvula de Control Neumática",
    description:
      "Válvula de control para sistemas neumáticos con cuerpo reforzado y sellos de alta resistencia.",
    material: "Acero Inoxidable 316",
    dimensions: "50 x 50 x 40mm",
    image: "/Container7@2x.png",
    categorySlug: "accesorios",
  },
  {
    sku: "TPR-008",
    stock: "Stock: 34",
    stockColor: "#fef3c7",
    name: "Tapón Roscado Plástico",
    description:
      "Tapón roscado de nylon PA6 para protecciones y cierres industriales resistentes a impactos.",
    material: "Nylon PA6",
    dimensions: "M18 x 25mm",
    image: "/Container7@2x.png",
    categorySlug: "accesorios",
  },
];

const categoryLabels: Record<string, string> = {
  bisagras: "Bisagras",
  bujes: "Bujes",
  soportes: "Soportes",
  lenguetas: "Lengüetas",
  pivotes: "Pivotes",
  platinas: "Platinas",
  tornilleria: "Tornillería",
  accesorios: "Accesorios",
};

const CatalogoProductos: FunctionComponent = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchTerm, setSearchTerm] = useState("");

  const displayCategory = category ? categoryLabels[category] ?? category : "Productos";
  const title = category ? `Catálogo de ${displayCategory}` : "Catálogo de Productos";
  const subtitle = category
    ? `Explora productos de ${displayCategory}`
    : "Explora nuestro catálogo completo de componentes industriales";

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category ? product.categorySlug === category : true;
      const matchesSearch =
        normalizedSearch === "" ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.material.toLowerCase().includes(normalizedSearch) ||
        product.sku.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.body}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          </div>
        </section>

        <section className={styles.toolbar}>
          <div className={styles.toolbarCard}>
            <div className={styles.searchGroup}>
              <div className={styles.searchCard}>
                <img className={styles.searchIcon} alt="Buscar" src="/Icon13.svg" />
                <input
                  className={styles.searchInput}
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className={styles.filterButton} type="button">
                <img className={styles.filterIcon} alt="Filtrar" src="/Iconcatalogoproductos13.svg" />
              </button>
            </div>

            <div className={styles.viewButtons}>
              <button className={styles.toggleButton} type="button">
                <img alt="Vista de cuadrícula" src="/Button.svg" />
              </button>
              <button className={styles.toggleButton} type="button">
                <img alt="Vista de lista" src="/Button1.svg" />
              </button>
            </div>
          </div>

          <div className={styles.summary}>
            Mostrando <span>{filteredProducts.length}</span> productos
          </div>
        </section>

        <section className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.sku}
              sku={product.sku}
              stock={product.stock}
              stockColor={product.stockColor}
              name={product.name}
              description={product.description}
              material={product.material}
              dimensions={product.dimensions}
              image={product.image}
            />
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default CatalogoProductos;

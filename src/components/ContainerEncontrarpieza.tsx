import { FunctionComponent, useState, useCallback, useMemo } from "react";
import styles from "./ContainerEncontrarpieza.module.css";

export type ContainerType = {
  className?: string;
};

// ----------------------------------------------------------------------
// 1. COMPONENTE INTERNO "ButtonEncontrarpieza"
// ----------------------------------------------------------------------
type ButtonProps = {
  title: string;
  description: string;
  onButtonClick: () => void;
  isSelected?: boolean;
};

const ButtonEncontrarpieza: FunctionComponent<ButtonProps> = ({
  title,
  description,
  onButtonClick,
  isSelected = false,
}) => {
  return (
    <button
      type="button"
      onClick={onButtonClick}
      className={`${styles.buttonCard || ""} ${isSelected ? styles.selectedOption || "" : ""}`}
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: isSelected ? "2px solid #2563eb" : "1px solid #e5e7eb",
        backgroundColor: isSelected ? "#eff6ff" : "#ffffff",
        textAlign: "left",
        cursor: "pointer",
        transition: "all 0.2s ease",
        width: "100%",
      }}
    >
      <h3 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
        {description}
      </p>
    </button>
  );
};

// ----------------------------------------------------------------------
// 2. BASE DE DATOS Y CONFIGURACIÓN DE PASOS
// ----------------------------------------------------------------------
type Pieza = {
  id: string;
  nombre: string;
  tipo: string;
  material: string;
  tamano: string;
  aplicacion: string;
  precio: string;
};

const PIEZAS_DATABASE: Pieza[] = [
  { id: "P-01", nombre: "Bisagra Reforzada Inox", tipo: "Bisagra", material: "Acero Inoxidable", tamano: "Mediana (50mm - 150mm)", aplicacion: "Automotriz", precio: "$15.00" },
  { id: "P-02", nombre: "Bisagra Mini Plástico", tipo: "Bisagra", material: "Plástico / Polímero", tamano: "Pequeña (< 50mm)", aplicacion: "Electrónica", precio: "$4.50" },
  { id: "P-03", nombre: "Buje Bronce Autolubricado", tipo: "Buje", material: "Bronce", tamano: "Pequeña (< 50mm)", aplicacion: "Maquinaria Pesada", precio: "$12.00" },
  { id: "P-04", nombre: "Soporte de Aluminio L", tipo: "Soporte", material: "Aluminio", tamano: "Mediana (50mm - 150mm)", aplicacion: "Hogar / Mueblería", precio: "$8.50" },
  { id: "P-05", nombre: "Lengüeta Cierre Inox", tipo: "Lengüeta", material: "Acero Inoxidable", tamano: "Pequeña (< 50mm)", aplicacion: "Automotriz", precio: "$6.00" },
  { id: "P-06", nombre: "Soporte Pesado Acero", tipo: "Soporte", material: "Acero Inoxidable", tamano: "Grande (> 150mm)", aplicacion: "Maquinaria Pesada", precio: "$28.00" },
];

const STEPS = [
  {
    key: "tipo",
    question: "¿Qué tipo de pieza necesitas?",
    options: [
      { title: "Bisagra", description: "Elementos de articulación" },
      { title: "Buje", description: "Componentes de rodamiento" },
      { title: "Soporte", description: "Elementos de sujeción" },
      { title: "Lengüeta", description: "Componentes de cierre" },
    ],
  },
  {
    key: "material",
    question: "¿Cuál es el material requerido?",
    options: [
      { title: "Acero Inoxidable", description: "Alta resistencia a la corrosión" },
      { title: "Aluminio", description: "Ligero y resistente" },
      { title: "Plástico / Polímero", description: "Aislamiento y ligereza" },
      { title: "Bronce", description: "Baja fricción y alta durabilidad" },
    ],
  },
  {
    key: "tamano",
    question: "¿Qué dimensiones aproximadamente buscas?",
    options: [
      { title: "Pequeña (< 50mm)", description: "Para mecanismos reducidos" },
      { title: "Mediana (50mm - 150mm)", description: "Estándar industrial" },
      { title: "Grande (> 150mm)", description: "Cargas pesadas" },
    ],
  },
  {
    key: "aplicacion",
    question: "¿Cuál es la aplicación principal?",
    options: [
      { title: "Automotriz", description: "Uso en vehículos y transporte" },
      { title: "Maquinaria Pesada", description: "Uso en industria e infraestructura" },
      { title: "Electrónica", description: "Ensambles finos de precisión" },
      { title: "Hogar / Mueblería", description: "Uso general" },
    ],
  },
];

// ----------------------------------------------------------------------
// 3. COMPONENTE PRINCIPAL
// ----------------------------------------------------------------------
const ContainerEncontrarpieza: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalSteps = STEPS.length;
  const currentStepConfig = STEPS[currentStep];

  // Guardar la opción seleccionada para la pregunta actual
  const handleSelectOption = useCallback((optionTitle: string) => {
    const stepKey = STEPS[currentStep].key;
    setFilters((prev) => ({
      ...prev,
      [stepKey]: optionTitle,
    }));
  }, [currentStep]);

  // Avanzar al siguiente paso o finalizar
  const onNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  }, [currentStep, totalSteps]);

  // Retroceder paso
  const onPrevious = useCallback(() => {
    if (isCompleted) {
      setIsCompleted(false);
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
    }
  }, [isCompleted]);

  // Reiniciar la búsqueda guiada
  const handleReset = useCallback(() => {
    setFilters({});
    setCurrentStep(0);
    setIsCompleted(false);
  }, []);

  // Filtrado reactivo de piezas según las respuestas acumuladas
  const filteredPiezas = useMemo(() => {
    return PIEZAS_DATABASE.filter((pieza) => {
      if (filters.tipo && pieza.tipo !== filters.tipo) return false;
      if (filters.material && pieza.material !== filters.material) return false;
      if (filters.tamano && pieza.tamano !== filters.tamano) return false;
      if (filters.aplicacion && pieza.aplicacion !== filters.aplicacion) return false;
      return true;
    });
  }, [filters]);

  const progressPercentage = Math.round(((currentStep + 1) / totalSteps) * 100);
  const currentSelectedValue = filters[currentStepConfig?.key];

  return (
    <div className={[styles.containerEncontrarpieza, className].join(" ")}>
      {/* Cabecera */}
      <section className={styles.hero}>
        <button className={styles.badge} type="button">
          <img className={styles.badgeIcon} alt="" src="/Icon9.svg" />
          Búsqueda Guiada
        </button>
        <h1 className={styles.title}>Encuentra tu pieza perfecta</h1>
        <p className={styles.description}>
          Responde unas preguntas y te ayudaremos a encontrar exactamente lo que necesitas
        </p>
      </section>

      {!isCompleted ? (
        <>
          {/* Sección de Progreso */}
          <section className={styles.progressSection}>
            <div className={styles.progressHeader}>
              <span className={styles.stepLabel}>Paso {currentStep + 1} de {totalSteps}</span>
              <span className={styles.progressText}>{progressPercentage}%</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className={styles.stepIndicators}>
              {STEPS.map((_, index) => (
                <button
                  key={index}
                  className={[
                    styles.stepCircle,
                    index === currentStep ? styles.stepActive : "",
                  ].join(" ")}
                  type="button"
                  onClick={() => setCurrentStep(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </section>

          {/* Tarjeta de Pregunta y Opciones */}
          <section className={styles.questionCard}>
            <div className={styles.questionHeader}>
              <h2>{currentStepConfig.question}</h2>
            </div>
            <div className={styles.optionsGrid}>
              {currentStepConfig.options.map((option) => {
                const isSelected = currentSelectedValue === option.title;
                return (
                  <ButtonEncontrarpieza
                    key={option.title}
                    title={option.title}
                    description={option.description}
                    isSelected={isSelected}
                    onButtonClick={() => handleSelectOption(option.title)}
                  />
                );
              })}
            </div>
          </section>

          {/* Acciones de Navegación */}
          <div className={styles.footerActions}>
            <button
              className={styles.prevButton}
              type="button"
              onClick={onPrevious}
              disabled={currentStep === 0}
            >
              Anterior
            </button>
            <button
              className={styles.nextButton}
              type="button"
              onClick={onNext}
              disabled={!currentSelectedValue}
            >
              {currentStep === totalSteps - 1 ? "Ver Resultados" : "Siguiente"}
            </button>
          </div>
        </>
      ) : (
        /* Vista de Resultados de Piezas Encontradas */
        <section className={styles.questionCard}>
          <div className={styles.questionHeader}>
            <h2>Piezas Encontradas ({filteredPiezas.length})</h2>
          </div>
          
          <div style={{ display: "grid", gap: "16px", margin: "20px 0" }}>
            {filteredPiezas.length > 0 ? (
              filteredPiezas.map((pieza) => (
                <div
                  key={pieza.id}
                  style={{
                    padding: "16px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  <h3 style={{ margin: "0 0 8px 0", color: "#111827" }}>{pieza.nombre}</h3>
                  <p style={{ margin: "4px 0", fontSize: "14px", color: "#4b5563" }}>
                    <strong>Tipo:</strong> {pieza.tipo} | <strong>Material:</strong> {pieza.material}
                  </p>
                  <p style={{ margin: "4px 0", fontSize: "14px", color: "#4b5563" }}>
                    <strong>Tamaño:</strong> {pieza.tamano} | <strong>Aplicación:</strong> {pieza.aplicacion}
                  </p>
                  <p style={{ margin: "8px 0 0 0", fontWeight: "bold", color: "#2563eb" }}>
                    Precio: {pieza.precio}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", color: "#6b7280" }}>
                No se encontraron piezas que coincidan con todos los criterios seleccionados.
              </p>
            )}
          </div>

          <div className={styles.footerActions}>
            <button className={styles.prevButton} onClick={onPrevious} type="button">
              Modificar selección
            </button>
            <button className={styles.nextButton} onClick={handleReset} type="button">
              Reiniciar Búsqueda
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default ContainerEncontrarpieza;
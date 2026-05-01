import { FunctionComponent, useCallback } from "react";
import Button from "./ButtonEncontrarpieza";
import styles from "./ContainerEncontrarpieza.module.css";

export type ContainerType = {
  className?: string;
};

const ContainerEncontrarpieza: FunctionComponent<ContainerType> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    // Please sync "Frame 12" to the project
  }, []);

  const onButtonClick1 = useCallback(() => {
    // Please sync "Frame 13" to the project
  }, []);

  const onButtonClick2 = useCallback(() => {
    // Please sync "B2B Construction Parts App" to the project
  }, []);

  return (
    <div className={[styles.containerEncontrarpieza, className].join(" ")}>
      <section className={styles.container2}>
        <div className={styles.containerWrapper}>
          <button className={styles.container3}>
            <div className={styles.iconWrapper}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/Icon9.svg"
              />
            </div>
            <div className={styles.bsquedaGuiada}>Búsqueda Guiada</div>
          </button>
        </div>
        <div className={styles.heading1}>
          <h1 className={styles.encuentraTuPieza}>
            Encuentra tu pieza perfecta
          </h1>
        </div>
        <div className={styles.paragraph}>
          <div className={styles.respondeUnasPreguntas}>
            Responde unas preguntas y te ayudaremos a encontrar exactamente lo
            que necesitas
          </div>
        </div>
      </section>
      <div className={styles.container4}>
        <div className={styles.container5}>
          <div className={styles.text}>
            <div className={styles.paso1De}>Paso 1 de 4</div>
          </div>
          <div className={styles.text2}>
            <div className={styles.shoppingBag}>25%</div>
          </div>
        </div>
        <div className={styles.container6}>
          <div className={styles.container7} />
        </div>
        <div className={styles.container8}>
          <button className={styles.container9}>
            <div className={styles.container10}>
              <div className={styles.productImage}>1</div>
            </div>
            <div className={styles.container11} />
          </button>
          <button className={styles.container9}>
            <div className={styles.container13}>
              <div className={styles.div}>2</div>
            </div>
            <div className={styles.container11} />
          </button>
          <button className={styles.container9}>
            <div className={styles.container13}>
              <div className={styles.div}>3</div>
            </div>
            <div className={styles.container11} />
          </button>
          <button className={styles.container18}>
            <div className={styles.container19}>
              <div className={styles.div}>4</div>
            </div>
          </button>
        </div>
      </div>
      <section className={styles.containerParent}>
        <div className={styles.container20}>
          <div className={styles.heading2}>
            <h3 className={styles.quTipoDe}>¿Qué tipo de pieza necesitas?</h3>
          </div>
          <div className={styles.container21}>
            <div className={styles.buttonParent}>
              <Button
                onButtonClick={onButtonClick}
                bisagra="Bisagra"
                elementosDeArticulacin="Elementos de articulación"
              />
              <Button
                onButtonClick={onButtonClick}
                heading3Width="67.6px"
                bisagra="Soporte"
                bisagraWidth="71px"
                elementosDeArticulacin="Elementos de sujeción"
              />
            </div>
            <div className={styles.buttonParent}>
              <Button
                onButtonClick={onButtonClick1}
                heading3Width="unset"
                bisagra="Buje"
                bisagraWidth="39px"
                elementosDeArticulacin="Componentes de rodamiento"
              />
              <Button
                onButtonClick={onButtonClick}
                heading3Width="78.3px"
                bisagra="Lengüeta"
                bisagraWidth="83px"
                elementosDeArticulacin="Componentes de cierre"
              />
            </div>
          </div>
        </div>
        <div className={styles.container22}>
          <button className={styles.button} onClick={onButtonClick2}>
            <div className={styles.iconContainer}>
              <img className={styles.icon2} alt="" src="/Icon.svg" />
            </div>
            <div className={styles.anterior}>Anterior</div>
          </button>
          <button className={styles.button2}>
            <div className={styles.siguiente}>Siguiente</div>
            <div className={styles.iconContainer}>
              <img className={styles.icon2} alt="" src="/Icon1.svg" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContainerEncontrarpieza;

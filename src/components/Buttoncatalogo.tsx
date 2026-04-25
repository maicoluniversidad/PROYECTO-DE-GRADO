import {FunctionComponent, useMemo,type CSSProperties,useCallback,} from "react";
import styles from "./Buttoncatalogo.module.css";

export type ButtonType = {
  className?: string;
  bisagra?: string;
  elementosDeArticulacin?: string;

  /** Style props */
  heading3Width?: CSSProperties["width"];
  bisagraWidth?: CSSProperties["width"];

  /** Action props */
  onButtonClick?: () => void;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  onButtonClick,
  heading3Width,
  bisagra,
  bisagraWidth,
  elementosDeArticulacin,
}) => {
  const heading3Style: CSSProperties = useMemo(() => {
    return {
      width: heading3Width,
    };
  }, [heading3Width]);

  const bisagraStyle: CSSProperties = useMemo(() => {
    return {
      width: bisagraWidth,
    };
  }, [bisagraWidth]);

  const onButtonClick1 = useCallback(() => {
    // Please sync "Frame 12" to the project
  }, []);

  return (
    <button
      className={[styles.button, className].join(" ")}
      onClick={onButtonClick}
    >
      <div className={styles.container}>
        <div className={styles.heading3} style={heading3Style}>
          <b className={styles.bisagra} style={bisagraStyle}>
            {bisagra}
          </b>
        </div>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.elementosDeArticulacin}>
          {elementosDeArticulacin}
        </div>
      </div>
    </button>
  );
};

export default Button;

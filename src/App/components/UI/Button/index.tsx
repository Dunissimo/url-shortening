import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface IProps {
  withBg?: boolean;
  children: ReactNode;
  style?: CSSProperties;
  type?: "button" | "reset" | "submit";
}

const Button: FC<IProps> = ({ withBg, children, style, type }) => {
  return (
    <button
      style={style}
      type={type}
      className={withBg ? `${styles.btn} ${styles.btnWithBg}` : `${styles.btn}`}
    >
      {children}
    </button>
  );
};

export default Button;

import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  padding?: string;
  fontSize?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ padding = "1em", fontSize = "0.9rem", children }) => {
  const buttonStyle = {
    padding,
    fontSize
  };

  return (
    <button className={styles.btn} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;

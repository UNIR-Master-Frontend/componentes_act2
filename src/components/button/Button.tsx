import type { ButtonProps } from "./button.interface";
import "./styles.css";

export const Button = (props: ButtonProps) => {
  const variant = props.variant || "primary";

  return (
    <button
      className={variant}
      onClick={props.onClick}
      type={props.type || "button"}
      disabled={props.disabled}
    >
      <span>{props.label}</span>
    </button>
  );
};

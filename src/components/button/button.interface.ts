export type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "primary-outline"
    | "secondary-outline"
    | "primary-white"
    | "secondary-white";
  type?: "button" | "submit";
};

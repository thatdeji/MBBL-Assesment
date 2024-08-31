import React from "react";
import { IButtonProps } from "./Button.types";

const Button: React.FC<
  IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick, className, ...rest }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;

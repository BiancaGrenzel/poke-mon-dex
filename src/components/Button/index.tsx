import { ButtonProps } from "./types";

const Button = ({ children, onClick, disabled, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
import React from "react";

interface ButtonProps {
  children:   React.ReactNode;
  onClick?:   (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?:      "button" | "submit" | "reset";
  variant?:   "primary" | "secondary" | "danger" | "outlined";
  disabled?:  boolean;
}

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const variantClass = () => {
    if (variant === "primary") {
      return primaryStyle;
    }

    if (variant === "secondary") {
      return secondaryStyle;
    }

    if (variant === "danger") {
      return dangerStyle;
    }

    if (variant === "outlined") {
      return outlinedStyle;
    }
  };

  const disabledClass = () => {
    return disabled ? disabledStyle : "";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${buttonStyle} ${variantClass()} ${disabledClass()}`}
    >
      {children}
    </button>
  );
}

const buttonStyle = `
  flex 
  w-full 
  justify-center 
  rounded-md 
  px-3 
  py-1.5 
  font-semibold 
  shadow-xs 
  focus-visible:outline-2 
  focus-visible:outline-offset-2 
`;

const primaryStyle = `
  bg-blue-600 
  text-white 
  hover:bg-blue-500
  focus-visible:outline-indigo-600
`;

const secondaryStyle = `
  bg-gray-600 
  text-white 
  hover:bg-gray-700 
  focus:ring-gray-500
`;

const dangerStyle = `
  bg-red-600 
  text-white 
  hover:bg-red-700 
  focus:ring-red-500
`;

const outlinedStyle = `
  tracking-wide
  border 
  border-gray-300 
  text-gray-700 
  hover:bg-gray-100 
  focus:ring-gray-500
`;

const disabledStyle = `
  opacity-50 
  cursor-not-allowed
`;

export default Button;

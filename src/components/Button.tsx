import type { FC } from "react";
import React from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "success" | "warning" | "danger" | "info" | "light" | "dark" | "link";

const SizeMapping: Record<ButtonSize, string> = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const ColorMapping: Record<ButtonColor, string> = {
  success: "bg-green-500 hover:bg-green-600 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  info: "bg-blue-500 hover:bg-blue-600 text-white",
  light: "bg-gray-200 hover:bg-gray-300 text-gray-700",
  dark: "bg-gray-700 hover:bg-gray-800 text-white",
  link: "hover:underline text-blue-500",
};

type ButtonProps = {
    size?: ButtonSize,
    onClick?: () => void,
    color?: ButtonColor,
    round?: boolean,
    disabled?: boolean,
    children?: string | JSX.Element
} & (
        { source?: "emoji", emoji: string }
        | { source?: "icon", icon: string, iconSize?: string }
        | { source?: false }
    ) & React.ButtonHTMLAttributes<HTMLButtonElement>; // icon button

const defaultButtonProps: ButtonProps = {
  size: "medium",
  color: "light",
  round: false,
  disabled: false,
  children: "",
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { size, onClick, color, round, disabled, children, ...otherProps } = { ...defaultButtonProps, ...props };
  const buttonSize = SizeMapping[size as ButtonSize];
  const buttonColor = ColorMapping[color as ButtonColor];
  const buttonClasses = `${buttonSize} ${buttonColor} ${round ? "rounded-full" : "rounded"} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}`;

  if (props.source === "emoji") {
    return (
      <button className={`${buttonClasses}`} disabled={disabled} onClick={onClick} {...otherProps}>
        <span className="text-2xl">{props.emoji}</span>
        <span>{children}</span>
      </button>
    );
  } else if (props.source === "icon") {
    const iconSize = props.iconSize || "xl";
    return (
      <button className={`${buttonClasses}`} disabled={disabled} onClick={onClick}>
        <div className="flex justify-center items-center">
          <div className={`${props.icon} text-${iconSize}`}></div>
          <span>{children}</span>
        </div>
      </button>
    );
  }

  return (
    <button className={`${buttonClasses}`} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
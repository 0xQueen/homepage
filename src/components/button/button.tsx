import React from "react";
import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
  primary:
    "primary-color font-semibold text-pink-100 primary-hover active:bg-pink-800 active:text-pink-100/70",
  secondary:
    "secondary-color font-medium text-pink-900 secondary-hover active:bg-pink-600 active:text-pink-900/60",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: {
  variant?: keyof typeof variantStyles;
  className?: string;
  [key: string]: any;
}) {
  const buttonClassName = clsx(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant as keyof typeof variantStyles],
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={buttonClassName} {...props} />
  ) : (
    <Link className={buttonClassName} href="" {...props} />
  );
}

export default Button;

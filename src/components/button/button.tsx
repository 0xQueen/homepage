import React from "react";
import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
  primary:
    "bg-pink-600 font-semibold text-pink-100 hover:bg-pink-700 active:bg-pink-800 active:text-pink-100/70 dark:bg-pink-700 dark:hover:bg-pink-600 dark:active:bg-pink-700 dark:active:text-pink-100/70",
  secondary:
    "bg-pink-500 font-medium text-pink-900 hover:bg-pink-600 active:bg-pink-600 active:text-pink-900/60 dark:bg-pink-800/50 dark:text-pink-300 dark:hover:bg-pink-800 dark:hover:text-pink-50 dark:active:bg-pink-800/50 dark:active:text-pink-50/70",
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

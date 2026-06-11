"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white-pure text-black-rich hover:bg-white-soft border border-white-pure",
  secondary:
    "bg-gray-900 text-white-soft hover:bg-gray-800 border border-gray-800",
  ghost: "bg-transparent text-white-soft hover:text-white-pure",
  outline:
    "bg-transparent text-white-soft border border-gray-600 hover:border-white-pure hover:text-white-pure",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      className = "",
      children,
      href,
      external,
      ...props
    },
    ref
  ) => {
    const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${variants[variant]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
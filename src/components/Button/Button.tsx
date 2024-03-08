import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

type Props = {
    children: ReactNode | string;
    className?: string;
    fullWidth?: boolean;
    outlined?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    variant?: "primary" | "google" | "facebook";
};
export default function Button({ children, className = "", fullWidth, outlined, type, variant = "primary" }: Props) {
    return (
        <button
            type={type}
            className={clsx(
                styles.button,
                className,
                fullWidth && [styles.fullWidth],
                outlined && [styles.outlined],
                variant === "primary" && "bg-blue-100",
                variant === "google" && "bg-red-100",
                variant === "facebook" && "bg-facebook"
            )}
        >
            {variant === "facebook" && <FaFacebookF className="text-white h-6 w-6 mr-2" />}
            {variant === "google" && <FaGoogle className="text-white h-6 w-6 mr-2" />}
            {children}
        </button>
    );
}

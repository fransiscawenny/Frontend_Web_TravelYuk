import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

type Props = {
    children: string;
    className?: string;
    fullWidth?: boolean;
    outlined?: boolean;
};
export default function Button({ children, className = "", fullWidth, outlined }: Props) {
    return (
        <button
            className={classNames(styles.button, className, {
                [styles.fullWidth]: fullWidth,
                [styles.outlined]: outlined,
            })}
        >
            {children}
        </button>
    );
}

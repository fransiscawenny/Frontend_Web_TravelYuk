import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
    children: ReactNode;
};

export default function index({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <footer></footer>
        </>
    );
}

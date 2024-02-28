import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: ReactNode;
};

export default function index({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

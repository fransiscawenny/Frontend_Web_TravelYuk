import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type Props = {
    children: ReactNode;
    noFooter?: boolean;
};

export default function Layout({ children, noFooter }: Props) {
    return (
        <>
            <Header />
            {children}
            {!noFooter && <Footer />}
        </>
    );
}

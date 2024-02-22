import React from "react";
import Image from "next/image";
import traveloLogo from "public/assets/travelo-logo-header.png";
import Container from "components/Container";
import Search from "./Search";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="48" width="182" />
                        <Search />
                    </div>
                    <div className="flex">
                        <Nav />
                    </div>
                </div>
            </Container>
        </header>
    );
}

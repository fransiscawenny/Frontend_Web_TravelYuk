import React from "react";
import styles from "./Footer.module.css";
import Container from "components/Container";
import Image from "next/image";
import traveloLogo from "public/assets/travelo-logo-footer.png";
import FooterInfo from "./FooterInfo";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image src={traveloLogo} alt="Travelo Logo" placeholder="blur" height="98" width="136" />
                    </figure>
                    <div className="flex flex-1 justify-between ml-[106px]">
                        <FooterInfo
                            title="Info"
                            content={[
                                { label: "Tentang kami", href: "/" },
                                { label: "Testimonial", href: "/" },
                                { label: "Kontak", href: "/" },
                            ]}
                        />
                        <FooterInfo
                            title="Peusahaan"
                            content={[
                                { label: "Syarat & Ketentuan", href: "/" },
                                { label: "Kebijakan privasi", href: "/" },
                                { label: "Blog", href: "/" },
                                { label: "Bantuan pelayanan", href: "/" },
                            ]}
                        />
                        <FooterInfo
                            title="Kontak"
                            content={[
                                "Jl. Dago No.3A",
                                "Jakarta, DKI Jakarta",
                                "Indonesia",
                                "(822)9090999",
                                "contact@mail.com",
                            ]}
                        />
                    </div>
                </div>
            </Container>

            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">
                    Copyright 2024 TravelYuk. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

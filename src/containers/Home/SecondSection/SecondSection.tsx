import React from "react";
import styles from "./SecondSection.module.css";
import Container from "components/Container/Container";
import PromoCarousel from "./PromoCarousel/PromoCarousel";
import "react-multi-carousel/lib/styles.css";
import Packages from "./Packages/Packages";
import Categories from "./Categories/Categories";
import Testimonials from "./Testimonials/Testimonials";

export default function SecondSection() {
    return (
        <section className={styles.section}>
            <Container>
                <PromoCarousel />
                <Packages />
                <Categories />
                <Testimonials />
            </Container>
        </section>
    );
}

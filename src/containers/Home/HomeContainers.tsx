import React from "react";
import Layout from "components/Layout/Layout";
import TopSection from "./TopSection/TopSection";
import SecondSection from "./SecondSection/SecondSection";

export default function HomeContainers() {
    return (
        <Layout>
            <TopSection />
            <SecondSection />
        </Layout>
    );
}

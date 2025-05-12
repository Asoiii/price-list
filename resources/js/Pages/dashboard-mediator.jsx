import React from "react";
import { Navbar8 } from "./beranda/Navbar8";
import { Header5 } from "./beranda/Header5";
import { Layout16 } from "./beranda/Layout16";
import { Layout239 } from "./beranda/Layout239";
import { Layout240 } from "./beranda/Layout240";
import { Testimonial6 } from "./beranda/Testimonial6";
import { Cta13 } from "./beranda/Cta13";
import { Contact18 } from "./beranda/Contact18";
import { useCompany } from "@/hooks/useCompany";

const DashboardMediator = () => {
    const { company, loading, error } = useCompany();

    if (loading) {
        return <div className="loading">Loading company data...</div>;
    }

    if (error) {
        console.error("Error loading company data:", error);
    }

    return (
        <>
            <Navbar8 companyData={company} />
            <Header5 companyData={company} />
            <Layout16 companyData={company} />
            <Layout239 companyData={company} />
            <Layout240 companyData={company} />
            <Testimonial6 />
            <Cta13 />
            <Contact18 companyData={company} />
        </>
    );
};

export default DashboardMediator;

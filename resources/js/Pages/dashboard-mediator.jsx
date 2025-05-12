// import { Contact18 } from "@/Components/beranda/Contact18";
// import { Cta13 } from "@/Components/beranda/Cta13";
// import { Header5 } from "@/Components/beranda/Header5";
// import { Layout16 } from "@/Components/beranda/Layout16";
// import { Layout239 } from "@/Components/beranda/Layout239";
// import { Layout240 } from "@/Components/beranda/Layout240";
// import { Navbar8 } from "@/Components/beranda/Navbar8";
// import { Testimonial6 } from "@/Components/beranda/Testimonial6";

import React from "react";
import { Navbar8 } from "./beranda/Navbar8";
import { Header5 } from "./beranda/Header5";
import { Layout16 } from "./beranda/Layout16";
import { Layout239 } from "./beranda/Layout239";
import { Layout240 } from "./beranda/Layout240";
import { Testimonial6 } from "./beranda/Testimonial6";
import { Cta13 } from "./beranda/Cta13";
import { Contact18 } from "./beranda/Contact18";

const DashboardMediator = () => {
    return (
        <>
            <Navbar8 />
            <Header5 />
            <Layout16 />
            <Layout239 />
            <Layout240 />
            <Testimonial6 />
            <Cta13 />
            <Contact18 />
        </>
    );
};

export default DashboardMediator;

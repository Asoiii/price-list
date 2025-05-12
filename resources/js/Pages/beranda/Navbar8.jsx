"use client";

import NavLink from "@/Components/NavLink";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 991px)");
    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const openOnMobileDropdownMenu = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const openOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(true);
    };
    const closeOnDesktopDropdownMenu = () => {
        !isMobile && setIsDropdownOpen(false);
    };
    const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
    const animateMobileMenuButtonSpan = isMobileMenuOpen
        ? ["open", "rotatePhase"]
        : "closed";
    const animateDropdownMenu = isDropdownOpen ? "open" : "close";
    const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
    return {
        toggleMobileMenu,
        openOnDesktopDropdownMenu,
        closeOnDesktopDropdownMenu,
        openOnMobileDropdownMenu,
        animateMobileMenu,
        animateMobileMenuButtonSpan,
        animateDropdownMenu,
        animateDropdownMenuIcon,
    };
};

export function Navbar8() {
    const useActive = useRelume();
    return (
        <section
            id="relume"
            className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
        >
            <div className="mx-auto flex size-full max-w-full items-center justify-between">
                <a href="#">
                    <img
                        src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                        alt="Logo image"
                    />
                </a>
                <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pt-4 pb-24 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
                    <div className="flex flex-col items-center lg:flex-row">
                        <a
                            href="#"
                            className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
                        >
                            Beranda Utama
                        </a>
                        <a
                            href="#"
                            className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
                        >
                            Tentang Kami
                        </a>
                        <a
                            href="#"
                            className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
                        >
                            Kontak Kami
                        </a>
                        <div
                            onMouseEnter={useActive.openOnDesktopDropdownMenu}
                            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
                        >
                            <button
                                className="relative flex w-full items-center justify-between py-3 text-md whitespace-nowrap lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                                onClick={useActive.openOnMobileDropdownMenu}
                            >
                                <span>Artikel Terbaru</span>
                                <motion.span
                                    animate={useActive.animateDropdownMenuIcon}
                                    variants={{
                                        rotated: { rotate: 180 },
                                        initial: { rotate: 0 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <RxChevronDown />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                <motion.nav
                                    variants={{
                                        open: {
                                            opacity: 1,
                                            height: "var(--height-open, auto)",
                                            display: "block",
                                        },
                                        close: {
                                            opacity: 0,
                                            height: "var(--height-close, 0)",
                                            display: "none",
                                        },
                                    }}
                                    animate={useActive.animateDropdownMenu}
                                    initial="close"
                                    exit="close"
                                    transition={{ duration: 0.2 }}
                                    className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                                >
                                    <div className="mx-auto flex size-full max-w-full items-center justify-between">
                                        <div className="flex w-full flex-col lg:flex-row">
                                            <div className="auto-cols-1 grid flex-1 grid-cols-1 gap-x-8 gap-y-6 py-4 sm:py-8 md:grid-cols-3 lg:gap-y-0 lg:pr-8">
                                                <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                                                    <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                        Informasi Penting
                                                    </h4>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 1"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Berita Terkini
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Dapatkan
                                                                informasi
                                                                terbaru di sini
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 2"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Tips Jual Beli
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Strategi terbaik
                                                                untuk transaksi
                                                                yang sukses
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 3"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Daftar Harga
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Cek harga mobil
                                                                terkini dengan
                                                                mudah
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 4"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Blog Kami
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Baca artikel
                                                                menarik tentang
                                                                otomotif
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                                                    <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                        Halaman Lain
                                                    </h4>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 5"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Tentang Kami
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Pelajari lebih
                                                                lanjut tentang
                                                                kami
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 6"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Dukungan
                                                                Pelanggan
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Hubungi kami
                                                                untuk bantuan
                                                                lebih lanjut
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 7"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Syarat dan
                                                                Ketentuan
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Ketahui lebih
                                                                lanjut tentang
                                                                kebijakan kami
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 8"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Kebijakan
                                                                Privasi
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Lihat bagaimana
                                                                kami melindungi
                                                                data Anda
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                                                    <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                        Page group three
                                                    </h4>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 9"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Page Nine
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Baca artikel
                                                                terbaru dari
                                                                blog kami
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 10"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Page Ten
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Temukan artikel
                                                                yang banyak
                                                                dibaca
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 11"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Page Eleven
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Lorem ipsum
                                                                dolor sit amet
                                                                consectetur elit
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                    >
                                                        <div className="flex size-6 flex-col items-center justify-center">
                                                            <img
                                                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                alt="Icon 12"
                                                                className="shrink-0"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col items-start justify-center">
                                                            <h5 className="font-semibold">
                                                                Page Twelve
                                                            </h5>
                                                            <p className="hidden text-sm md:block">
                                                                Lorem ipsum
                                                                dolor sit amet
                                                                consectetur elit
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="relative mb-6 flex flex-1 p-6 md:py-8 md:pl-8 lg:mb-0 lg:max-w-[14rem]">
                                                <div className="auto-cols-1 relative z-10 grid w-full auto-rows-max grid-cols-1 grid-rows-[max-content] gap-4">
                                                    <div className="flex max-w-[32rem] flex-col items-start">
                                                        <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                            Page group four
                                                        </h4>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="text-sm"
                                                    >
                                                        Link one
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-sm"
                                                    >
                                                        Link two
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-sm"
                                                    >
                                                        Link three
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-sm"
                                                    >
                                                        Link four
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-sm"
                                                    >
                                                        Link five
                                                    </a>
                                                </div>
                                                <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.nav>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button title="Login" variant="secondary" size="sm">
                            <NavLink
                                href={route("login")}
                                active={route().current("login")}
                            >
                                Login
                            </NavLink>
                        </Button>
                        <Button title="SingUp" size="sm">
                            <NavLink
                                href={route("register")}
                                active={route().current("register")}
                            >
                                Daftar
                            </NavLink>
                        </Button>
                    </div>
                </div>
                <button
                    className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
                    onClick={useActive.toggleMobileMenu}
                >
                    <motion.span
                        className="my-[3px] h-0.5 w-6 bg-black"
                        animate={useActive.animateMobileMenuButtonSpan}
                        variants={{
                            open: { translateY: 8, transition: { delay: 0.1 } },
                            rotatePhase: {
                                rotate: -45,
                                transition: { delay: 0.2 },
                            },
                            closed: {
                                translateY: 0,
                                rotate: 0,
                                transition: { duration: 0.2 },
                            },
                        }}
                    />
                    <motion.span
                        className="my-[3px] h-0.5 w-6 bg-black"
                        animate={useActive.animateMobileMenu}
                        variants={{
                            open: { width: 0, transition: { duration: 0.1 } },
                            closed: {
                                width: "1.5rem",
                                transition: { delay: 0.3, duration: 0.2 },
                            },
                        }}
                    />
                    <motion.span
                        className="my-[3px] h-0.5 w-6 bg-black"
                        animate={useActive.animateMobileMenuButtonSpan}
                        variants={{
                            open: {
                                translateY: -8,
                                transition: { delay: 0.1 },
                            },
                            rotatePhase: {
                                rotate: 45,
                                transition: { delay: 0.2 },
                            },
                            closed: {
                                translateY: 0,
                                rotate: 0,
                                transition: { duration: 0.2 },
                            },
                        }}
                    />
                </button>
            </div>
            <AnimatePresence>
                <motion.div
                    variants={{
                        open: { height: "100dvh" },
                        close: { height: "auto" },
                    }}
                    animate={useActive.animateMobileMenu}
                    initial="close"
                    exit="close"
                    className="absolute top-full right-0 left-0 w-full overflow-hidden lg:hidden"
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        variants={{ open: { y: 0 }, close: { y: "-100%" } }}
                        animate={useActive.animateMobileMenu}
                        initial="close"
                        exit="close"
                        transition={{ duration: 0.4 }}
                        className="absolute top-0 right-0 left-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pt-4 pb-8"
                    >
                        <div className="flex flex-col">
                            <a href="#" className="block py-3 text-md">
                                Link One
                            </a>
                            <a href="#" className="block py-3 text-md">
                                Link Two
                            </a>
                            <a href="#" className="block py-3 text-md">
                                Link Three
                            </a>
                            <div>
                                <button
                                    className="relative flex w-full items-center justify-between py-3 text-md whitespace-nowrap lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                                    onClick={useActive.openOnMobileDropdownMenu}
                                >
                                    <span>Link Four</span>
                                    <motion.span
                                        animate={
                                            useActive.animateDropdownMenuIcon
                                        }
                                        variants={{
                                            rotated: { rotate: 180 },
                                            initial: { rotate: 0 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <RxChevronDown />
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    <motion.nav
                                        variants={{
                                            open: {
                                                opacity: 1,
                                                height: "var(--height-open, auto)",
                                                display: "block",
                                            },
                                            close: {
                                                opacity: 0,
                                                height: "var(--height-close, 0)",
                                                display: "none",
                                            },
                                        }}
                                        animate={useActive.animateDropdownMenu}
                                        initial="close"
                                        exit="close"
                                        transition={{ duration: 0.2 }}
                                        className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                                    >
                                        <div className="mx-auto flex size-full max-w-full items-center justify-between">
                                            <div className="flex w-full flex-col lg:flex-row">
                                                <div className="auto-cols-1 grid flex-1 grid-cols-1 gap-x-8 gap-y-6 py-4 sm:py-8 md:grid-cols-3 lg:gap-y-0 lg:pr-8">
                                                    <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                                                        <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                            Page group one
                                                        </h4>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 1"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page One
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 2"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Two
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 3"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Three
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 4"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Four
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                                                        <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                            Page group two
                                                        </h4>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 5"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Five
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 6"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Six
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 7"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Seven
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 8"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Eight
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                                                        <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                            Page group three
                                                        </h4>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 9"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Nine
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 10"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Ten
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 11"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Eleven
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                                        >
                                                            <div className="flex size-6 flex-col items-center justify-center">
                                                                <img
                                                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                                                    alt="Icon 12"
                                                                    className="shrink-0"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-start justify-center">
                                                                <h5 className="font-semibold">
                                                                    Page Twelve
                                                                </h5>
                                                                <p className="hidden text-sm md:block">
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet
                                                                    consectetur
                                                                    elit
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="relative mb-6 flex flex-1 p-6 md:py-8 md:pl-8 lg:mb-0 lg:max-w-[14rem]">
                                                    <div className="auto-cols-1 relative z-10 grid w-full auto-rows-max grid-cols-1 grid-rows-[max-content] gap-4">
                                                        <div className="flex max-w-[32rem] flex-col items-start">
                                                            <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                                                                Page group four
                                                            </h4>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            className="text-sm"
                                                        >
                                                            Link one
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-sm"
                                                        >
                                                            Link two
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-sm"
                                                        >
                                                            Link three
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-sm"
                                                        >
                                                            Link four
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-sm"
                                                        >
                                                            Link five
                                                        </a>
                                                    </div>
                                                    <div className="absolute top-0 right-auto bottom-0 left-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.nav>
                                </AnimatePresence>
                            </div>
                            <div className="mt-6 flex flex-col gap-4">
                                <Button
                                    title="Button"
                                    variant="secondary"
                                    size="sm"
                                >
                                    Button
                                </Button>
                                <Button title="Button" size="sm">
                                    Button
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

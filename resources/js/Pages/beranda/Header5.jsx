"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="relative z-10 container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-2xl lg:text-2xl">
              Selamat datang di Mediator, Solusi Cerdas Anda
            </h1>
            <p className="text-text-alternative md:text-md">
              Mediator adalah platform inovatif yang dirancang khusus untuk
              memudahkan proses jual beli kendaraan. Bergabunglah dengan kami
              dan tingkatkan pengalaman Anda dalam dunia otomotif.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Daftar">Daftar</Button>
              <Button title="Pelajari" variant="secondary-alt">
                Pelajari
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://wallpapers.com/images/featured/mclaren-js7crb2zb9wbk7zk.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}

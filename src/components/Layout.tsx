"use client";

import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "../app/globals.css";

interface LayoutProps {
  children: ReactNode;
  name: string;
}

const Layout: React.FC<LayoutProps> = ({ children, name }) => {
  return (
    <>
      <Helmet>
        <title> {name} | Cornell Data Science</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      {/* header start */}
      <Header />
      {/* header end */}

      {/* body start */}
      <div className="w-full flex flex-col p-5 mt-20 md:p-8 lg:p-36 lg:pl-[12rem]">
        {/* top bar */}
        <div className="mb-4 md:mb-6 lg:mb-10">
          <h1 className="text-5xl md:text-5xl lg:text-7xl">{name}</h1>
        </div>
        {children}
      </div>
      {/* body end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default Layout;

import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoriesHeader from "./CategoriesHeader";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>GameStore Maroc</title>
      </Head>
      <header>
        <Navbar />
        <CategoriesHeader />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

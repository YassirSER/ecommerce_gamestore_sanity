import React, { Suspense } from "react";
import Head from "next/head";

import CategoriesHeader from "./CategoriesHeader";
import { Navbar, Footer, Loading } from "./index";

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
      {/* <Suspense fallback={<Loading />}> */}
      <main className="main-container">{children}</main>
      {/* </Suspense> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

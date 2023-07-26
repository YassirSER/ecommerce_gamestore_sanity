import React, { Suspense } from "react";
import Head from "next/head";
import Script from "next/script";

// import { Helmet } from "react-helmet";

import CategoriesHeader from "./CategoriesHeader";
import { Navbar, Footer, SideMenu } from "./index";
import { useStateContext } from "../app/context/stateContext";

const Layout = ({ children }) => {
  const { showSideMenu } = useStateContext();
  return (
    <div className="layout">
      <Head>
        <title>Digital City</title>
      </Head>
      <header>
        <Navbar />
        {showSideMenu ? <SideMenu /> : <CategoriesHeader />}
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

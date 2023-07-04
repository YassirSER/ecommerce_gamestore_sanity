import React, { Suspense } from "react";
import Head from "next/head";

import CategoriesHeader from "./CategoriesHeader";
import { Navbar, Footer, SideMenu } from "./index";
import { useStateContext } from "../context/stateContext";

const Layout = ({ children }) => {
  const { showSideMenu } = useStateContext();
  return (
    <div className="layout">
      <Head>
        <title>GameStore Maroc</title>
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

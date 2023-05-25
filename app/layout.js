"use client";

import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import Layout from "./components/Layout";
import { StateContext } from "./context/stateContext";
// import {  } from './fonts/metropolis'

const metropolis = localFont({
  src: "./fonts/metropolis/Metropolis-Regular.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={metropolis.className}>
      <body>
        <StateContext>
          <Layout>
            <Toaster />
            {children}
          </Layout>
        </StateContext>
      </body>
    </html>
  );
}

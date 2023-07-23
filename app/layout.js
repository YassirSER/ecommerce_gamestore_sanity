"use client";

import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import { Layout } from "../components/index";
import { StateContext } from "./context/stateContext";
import Script from "next/script";

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
            <NextTopLoader />
            {children}
          </Layout>
        </StateContext>
      </body>
    </html>
  );
}

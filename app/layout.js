"use client";

import "./globals.css";
import { Toaster } from "react-hot-toast";

import Layout from "./components/Layout";
import { StateContext } from "./context/stateContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

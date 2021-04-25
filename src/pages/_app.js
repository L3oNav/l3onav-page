import React, { lazy } from "react";
import { LangProvider } from "../hooks/language";
import "./global.css";

const Layout = () => lazy(() => import("../components/Layout"));

const MyApp = ({ Component, pageProps }) => (
  <LangProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </LangProvider>
);

export default MyApp;

import Layout from "../components/Layout";
import Head from "next/head";
import { LangProvider } from "../hooks/language";
import "./global.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>L3oNav &#916;</title>
    </Head>
    <LangProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LangProvider>
  </>
);

export default MyApp;

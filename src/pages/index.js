import React, { useContext } from "react";
import Head from "next/head";
import InfoUser from "../components/InfoUser/index";
import Biography from "../components/Biography/index";
import LangContext from "../hooks/language";
const Home = (props) => {
  const { title, biography, job } = useContext(LangContext).currentLangData;
  return (
    <>
      <Head>
        <title>L3oNav &#916;</title>
      </Head>
      <div>
        <InfoUser job={job} />
        <Biography title={title} biography={biography} />
      </div>
    </>
  );
};

export default Home;

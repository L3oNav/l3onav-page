import React, { useContext } from "react";
import { InfoUser } from "../components/InfoUser/index";
import Biography from "../components/Biography/index";
import LangContext from "../hooks/language";

const Home = (props) => {
  const { title, biography, job } = useContext(LangContext).currentLangData;
  return (
    <div>
      <InfoUser job={job} />
      <Biography title={title} biography={biography} />
      {/*<Certificates />*/}
    </div>
  );
};

export default Home;

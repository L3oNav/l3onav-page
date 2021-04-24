import React, { useContext } from "react";
import { InfoUser } from "../../Components/InfoUser/index";
import Biography from "../../Components/Biography/index";
import LangContext from "../../hooks/language";
//import Certificates from '../../Components/Certificates';

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

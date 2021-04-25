import Layout from "../components/Layout";
import { LangProvider } from "../hooks/language";
import "./global.css";
const MyApp = ({ Component, pageProps }) => {
  return (
    <LangProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LangProvider>
  );
};

export default MyApp;

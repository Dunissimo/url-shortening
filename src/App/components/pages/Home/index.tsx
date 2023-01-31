import { FC } from "react";
import Analytics from "../../elements/Analytics";
import BrandedLinks from "../../elements/BrandedLinks";
import Footer from "../../elements/Footer";
import GetStarted from "../../elements/GetStarted";
import Header from "../../elements/Header";
import Shorten from "../../elements/Shorten";

const Home: FC = () => {
  return (
    <section>
      <Header />
      <BrandedLinks />
      <Shorten />
      <Analytics />
      <GetStarted />
      <Footer />
    </section>
  );
};

export default Home;

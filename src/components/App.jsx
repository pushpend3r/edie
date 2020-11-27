import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Sections
import Main from "./Main";
import Services from "./Services";
import OurWorks from "./OurWorks";
import MyTeam from "./MyTeam";
import Clients from "./Clients";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 750, once: true });

const App = props => {
  return (
    <>
      <Header />
      <div className="space-y-20 mb-20 md:space-y-32 md:mb-32">
        <Main />
        <Services />
        <OurWorks />
        <MyTeam />
        <Clients />
      </div>
      <Footer />
    </>
  );
};

export default App;


import HeroPG from "../components/HeroPG.jsx";
import Services from "../Services.jsx";
import About from "../About.jsx";
import Team from "../Team.jsx";
import Faq from "../Faq.jsx";
import Newsletter from "../Newsletter.jsx";
import Footer from "../Footer.jsx";
import tayariLogo from "../assets/footerimg.png";

import NavBar from "../NavBar.jsx";
import BTT from "../BTT.jsx";

const HOME = () => {
  return (
    <div className="HOME">
      <div className="heropage h-screen relative">
        <NavBar/>
        <HeroPG />
      </div>
      <BTT />
      <Services />
      <About />
      <Team />
      <Faq />
      <Newsletter />
      <Footer img={tayariLogo} />
    </div>
  );
};

export default HOME;

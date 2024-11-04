
import tayariLogo from "../assets/footerimg.png";
import AboutHome from "./PAGESCOMP/AboutHome";
import AbtInfo from "./PAGESCOMP/AbtInfo";
import Footer from '../Footer'
import NavBar from "../NavBar";
import BTT from "../BTT";
const ABOUTPG = () => {
  return (
    <>
    <div className="abthomepage relative">
      <NavBar />
      <AboutHome />
    </div>
    <BTT />
    <AbtInfo />
    <Footer  img = {tayariLogo} />
    </>
  );
};

export default ABOUTPG;

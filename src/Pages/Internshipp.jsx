
import tayariLogo from "../assets/footerimg.png"
import InternP from "./PAGESCOMP/Internship";
import Footer from "../Footer";
import InternWel from "./PAGESCOMP/InternWel";
import NavBar from "../NavBar";
import BTT from "../BTT";


const INTERNSHIP = () => {
  return (
    <div className="internship">
      <div className="inthomepage relative">
        <NavBar />
        <InternP />
       <BTT />
        <InternWel />
      </div>
      <Footer img = {tayariLogo} />
    </div>
  );
};

export default INTERNSHIP;

import PartnerLogo from "./components/PartnersLogo";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    
      <div className="partner text-center py-10 text-3xl  bg-white">
        <h2 className="text-black font-semibold pb-5 opacity-90">Our Partners</h2>
        <Marquee>
        <PartnerLogo />
        </Marquee>
      </div>
   
  );
};
export default Partners;

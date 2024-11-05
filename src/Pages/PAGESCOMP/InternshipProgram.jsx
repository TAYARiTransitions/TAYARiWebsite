import InternshipPic from "../../assets/internship2.png";
import { Link } from "react-router-dom";
const IntProg = () => {
  return (
    <div className="intProg">
      <div className="intProgdet text-center px-10">
        <Link to="/TechnologyInternship">
          <div className="intProgInd bg-white pt-20 pb-10 border relative height">
            <div className="overlaytext px-4 absolute top-5 md:top-5 right-0 left-0  text-md   text-black font-semibold ">
              <p id="showtxt">
                The Tech team manages technology resources, systems, and
                processes, ensuring smooth operations and supporting the
                implementation of tech solutions for Tayari Transitions. Our
                interns have vast technical skills that enable them to not only
                tackle technical issues but also develop preemptive solutions
                that enhance the experience of the T.T community.
              </p>
            </div>
            <div className="intProgItem  rounded-md ">
              <div className="opac">
                <h2 className=" text-2xl sm:text-3xl lg:text-4xl  text-black font-semibold pb-7 opacity-90 ">
                  Technology
                </h2>
                <p>__________________</p>
              </div>
              <div className="imgTx absolute bottom-0 pb-10">
                <div className="redirect flex items-center flex-col">
                  <img src={InternshipPic} alt="" className="w-2/4 "  id="img"/>
                </div>
                <p className="pri3 font-semibold text-xl">Learn More</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/PartnershipEngagement">
          <div className="intProgInd bg-white pt-20 pb-10 border relative height">
            <div className="overlaytext px-4 absolute top-5 md:top-10 right-0 left-0  text-md   text-black font-semibold ">
              <p id="showtxt">
              This combined role will encompass administrative support, partnership development, event coordination, and community-building activities.

              </p>
            </div>
            <div className="intProgItem  rounded-md ">
              <div className="opac">
                <h2 className=" text-2xl sm:text-3xl lg:text-4xl  text-black font-semibold pb-7 opacity-90 ">
                  Administrative & <br />Partnerships <br /> Engagement
                </h2>
                <p>__________________</p>
               
              </div>
              <div className="imgTx absolute bottom-0 pb-10">
                <div className="redirect flex items-center flex-col">
                  <img src={InternshipPic} alt="" className="w-2/4 " id="img" />
                </div>
                <p className="pri3 font-semibold text-xl">Learn More</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/FundManagement">
          <div className="intProgInd bg-white pt-20 pb-10 border relative height">
            <div className="overlaytext px-4 absolute top-5 md:top-10 right-0 left-0  text-md   text-black font-semibold ">
              <p id="showtxt">
                The Fund Management team focuses on financial planning, budget
                management, and fundraising efforts, ensuring that financial
                resources are effectively allocated to support Tayari
                Transitions' growth and impact.
              </p>
            </div>
            <div className="intProgItem  rounded-md ">
              <div className="opac">
                <h2 className=" text-2xl sm:text-3xl lg:text-4xl  text-black font-semibold pb-7 opacity-90 ">
                  Fund Management
                </h2>
                <p>__________________</p>
                
              </div>
              <div className="imgTx absolute bottom-0 pb-10">
                <div className="redirect flex items-center flex-col">
                  <img src={InternshipPic} alt="" className="w-2/4 " id="img" />
                </div>
                <p className="pri3 font-semibold text-xl">Learn More</p>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default IntProg;

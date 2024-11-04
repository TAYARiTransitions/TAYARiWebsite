import NavBar from "../../NavBar";
import Footer from "../../Footer";
import tayariLogo from "../../assets/footerimg.png"
import { Link } from "react-router-dom";
import BTT from '../../BTT'
const FundManagement = () => {
    return (
        <>
            <div className="fundManagementhomepage relative">
                <div className="fundManagementinternP min-h-screen flex justify-center items-center">
                    <h1 className="text-white text-4xl sm:text-5xl font-semibold text-center ">Fund Management Internship</h1>
                </div>
            </div>
            <NavBar />
            <BTT/>
            <div className="abtInfo flex flex-col justify-center content-center items-center bg-white pt-10 pb-14 relative">
                <div className=" w-full ">
                    <h2 className="text-center text-black opacity-90 text-2xl pb-10">
                        Discover our Internship opportunities in Fund Management.
                    </h2>
                    <div className="info pb-10 text-black opacity-90 text-2xl w-full">
                        <div className=" flex  justify-center content-center items-center w-full px-5">
                            <div className="max-w-6xl">
                                <p className="pb-5 leading-10  text-lg">Applications are open from October 13,  2024 through to December 13, 2024. Applications are reviewed on a rolling basis, so we encourage applicants to apply early.</p>
                                <p className="pb-5 leading-10  text-lg">Participation requires that you be an African, residing in Africa, with a computer system and access to internet connectivity to work remotely.</p>
                                <p className="pb-5 leading-10  text-lg">This role is for undergraduate 3rd year students or early career professionals who are innovative, self-motivated, impact-driven, and seeking to make a significant difference in the landscape of empowerment for the young African.</p>
                                <p className="pb-5  text-lg"><b>Internship duration is 6-months, starting from February 3, 2024 - August 3, 2024</b></p>
                                <p className="pb-5 leading-10  text-lg">Tayari Transitions, we are driven by a singular purpose: to bridge the gap between potential and opportunity for Africa's youth. Our mission is to dismantle the systemic barriers—social, economic, and institutional—that prevent young people from reaching their full potential. We believe that Africa’s youth, her most valuable asset, deserve a system that empowers them to thrive, and we are committed to providing that.</p>
                                <p className="pb-5 leading-10  text-lg">To apply, you will need an up-to-date Resume, a current transcript in English, and stable internet access. All documents uploaded should be uploaded in PDF.</p>
                                <p className="pb-5 leading-10  text-lg">Please ensure that your anticipated graduation dates (in MM/YY) and other relevant proficiencies are clearly outlined in your application and Resume.</p>
                            </div>
                        </div>
                        <div className=" flex  justify-center content-center items-center w-full px-5 bg-gray-100 py-10">
                            <div className="max-w-6xl">
                                <h2 className="pb-5 text-2xl"><b>Minimum qualifications:</b></h2>
                                <ul className="list-disc pl-14 leading-10  text-lg">
                                    <li>Strong analytical and financial modeling skills.</li>
                                    <li>Experience with budgeting, financial reporting, and grant management is an asset.</li>
                                    <li className="pb-5">
                                        Currently pursuing or recently completed a degree in Finance, Accounting, Business Administration, or a related field.
                                    </li>
                                </ul>
                                <h2 className="pb-5 text-2xl"><b>Preferred qualifications:
                                </b></h2>
                                <ul className="list-disc pl-14 leading-10  text-lg">
                                    <li>Strong communication and interpersonal skills, with the ability to engage with investors and stakeholders.</li>
                                    <li className="pb-5">Passion for social impact and supporting mission-driven organizations.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" flex  justify-center content-center items-center w-full px-5  py-10">
                            <div className="max-w-6xl">
                                <h2 className="pb-5 text-2xl"><b>About the job:</b></h2>
                                <ul className="list-disc pl-14 leading-10  text-lg">
                                    <li>Our Interns have the unique opportunity to address the lack of structured support systems that enable Africa's youth to navigate critical transitions in their personal, educational, and professional lives, leveraging from their experiences as young Africans themselves. By addressing key barriers—such as societal pressures, economic constraints, institutional inflexibility, and limited access to transformative skills and resources - our Interns develop learning structures that provide young people with the tools, networks, and mindset needed to unlock their full potential. It offers a holistic approach that empowers individuals to manage life changes, build resilience, and seize opportunities that lead to personal and professional growth.</li>
                                    <li>As an Intern, you not only benefit from the training resources, you also have direct access to Tayari's trainers and coaches. Your time and effort are further incentivized monetarily</li>
                                    <li className="pb-5">
                                        We exist to bridge the gap between potential and opportunity, helping young people overcome systemic obstacles and thrive in transformative sectors.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" flex  justify-center content-center items-center w-full px-5  py-10 bg-gray-100">
                            <div className="max-w-6xl">
                                <h2 className="pb-5 text-2xl"><b>Responsibilities:</b></h2>
                                <ul className="list-disc pl-14 leading-10  text-lg">
                                    <li>Assist in developing financial plans and budgets, monitoring performance and ensuring efficient resource use.</li>
                                    <li>Research funding opportunities and support the creation of investment strategies.</li>
                                    <li>
                                        Manage funds and ensure compliance with donor and investor guidelines.
                                    </li>
                                    <li>
                                        Prepare financial reports and analyses to provide insights into financial health and performance.
                                    </li>
                                    <li>Support investor relations and fundraising efforts, providing compelling financial information.</li>
                                    <li>
                                        Identify financial risks and develop mitigation strategies to protect long-term sustainability.
                                    </li>
                                    <li>
                                        Collaborate with internal teams to align financial strategies with broader organizational goals.

                                    </li>
                                    <li className="pb-5">
                                        Monitor and evaluate financial management strategies, ensuring alignment with objectives.
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex  justify-center content-center pt-5  px-5">
                            <div className="max-w-6xl">
                                <p className=" text-sm py-5 "><Link to='' className=" text-white p-3 rounded-sm pri2">Apply Now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer img={tayariLogo} />
        </>
    );
}

export default FundManagement;
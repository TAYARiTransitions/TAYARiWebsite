import NavBar from "../NavBar";
import CompTwo from "./AboutPageComp/CompTwo";
import Footer from "../Footer";

const PROGRAMMES = () => {
    return (
        <>
        <div className="internP min-h-screen flex justify-center items-center">
            <h1 className="text-white text-3xl sm:text-6xl font-semibold ">Our Programs</h1>
            <NavBar/>
        </div>
        <CompTwo />
        <Footer />
        </>
        
    );
}

export default PROGRAMMES;
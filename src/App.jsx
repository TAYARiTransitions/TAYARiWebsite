import HOME from "./Pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPg from "./components/ErrorPg.jsx";
import ABOUTPG from "./Pages/AboutPG.jsx";
import INTERNSHIP from "./Pages/Internshipp.jsx";
import PROGRAMMES from "./Pages/Programme.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import TechnologyInternship from "./Pages/InternPage/TechnologyInternship.jsx";
import BusinessDevelopment from "./Pages/InternPage/BusinessDevelopment.jsx";
import PartnershipEngagement from "./Pages/InternPage/PartnershipEngagement.jsx";
import FundManagement from "./Pages/InternPage/FundManagement.jsx";
import JoinUs from "./Pages/JoinUs.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [homeError, setHomeError] = useState(false);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Home Route with Error Handling */}
          <Route
            path="/"
            element={
              homeError ? (
                <ErrorPg  />
              ) : (
                <HOME />
              )
            }
          />
          
          <Route path = '/Join Us' element = {<JoinUs />}/>

          {/* Other Routes */}
          <Route path="/AboutUs" element={<ABOUTPG />} />
          <Route path="/OurProgrammes" element={<PROGRAMMES />} />
          <Route path="/OurInternship" element={<INTERNSHIP />} />


          <Route path="/TechnologyInternship" element={<TechnologyInternship />} />
          <Route path="/BusinessDevelopment" element={<BusinessDevelopment />} />
          <Route path="/PartnershipEngagement" element={<PartnershipEngagement />} />
          <Route path="/FundManagement" element={<FundManagement />} />

          {/* Fallback for Undefined Routes */}
          <Route path="*" element={<ErrorPg message="Page not found." />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

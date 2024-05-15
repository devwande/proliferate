import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogin from "./pages/HomeLogin";
import Registration from "./pages/registration";
import PersonalInformation from "./pages/PersonalInformation";
import AcademicDetails from "./pages/AcademicDetails";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
           <Route path="/" element={<HomeLogin />} />
           <Route path="/registration" element={<Registration />} />
           <Route path="/personalInformation" element={<PersonalInformation />} />
           <Route path="/academicDetails" element={<AcademicDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

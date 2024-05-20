import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogin from "./pages/HomeLogin";
import Registration from "./pages/registration";
import PersonalInformation from "./pages/PersonalInformation";
import AcademicDetails from "./pages/AcademicDetails";
import Preferences from "./pages/Preferences";
import LearningGoals from "./pages/LearningGoals";
import TermsAndConditions from "./pages/TermsAndConditions";

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
           <Route path="/preferences" element={<Preferences />} />
           <Route path="/learningGoals" element={<LearningGoals />} />
           <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

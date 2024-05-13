import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogin from "./pages/HomeLogin";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
           <Route path="/" element={<HomeLogin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

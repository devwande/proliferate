import Home from "./pages/home";
import Login from "./pages/auth/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

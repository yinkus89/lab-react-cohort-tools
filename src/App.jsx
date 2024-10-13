import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        {/* Setting up routes for each page */}
        <Routes>
          {/* Route for HomePage */}
          <Route path="/" element={<HomePage />} />

          {/* Route for StudentDetailsPage with dynamic studentId */}
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />

          {/* Route for UserProfilePage */}
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/TopNavbar";
import { LeftSideNav } from "./components/LeftSideNav";
import GlobalPage from "./pages/GlobalPage";
import { Breadcrumbs } from "@mui/material";
import BreadcrumbsExample from "./components/Breadcrumb";

function App() {
  return (
    <Router>
      <div className="w-full h-screen flex flex-col">
        <Navbar />
      
        <div className="flex flex-1 overflow-hidden">
          {/* Left Side Navigation */}
          <LeftSideNav />

          {/* Main Page Content */}
          <div className="flex-1 overflow-auto bg-gray-50 p-3">
            {/* <Breadcrumbs/> */}
            <Routes>
              <Route path="/" element={<GlobalPage />} />
              {/* <Route path="/global-prev" element={<GlobalPage />} />
              <Route
                path="/clinical-trial"
                element={<ClinicalDashboardPage />}
              /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

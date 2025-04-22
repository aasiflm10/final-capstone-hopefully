import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, FlaskConical } from "lucide-react";

export function LeftSideNav() {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `flex items-center justify-center h-[70px] w-full hover:bg-blue-800 ${
      pathname === path ? "bg-blue-900 text-white" : "text-white"
    }`;

  return (
    <div className="h-full w-[70px] bg-[#043365] flex flex-col items-center pt-4">
      <Link to="/" className={linkClass("/")}>
        <Home />
      </Link>
      <Link to="/global-prev" className={linkClass("/global-prev")}>
        <BarChart2 />
      </Link>
      <Link to="/clinical-trial" className={linkClass("/clinical-trial")}>
        <FlaskConical />
      </Link>
    </div>
  );
}
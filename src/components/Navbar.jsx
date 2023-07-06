import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Navbar.css";

// function Navbar() {
//   return (
//     <div className="navbar_cont">
//       <div className="links_position">
//         <Link to="/" className="links">
//           Home
//         </Link>
//         <span className="link_span">/ </span>
//         <Link to="/projects" className="links">
//           Projects
//         </Link>
//         <span className="link_span">/ </span>
//         <Link to="/experience" className="links">
//           Experience
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

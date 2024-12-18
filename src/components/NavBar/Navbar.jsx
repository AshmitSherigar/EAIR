import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate , useLocation , Link} from "react-router-dom";


function Navbar() {
  const [isMenuOpen ,isSetMenuOpen] = useState(true);
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {

    if (location.pathname === "/menu") {
      isSetMenuOpen(false);
    }
    else{
      isSetMenuOpen(true);
    }

  }, [location]);

  return (
    <div className="navigation">
      <div className="nav-logo">
        <Link className="nav-links" to={"/"}>
          <h1>EAIЯ</h1>
        </Link>
      </div>
      <div className="nav-items">
        <Link className="nav-links" to={isMenuOpen ? "/menu" : "/"} >
          <h4>{isMenuOpen ? "Menu" : "Close"}</h4>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

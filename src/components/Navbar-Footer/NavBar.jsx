import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import logo from "../../assets/images/logo-EFFICOM.png";




const NavBar = () =>{
    return(
        <header>
          <nav className="navbar navbar-expand navbar-dark">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>


              
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/candidature"} className="nav-link">
                    Candidatures
                  </Link>
                </li>
  
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Se connecter
                  </Link>
                </li>
              </div>
            ){"}"}
          </nav>
        </header>
    );
};

export default NavBar;
import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router";
import style from "./nav.module.css";

const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <div className="top-bar">
          <span>Certified - ISO-9001 : 2015</span>
          <span>Email: info@digitechmate.com</span>
          <span>Call: +91-9990 140 888</span>
        </div>

        <div className="main-bar">
          <div>
            <Link className="logo" to="/">
              <img src="/image.png" alt="Brand-logo" />
            </Link>
          </div>

          <div className="nav-links">
            <Link to="/python">Python-Dev</Link>
            <Link to="/MeanStack">Mean-Dev</Link>
            <Link to="/FrontEnd">FrontEnd-Dev</Link>
            <Link to="/MernStack">Mern-Dev</Link>
            <Link to="/uidev">UI-Dev</Link>
            <Link to="/BackendDev">BackendDev</Link>
            <Link to="/BlockchainDeveloper">BlockChain-Dev</Link>
            <button className="live-chat">
              <Link to="/">New Courses</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

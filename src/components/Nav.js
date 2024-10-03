import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            handleShow(true);
        }else{
            handleShow(false);
        }
    });
    return () => {
        window.removeEventListener("scroll", () => {});
    }
  },[])
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/800px-National_Basketball_Association_logo.svg.png"
        className="nav__avatar"
      />
    </nav>
  );
}

export default Nav;

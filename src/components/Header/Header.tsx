"use client";

import headerStyles from "./Header.module.css";
import buttonStyles from "../Button/Button.module.css";
import logoImg from "../../../public/logo_2.png";
import Image from "next/image";
import { Navbar } from "../NavBar/Navbar";
import { Button } from "../Button/Button";
import { useState } from "react";
import Link from "next/link";


interface HeaderProps {
  className?: string;
}

export const Header:React.FC<HeaderProps> = ({className}) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  }
  

  return (
    <header className={`${className} ${headerStyles.header}`}>

      {/* {icon for smaller screens} */}

      <div className={headerStyles.hamburgerMenu} onClick={toggleSideBar}>
        <div className={headerStyles.line}></div>
        <div className={headerStyles.line}></div>
        <div className={headerStyles.line}></div>
      </div>

      {/* Sidebar */}
      {isSideBarOpen && (
        
          <div className={headerStyles.envelope}>
              {/* <div className={headerStyles.sidebar}>
                <button className={headerStyles.closeButton} onClick={toggleSideBar}>
                  &times;
                </button>
                
                <Navbar isSidebar={isSideBarOpen}/>

                <Button title="Apply" className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonGreen}`} />

              </div> */}
              <div className={headerStyles.body}>
                
                <button className={headerStyles.closeButton} onClick={toggleSideBar}>
                  &times;
                </button>

                <Navbar isSidebar={isSideBarOpen}/>
                <div className={headerStyles.envelopeButtonContainer}>
                  <Button title="Apply" className={`${buttonStyles.envelopeButton} ${buttonStyles.mainButtonGreen}`} />
                </div>
                
              </div>
              
              <div className={headerStyles.flapLeft}></div>
              <div className={headerStyles.flapRight}></div>
              <div className={headerStyles.flapBottom}></div>
              <div className={headerStyles.flapTop}></div>
          </div>
        
      )}

      {/* Main navbar */}
      <nav className={headerStyles.navbar}>
        <Navbar isSidebar={isSideBarOpen}/>
      </nav>
      
      {/* logo */}
      <div className={headerStyles.logoContainer}>
        <Link href="/">
          <Image src={logoImg} alt="logo" width={100} height={100} />
        </Link>
      </div>



      {/* Button */}
      <div className={headerStyles.buttonContainer}>
        <Link href="#apply">
          <Button title="Apply" className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonGreen}`} />
        </Link>
      </div>

      
    </header>
  );
};


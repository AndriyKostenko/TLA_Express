"use client";

import headerStyles from "./Header.module.css";
import buttonStyles from "../Button/Button.module.css";
import logoImg from "../../../public/logo_2.png";
import Image from "next/image";
import { Navbar } from "../NavBar/Navbar";
import { Button } from "../Button/Button";
import { useState } from "react";

interface HeaderProps {
	className?: string;
}


export const Header: React.FC<HeaderProps> = ({className}) => {

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
        <div className={headerStyles.sidebar}>
          <button className={headerStyles.closeButton} onClick={toggleSideBar}>
            &times;
          </button>
          
          <Navbar isSidebar={true}/>

          <Button title="Apply" className={buttonStyles.mainButton} />

        </div>
      )}

      {/* Main navbar */}
      <nav className={headerStyles.navbar}>
        <Navbar isSidebar={false}/>
      </nav>
      
      {/* logo */}
      <div className={headerStyles.logoContainer}>
        <Image src={logoImg} alt="logo" width={150} height={150} />
      </div>

      {/* Button */}
      <div className={headerStyles.buttonContainer}>
        <Button title="Apply" className={`${buttonStyles.mainButton}`} />
      </div>

      
    </header>
  );
};


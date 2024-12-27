import headerStyles from "./Header.module.css";
import buttonStyles from "../Button/Button.module.css";
import logoImg from "../../../public/logo_2.png";
import Image from "next/image";
import { Navbar } from "../NavBar/Navbar";
import { Button } from "../Button/Button";

interface HeaderProps {
	className?: string;
}


export const Header: React.FC<HeaderProps> = ({className}) => {
  return (
    <header className={`${className} ${headerStyles.header}`}>
      <Navbar/>

      <div className={headerStyles.logoContainer}>
        <Image src={logoImg} alt="logo" width={100} height={100} />
      </div>

      <Button title="Apply" className={`${buttonStyles.mainButton}`} />
      
    </header>
  );
};


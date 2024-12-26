import styles from "./Header.module.css";
import logoImg from "../../../public/logo_2.png";
import Image from "next/image";
import { Navbar } from "../NavBar/Navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logoImg} alt="logo" width={150} height={150} />
      </div>
      <Navbar/>
    </header>
  );
};


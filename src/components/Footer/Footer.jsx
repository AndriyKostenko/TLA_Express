import footerStyles from './Footer.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';



export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.leftSection}>
        <h3>TLA Express Inc</h3>
        <p>Your trusted partner in transportation</p>
        <p>123 Main Street</p>
        <p>Chicago, IL 60601</p>
      </div>
      
      <div className={footerStyles.centerSection}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#our-team">Our Team</a></li>
          <li><a href="#apply">Apply</a></li>
        </ul>
        <p>&copy; 2024 TLA Express Inc. All rights reserved.</p>
      </div>
      
      <div className={footerStyles.rightSection}>
        <h3>Connect With Us</h3>
        <div className={footerStyles.socialLinks}>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={30}/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={30}/>
          </a>
        </div>
      </div>
  </footer>
  );
}
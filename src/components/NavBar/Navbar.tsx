import navStyles from './Navbar.module.css';
import buttonStyles from '../Button/Button.module.css';
import { Button } from '../Button/Button';

export const Navbar = () => {

    const buttons = ['Home', 'About Us', 'Contact Us'];

    return (
        <nav className={navStyles.nav}>
            {buttons.map((button, index) => (
                <Button title={button} className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonWithoutBorder}`} key={index}/>
            ))}
        </nav>
    )
}
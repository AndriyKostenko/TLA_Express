import navStyles from './Navbar.module.css';
import buttonStyles from '../Button/Button.module.css';
import { Button } from '../Button/Button';

export const Navbar = () => {

    const buttons = ['About Us', 'Career', 'News', 'Contact Us'];

    return (
        <nav className={navStyles.nav}>
            {buttons.map((button, index) => (
                <Button title={button} className={buttonStyles.navButton} key={index}/>
            ))}
        </nav>
    )
}
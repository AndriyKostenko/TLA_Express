import headerStyles from '../Header/Header.module.css';
import buttonStyles from '../Button/Button.module.css';
import { Button } from '../Button/Button';

interface NavbarProps {
    isSidebar: boolean;
}


export const Navbar:React.FC<NavbarProps> = ({isSidebar}) => {

    const buttons = ['Home', 'About Us', 'Contact Us'];

    return (
        <nav className={isSidebar ? headerStyles.sidebarNav : headerStyles.navbar}>
            {buttons.map((button, index) => (
                <Button 
                    title={button} 
                    className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonWithoutBorder}`} 
                    key={index}/>
            ))}
        </nav>
    )
}
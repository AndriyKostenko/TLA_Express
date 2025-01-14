import headerStyles from '../Header/Header.module.css';
import buttonStyles from '../Common/Button/Button.module.css';
import { Button } from '../Common/Button/Button';
import Link from 'next/link';

interface NavbarProps {
    isSidebar: boolean;
    onNavItemClick?: () => void;
}


export const Navbar:React.FC<NavbarProps> = ({isSidebar, onNavItemClick}) => {

    const navigationItems = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '#about' },
        { title: 'Our Team', path: '#our-team' },
    ];

    return (
        <nav className={isSidebar ? headerStyles.sidebarNav : headerStyles.navbar}>
            {navigationItems.map((item, index) => (
              <Link href={item.path} key={index} onClick={onNavItemClick}>
                <Button 
                    title={item.title} 
                    className={isSidebar ? buttonStyles.envelopeButton : `${buttonStyles.mainButton} ${buttonStyles.mainButtonWithoutBorder}`} 
                    key={index}/>
                </Link>
            ))}
        </nav>
    )
}
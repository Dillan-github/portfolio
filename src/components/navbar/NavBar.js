import '../../App.css';
import './NavBar.css';
import { useTheme } from '../../App';

import white_logo from '../../images/White_Logo_SVG.svg';
import black_logo from '../../images/Black_Logo_SVG.svg';
import sun_icon from '../../images/sun_icon.svg';
import moon_icon from '../../images/moon_icon.svg';
import hamburger_menu from '../../images/hamburger_menu.svg';


function NavBar ({onClick}) {


    const [theme, toggleTheme] = useTheme();
    
    return(
    <div id='nav-bar'>
        <img src={theme === 'dark' ? white_logo : black_logo} id="nav-logo" alt="logo" />
        <div>
        <img  src={theme === 'dark' ? sun_icon : moon_icon} id="theme-icon" alt="theme button" onClick={toggleTheme} />
        <img src={hamburger_menu} id="hamburger" alt="menu" />
        </div>
    </div>
    );
}

export default NavBar;
import "../styles/navbar.scss";
import logo from '../logo.png';
import Timer from '../features/timer';
import { useSelector } from "react-redux";

function Navbar()
{
    return(
        <div className="menu">
            <header>
                <div className="menu_logo">
                    <span className="menu_logo_name">MYCHAT</span>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu-timer">
                    <Timer/>
                </div>
                <div className="menu-account">
                    <div className="menu-account_status">
                        <div className="menu-account_status_diode"></div>
                        <span className="menu-account_status_comment">Stan Logowania</span>
                    </div>
                    <div className="menu-account_status">
                    <div className="menu-account_status_diode"></div>
                        <span className="menu-account_status_comment">Stan Połączenia</span>
                    </div>
                </div>
            </header>            
        </div>
    )
}

export default Navbar;
import { Link } from "react-router-dom";
import "./header.css";
import '../../style/reset.css';
import '../../style/style.css';
import logo from '../../img/blackrose.png';
import icon from '../../img/house.png';

export function Header() {

    return (
        <>
            <header>
                <div class="logo">
                    <Link to='/' className='header-logo'>
                        <img src={logo} alt="logo" />
                    </Link>

                </div>
                <nav id="nav" className="align-c">
                    <Link to='/about'>about me</Link>
                    <Link to='/blog'>blog</Link>
                    <Link to='/contacts'>contact me</Link>
                    {/* <Link to ='/' className="home-link"><i class="fa fa-home" style={{ fontSize: '24px' }}></i></Link> */}
                    <Link to='/' className="home-link"><img src={icon} alt="" /></Link>
                </nav>
                <div id="hamburger">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </header>
        </>
    );
}
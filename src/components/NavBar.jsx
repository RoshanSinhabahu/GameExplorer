import './NavBar.css'
import logo from '../assets/logo.png'
import { RiHome5Line } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
    return(
        <div className='navbar-container'>
            <a href='#hero'>
                <div className="logo">
                    <img src={logo} className='logo-img'/>
                    <div>Decode</div>
                </div>
            </a>
            <div className="nav-links">
                <a href='#hero'><span className='label'><RiHome5Line className='icons'/>Home</span></a>
                <a href='#brows'><span className='label'><FiGlobe className='icons'/>Brows</span></a>
                <span className='label'>API</span>
                <span className='label-1'><FaRegUser className='icons'/></span>
            </div>
        </div>
    )
}

export default NavBar;
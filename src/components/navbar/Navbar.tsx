import './Navbar.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { FaBars, FaTimes, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Navbar = () => {

    const navRef:any = useRef()

    const showNavBar = () => {
        navRef.current?.classList.toggle("responsiveNav")
    }

    const closeNavBar = () => {
        navRef.current.classList.remove("responsiveNav");
    }

    return (

        <nav className='nav'>
            <p className='logo'>Nico<span>IT</span></p>
            <div ref={navRef} className='nav-links'>
            <Link to='/' className='nav-link' onClick={closeNavBar}>Home</Link>
            <Link to='/learn' className='nav-link' onClick={closeNavBar}>Learn</Link>
            <Link to='/practice' className='nav-link' onClick={closeNavBar}>Practice</Link>
            <Link to='/about' className='nav-link' onClick={closeNavBar}>About</Link>
            <Link to='/contact' className='nav-link' onClick={closeNavBar}>Contact Us</Link>
            <button className='navBtn NavCloseBtn' onClick={showNavBar}>
                <FaTimes/>
            </button>
            </div>
            {/* <button className='whatsappButton'>Whatsapp</button> */}
            <div className='socialIcons'>
            <a href="#">
            <FaLinkedinIn className='linkedinIcon' />
            </a>
            <a href="#">
            <FaGithub className='githubnIcon' />
            </a>
            </div>
        <button className='navBtn' onClick={showNavBar}>
            <FaBars/>
        </button>
        </nav>
    )
}

export default Navbar
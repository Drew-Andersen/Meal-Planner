import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="nav-custom w-100 d-flex justify-content-between">
            <h1 className='px-4 pt-2'>Meal Planner</h1>
            <div className="menu-icons" onClick={toggleMenu}>
                <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            <ul className={isOpen ? "nav-menu active d-flex justify-content-end p-2 bg-navbar" : "nav-menu d-flex justify-content-end p-2 bg-navbar"}>
                {/* <ul className='d-flex justify-content-end p-2 bg-navbar'> */}
                <li className="text px-3 py-1 mx-1">
                    <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                </li>
                <li className="text px-3 py-1 mx-1">
                    <Link to='/login' className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
                </li>
                <li className="text px-3 py-1 mx-1">
                    <Link to='/signup' className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Sign-up</Link>
                </li>
            </ul>
        </nav>
    )
}
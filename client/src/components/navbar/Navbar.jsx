import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Auth from '../../utils/auth';
import './navbar.css';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleSignOut = () => {
        Auth.logout();  
        navigate('/login'); 
    };

    return (
        <nav className="nav-custom w-100 d-flex justify-content-between">
            <div className="logo-div">
                <img src="src/images/Meal Planner.png" alt="Logo" className="logo"/>
                <h1 className='px-4 pt-2'>Meal Planner</h1>
            </div>
            <div className="menu-icons" onClick={toggleMenu}>
                <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            <ul className={isOpen ? "nav-menu active p-2 bg-navbar" : "nav-menu p-2 bg-navbar"}>
            {/* <ul className='d-flex justify-content-end p-2 bg-navbar'> */}
                {Auth.loggedIn() ? (
                    <>
                        <li className="text px-3 py-1 mx-1">
                            <Link 
                                to='/dashboard' 
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                            Dashboard
                            </Link>
                        </li>
                        <li className="text px-3 py-1 mx-1">
                            <Link 
                                to='/food_log' 
                                className={currentPage === '/food_log' ? 'nav-link active' : 'nav-link'}
                            >
                            Food Log
                            </Link>
                        </li>
                        <li className="text px-3 py-1 mx-1">
                            <Link 
                                to='/' 
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'} 
                                onClick={handleSignOut}
                            >
                            Sign Out
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="text px-3 py-1 mx-1">
                            <Link to='/login' className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
                        </li>
                        <li className="text px-3 py-1 mx-1">
                            <Link to='/signup' className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Sign-up</Link>
                        </li>
                    </>
                )}
                {/* <li className="text px-3 py-1 mx-1">
                    <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                </li>
                <li className="text px-3 py-1 mx-1">
                    <Link to='/login' className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
                </li>
                <li className="text px-3 py-1 mx-1">
                    <Link to='/signup' className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Sign-up</Link>
                </li> */}
            </ul>
        </nav>
    )
}
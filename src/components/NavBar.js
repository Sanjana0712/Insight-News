import React from 'react'
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar = ({toggleTheme, theme}) => {

    return (
        <div>
            {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"> */}
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${theme === 'dark' ? 'dark' : 'light'} bg-${theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Insight News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        <button className="btn btn-outline-dark" onClick={toggleTheme}>
                            {theme === 'dark' ? <FaSun /> : <FaMoon />} 
=======
import {FaMoon, FaSun} from 'react-icons/fa'

const NavBar = ({toggleTheme, theme}) => {
    
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-small navbar-${theme === 'dark' ? 'dark' : 'light'} bg-${theme}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Insight News</Link>
                    <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">

                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li className='nav-item'><Link className="nav-link" to="/business">Business</Link></li>
                            <li className='nav-item'><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            {/* <li className='nav-item'><Link className="nav-link" to="/general">General</Link></li> */}
                            <li className='nav-item'><Link className="nav-link" to="/health">Health</Link></li>
                            <li className='nav-item'><Link className="nav-link" to="/science">Science </Link></li>
                            <li className='nav-item'><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className='nav-item'><Link className="nav-link" to="/technology">Technology </Link></li>
                            
                        </ul>

                        <button className="btn btn-outline-dark" onClick={toggleTheme}>
                            {theme === 'dark' ? <FaSun title="Enable Light Mode"/> : <FaMoon title="Enable Dark Mode"/>}
>>>>>>> e233ae9 (This is a news app)
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )

}

<<<<<<< HEAD
export default NavBar
=======
export default NavBar;
>>>>>>> e233ae9 (This is a news app)

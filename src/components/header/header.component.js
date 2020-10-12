import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const auth = useSelector(state => state.auth);
    return (    
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="service-logo">
                        <Link to='/'>BACK TO THE OFFICE</Link>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav__list">
                            <li className="header-nav__item">
                                <a href="#" className="header-nav__link">{auth.token}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
import React, { useEffect } from 'react';
import './Navbar.css'
import Navitem from './Navitem'
import gsap from 'gsap'
import logo from '../../Data/LQDT_Logo.png'

function Navbar() {
    useEffect(() => {
        gsap.from('.navbar-logo', { x: -65, duration: 1, opacity: 0, delay: .2, ease: "power4" })
    }, []);
    return (
        <nav className="NavbarItems">
            <ul className="nav-menu">
                <li>
                    <img className='navbar-logo' src={logo} href="/"/>
                </li>

                <li>
                    <Navitem item="/" text="La Casa" />
                </li>

                <li>
                    <Navitem item="Historia" text="Historia" />
                </li>

                <li>
                    <Navitem item="Reservas" text="Reservas" />
                </li>

                <li>
                    <Navitem item="Contacto" text="Contacto" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
import React, { useEffect } from 'react';
import './Navbar.css'
import Navitem from './Navitem'
import gsap from 'gsap'

function Navbar() {
    useEffect(() => {
        gsap.from('.navbar-logo', { x: -65, duration: 1, opacity: 0, delay: .2, ease: "power4" })
    }, []);
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Alfonso Palacio Estrada <br /><i className="fab fa-react" /></h1>
            <div className=" menu-icon"></div>

            <ul className="nav-menu">
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
                    <Navitem item="Contacto" text="Contacto"/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
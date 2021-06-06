import React, { useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import { useSpring, animated, config } from "react-spring"
import gsap from 'gsap'

function Navitem(props) {

    let item = useRef(null)
    useEffect(() => {
        gsap.from([item], {
            delay: .2,
            duration: 1,
            ease: "power4",
            opacity: 0
        })

    }, [item])

    const [col, set] = useSpring(() => ({ color: "#000",textTransform: "none" , config: config.wobbly }))

    return (
        <div
            ref={el => (item = el)}
            >
                <NavLink exact
                className="nav-links"
                to={props.item}
                >
                    <animated.p 
                    style={col}
                    onMouseEnter= {()=> set({color:'#fff'})}
                    onMouseLeave= {()=> set({color:'#000'})}
                    className="nav-links"
                    >
                    {props.text}
                    </animated.p>
                </NavLink>
        </div>
        
    )
}

export default Navitem
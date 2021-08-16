import React, { useState, useEffect } from 'react'
import './Nav.css'
function Nav()
{
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 90){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => { 
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
             <img className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/WIFI_icon.svg"
                alt="Netflix avatar"
            />
        </div>);
}   
export default Nav;
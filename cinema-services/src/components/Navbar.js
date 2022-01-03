import React, { useContext, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { UseContext } from "../App";

function Navbar() {
    const { isLogged } = useContext(UseContext);
    const [toggleNav, setToggleNav] = useState(false);
    let obj = toggleNav
        ? { display: "flex", flexDirection: "column", alignItems: "self-start" }
        : {};

    return (
        <nav className="navMainContainer">
            <div className="logoContainer">
                <Link to="/">
                    <h1>CIMA</h1>
                </Link>
            </div>
            <ul className="burgerMenu">
                <li>
                    <i
                        className="fas fa-bars"
                        onClick={() => setToggleNav(!toggleNav)}
                    ></i>
                </li>
            </ul>
            <div className="pagesLinks" style={obj}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cinemaservices">Cinema Services</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
                {!isLogged ? (
                    <ul>
                        <li>
                            <Link to="/login">Login/Register</Link>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link to="/account">My Account</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;


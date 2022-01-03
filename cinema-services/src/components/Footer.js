import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footerMainContainer">
            <div className="footerColsContainer">
                <div className="footerColumn">
                    <div className="footerSiteName">
                        <h3>CIMA</h3>
                    </div>
                    <div className="footerSiteDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                        molestias aliquam provident magnam voluptatibus et ad deleniti atque
                        qui, nulla id labore saepe,
                    </div>
                </div>
                <div className="footerColumn">
                    <div className="footerSiteName">
                        <h3>Links</h3>
                    </div>
                    <div className="footerColPagesLinks">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/cinemaservices">Cinema Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerColumn">
                    <div className="footerColTitle">
                        <h3>Follow Us</h3>
                    </div>
                    <div className="footerColLinks">
                        <a href="https://web.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-square fa-3x"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram-square fa-3x"></i>
                        </a>
                        <a
                            href="https://github.com/Rahaf-Arafeh/Project-Six-React-using-Hooks-"
                            target="_blank"
                        >
                            <i className="fab fa-github-square fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyRightArea">ALL RIGHT RESERVED 2021 &copy;</div>
        </div>
    );
}

export default Footer;

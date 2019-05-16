import React, { Component } from 'react';

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 p-r-5">
                            <p>hej</p>
                        </div>
                        <div className="col-lg-3 col-md-6 ml-lg-auto">
                            <h5>Useful links</h5>
                            <ul className="links">
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                                <li>
                                    <a href="blog.html">News &amp; Events</a>
                                </li>
                                <li>
                                    <a href="contacts.html">Contacts</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5>Contact with Us</h5>
                            <ul className="contacts">
                                <li>
                                    <a href="tel://61280932400">
                                        <i className="ti-mobile"></i> + 61 23 8093 3400</a>
                                </li>
                                <li>
                                    <a href="mailto:info@Panagea.com">
                                        <i className="ti-email"></i> info@Panagea.com</a>
                                </li>
                            </ul>
                            <div id="newsletter">
                                <h6>Newsletter</h6>
                                <div id="message-newsletter"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <ul id="additional_links">
                                <li>
                                    <a href="#0">Terms and conditions</a>
                                </li>
                                <li>
                                    <a href="#0">Privacy</a>
                                </li>
                                <li>
                                    <span>© 2018 Panagea</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
};

export default Footer;


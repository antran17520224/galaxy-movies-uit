import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import paymentPng from "../../../../assets/images/footer/payment.png";
import logoWhite from "../../../../assets/images/logo/logo-GM-4.png";
import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                {/* FOOTER */}
                <div className="wrapper-footer">
                    <Container maxWidth="xl">
                        <Grid container className="footer-container">
                            <Grid item lg={3} sm={12}>
                                <div className="footer-grid">
                                    <a
                                        className="logo d-block"
                                        href="https://amanto-store-demo.myshopify.com"
                                    >
                                        <img
                                            src={logoWhite}
                                            width="230px;"
                                            className="image-fluid"
                                            alt="logo"
                                        />
                                    </a>
                                    <h3>Contact</h3>
                                    <div className="contact">
                                        <p>
                                            <strong>E :</strong>{" "}
                                            17520224@gm.uit.edu.com
                                        </p>
                                        <p>
                                            <strong>VN :</strong> 035-692-6627
                                        </p>
                                        <p>
                                            <strong>International :</strong>{" "}
                                            +8435-692-6627
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={3} sm={6}>
                                {/* about us */}
                                <div className="footer-grid">
                                    <h3>ABOUT US</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.facebook.com/AnTran190599/">
                                                Trần Quốc An
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/bach.nguyenphan/">
                                                Nguyễn Phan Bách
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item lg={3} sm={6}>
                                {/* SUPPORT */}
                                <div className="footer-grid">
                                    <h3>SUPPORT</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="support.html">
                                                Customer Support
                                            </a>
                                        </li>
                                        <li>
                                            <a href="support.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item lg={3} sm={12}>
                                {/* PAYMENT AND FOLLOW */}
                                <div className="footer-grid">
                                    <div className="payment_methods">
                                        <h3>WE ACCEPT</h3>
                                        <img src={paymentPng} alt="payment" />
                                    </div>
                                    <div className="follow">
                                        <h3>Follow us</h3>
                                        <a href="https://twitter.com/">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="https://facebook.com/">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="https://www.instagram.com/">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="https://youtube.com/">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="copyright">
                            <p>
                                Copyright © Galaxy Movies 2020 | Made with{" "}
                                <span>♥</span> by AnTranUIT{" "}
                            </p>
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;

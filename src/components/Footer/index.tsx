import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./Footer.scss";
import paymentPng from "../../assets/images/footer/payment.png";
import logoWhite from "../../assets/images/logo/logo_white.webp";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {/* FOOTER */}
        <div className="wrapper-footer">
          <Container>
            <Grid container>
              <Grid item xs={3}>
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
                  <h3 style={{ color: "#fff" }}>Contact</h3>
                  <div id="contact" className="contact">
                    <p style={{ color: "#999" }}>
                      <strong>E :</strong> 17520224@gm.uit.edu.com
                    </p>
                    <p style={{ color: "#999" }}>
                      <strong>VN :</strong> 0909-090-999
                    </p>
                    <p style={{ color: "#999" }}>
                      <strong>International :</strong> +84123 333 7777
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                {/* about us */}
                <div className="footer-grid">
                  <h3 style={{ color: "#fff" }}>ABOUT US</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a style={{ color: "#999" }} href="/">
                        Scotch Corporate
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="/">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="/">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="/">
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="/">
                        Why Buy Direct
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="/">
                        Newsletter
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={3}>
                {/* SUPPORT */}
                <div className="footer-grid">
                  <h3 style={{ color: "#fff" }}>SUPPORT</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a style={{ color: "#999" }} href="support.html">
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="/">
                        Shipping Policy
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="cart.html">
                        Returns
                      </a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }}>Order Status</a>
                    </li>
                    <li>
                      <a style={{ color: "#999" }} href="support.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={3}>
                {/* PAYMENT AND FOLLOW */}
                <div className="footer-grid">
                  <div className="payment_methods">
                    <h3 style={{ color: "#fff" }}>WE ACCEPT</h3>
                    <img
                      src={paymentPng}
                      alt="payment"
                      className="img-responsive"
                    />
                  </div>
                  <div id="follow" className="follow">
                    <h3 style={{ color: "#fff" }}>Follow us</h3>
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
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;

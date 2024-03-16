import React from "react";
import {
  FaApple,
  FaCodiepie,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa";
import { PiClock } from "react-icons/pi";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <p> Bewakoof</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerTitle">
                <h6>Customer Service</h6>
                <ul>
                  <li>Contact Us</li>
                  <li>Track Order</li>
                  <li>Return Order</li>
                  <li>Cancle Order</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerTitle">
                <h6>COMPANY</h6>
                <ul>
                  <li>About us</li>
                  <li>We're Hiring</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerTitle">
                <h6>CONNECT WITH US</h6>
                <ul>
                  <li>
                    <FaFacebookSquare className="footer-facebookIcon" /> 4.7M
                    People Like this
                  </li>
                  <li>
                    <FaInstagram className="footer-facebookIcon" /> 1M Followers
                  </li>
                  <li>
                    <FaTwitter className="social-icon" />
                    <FaPinterest className="social-icon" />
                    <FaSnapchat className="social-icon" />
                    <FaApple className="social-icon" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerTitle">
                <h6>KEEP UP TO DATE</h6>
              </div>
              <div className="subscribe">
                <input type="text" placeholder="Enter Email Id" className="" />
                <button className="">SUBSCRIBE</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerTitle">
                <ul>
                  <li>
                    <PiClock />
                    &nbsp;&nbsp;&nbsp;&nbsp;15 Days return policy
                  </li>
                  <li>
                    <FaCodiepie className="mt-2" />
                    &nbsp;&nbsp;&nbsp;&nbsp;15 Days return policy
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerTitle">
                <h6>DOWNLOAD THE APP</h6>
                <div className="donwload-img d-flex" style={{gap:"7px"}}>
                  <img
                    src="https://images.bewakoof.com/web/app_android_v1.png"
                    width="40%"
                  />
                  <img
                    src="https://images.bewakoof.com/web/app_ios_v1.png"
                    width="40%"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footerTitle">
                <h6>100% SECURE PAYMENT</h6>
                <div className="donwload-img d-flex" style={{gap:"7px"}}>
                  <img
                    src="https://images.bewakoof.com/web/secure-payments-image.png"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

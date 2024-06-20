import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css';
import logo from '../../image/logo.png';
import im from '../../image/india mart.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="company-info">
            <h4>Vajravel Traders Private Limited</h4>
            <p>
              Address NO.155,KUMARAGIRIPET,SOUTH AMMAPET,Salem,Salem,Tamil Nadu,India-636015
            </p>
          </div>
          <div className="menu">
            <h4>Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </div>
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons ">
          
              <a href="#" className="fab fa-instagram"></a>
              

            <img src={logo} alt='vajravel trdres pvt ltd'/>

              


            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vajravel Traders Private Limited, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

import im from '../../image/indiamart1.png';

import logo from '../../image/loader2.png';

=======
import logo from '../../image/logo.png';
import im from '../../image/india mart.png'
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33

const Footer = () => {


  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
<<<<<<< HEAD
          <div className="logo ">
            <img src={logo} alt='Vajravel Traders Logo' className='logo-img' />
          </div>

          <div className="menu">
            <h4>Our Company</h4>
            <ul>
              <li>  <Link to="/" target='-blank' className='block mb-4'>Home</Link></li>
              <li><Link to="/about" target='_self' className="block mb-4">About</Link></li>
              <li><Link to="/contact-us" target='_self' className="block mb-4">Contact Us</Link></li>

=======
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
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
            </ul>

          </div>
<<<<<<< HEAD
          <div className="company-info">
            <p>
              <h4>Vajravel Traders Private Limited</h4>
              <div className='address '>
                ADDRESS-  NO.155,KUMARAGIRIPET,
                SOUTH AMMAPET,Salem,Salem,
                Tamil Nadu,India-636015

              </div>


              <ul className='social-link flex gap-4'>

                {/* <li>
                  <a href="https://www.facebook.com/vajraveltraders/" target='_blank'><i className="fab fa-facebook-square fa-2x"></i></a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/vajraveltraders/" target='_blank'><i className="fab fa-instagram fa-2x"></i></a>
                </li>
                {/* <li>
                  <a href="https://www.linkedin.com/company/vajravel-traders-private-limited/" target='_blank'><i className="fab fa-linkedin fa-2x" style={{ borderRadius: '10px' }}></i></a>
                </li> */}
                <li>
                  <a href="https://www.twitter.com/vajraveltraders/" target='_blank'><img src={im} alt='indiamart' className='indiamart' /></a>
                </li>
              </ul>
            </p>

=======
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons ">
          
              <a href="#" className="fab fa-instagram"></a>
              

            <img src={logo} alt='vajravel trdres pvt ltd'/>

              


            </div>
>>>>>>> 56478dde197f63b15e546fbd0e73c43d4052fc33
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

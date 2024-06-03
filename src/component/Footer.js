import React from 'react';
import './Footer.css';
import logo from '../images/vajravel_logo-removebg-preview.png';
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="quick-contact">
          <h4>Quick Contact</h4>
          <p>If you have any questions or <br/>need help,  feel free to <br/> contact our team:</p> <br/>
          <p><span style={{color:"chocolate",fontSize:"1.5rem"}}> <i className='fa fa-phone fa-1x'></i> 9311668312</span></p><br/>
          <p><strong>Address:</strong> Saberi, Noida Extension, <br/>Gautam Budha Nagar,<br/> Uttar Pradesh-201305</p>
        </div>
        <div className="links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</a></li>
            <li><Link to="/team">Meet Our Team</a></li>
            <li><Link to="/news">News & Media</a></li>
            <li><Link to="/case-studies">Case Studies</a></li>
            <li><Link to="/contacts">Contacts</a></li>
            <li><Link to="/careers">Careers</a></li>
          </ul>
        </div>
        {/* <div className="products">
          <h4>Products</h4>
          <ul>
            <li>Petroleum And Industrial Fuel Oil</li>
            <li>Coal</li>
            <li>Solvent</li>
            <li>Mineral</li>
          </ul>
        </div> */}
        <div className="subscribe">
          <h4>Sign up for industry alerts</h4>
          <p>Receive our latest news, thoughts, and insights from Koira.</p>
          <form>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Sign Up</button>
          </form>
          <p>You may withdraw your consent at any time!</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo">
          <img src={logo} alt="Company Logo" className='footerlogo' />
        </div>
        <div className="legal-links">
          <ul>
            <li><Link to="/terms">Terms & Conditions</a></li>
            <li><Link to="/privacy">Privacy Policy</a></li>
            <li><Link to="/sitemap">Sitemap</a></li>
            <li><Link to="/employee-login">Employee Login</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>© 2023 INTER GLOBAL RESOURCES, All Rights Reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;

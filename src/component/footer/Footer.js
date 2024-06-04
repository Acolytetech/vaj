import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="quick-contact">
            <h4>Quick Contact</h4>
            <p>If you have any questions or <br/>need help, feel free to <br/> contact our team:</p> <br/>
            <p><span style={{color:"chocolate",fontSize:"1.5rem"}}><i className="fas fa-phone"></i> 9311668312</span></p><br/>
            <p>Address : Saberi, Noida Extension, <br/>Gautam Budha Nagar,<br/> Uttar Pradesh-201305</p>
          </div>
          <div className="links">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Meet Our Team</a></li>
              <li><a href="/news">News & Media</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/contacts">Contacts</a></li>
              <li><a href="/careers">Careers</a></li>
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
              <input type="email" placeholder="Your Email Address" className='italic' />
              <button type="submit" className='mt-2'>Sign Up</button>
            </form>
            <br/>
            <p>You may withdraw your consent at any time!</p><br/>
            <div className='social-link'>
        <a href="#" class="fab fa-facebook fa-1x"></a>
        <a href="#" class="fab fa-instagram fa-1x"></a>
        <a href="#" class="fab fa-whatsapp fa-1x"></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="legal-links">
            <ul>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
              <li><a href="/employee-login">Employee Login</a></li>
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

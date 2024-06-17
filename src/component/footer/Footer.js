import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css'
import logo from '../../image/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="footer-content flex flex-wrap justify-between">
          <div className="quick-contact w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-lg font-semibold mb-4 text-yello-500">Quick Contact</h1>
            <p className="mb-4">If you have any questions or <br/>need help, feel free to <br/> contact our team:</p>
            <p className="text-chocolate text-xl"><i className="fas fa-phone"></i> 6380685643</p>
            <p className="text-chocolate text-xl"><i className="fas fa-phone"></i> 8248915959</p>
            
          </div>
          <div className="links w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-lg font-semibold mb-4 ">Company</h1>
            <ul>
              <li className="mb-2"><a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li className="mb-2"><a href="/team" className="text-gray-600 hover:text-gray-800">Meet Our Team</a></li>
              <li className="mb-2"><a href="/news" className="text-gray-600 hover:text-gray-800">News & Media</a></li>
              <li className="mb-2"><a href="/case-studies" className="text-gray-600 hover:text-gray-800">Case Studies</a></li>
              <li className="mb-2"><a href="/contacts" className="text-gray-600 hover:text-gray-800">Contacts</a></li>
              <li className="mb-2"><a href="/careers" className="text-gray-600 hover:text-gray-800">Careers</a></li>
            </ul>
          </div>
          <div className="subscribe w-full md:w-1/3">
          <img src={logo} alt='logo vajravel traders m-auto  ' height={'100px'} width={'100px'}/>
          <p className="mt-4 pr-24"><strong>Address:</strong> No.155, Kumaragiripet, South Ammapet, Sanniyasigundu, Salem, Salem, Tamil Nadu, IndiaUttar Pradesh-201305</p>
            <p className="mt-4">You may withdraw your consent at any time!</p>
            <div className="social-link mt-4 flex space-x-4">
           
              <a href="#" className="fab fa-instagram fa-lg text-gray-600 hover:text-gray-800"></a>
              <a href="#" className="fab fa-whatsapp fa-lg text-gray-600 hover:text-gray-800"></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-8">

          <div className="legal-links flex justify-center space-x-4">
            <ul className="flex space-x-4">
              <li><a href="/terms" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="/sitemap" className="text-gray-600 hover:text-gray-800">Sitemap</a></li>
              <li><a href="/employee-login" className="text-gray-600 hover:text-gray-800">Employee Login</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center mt-8">
        <p className="text-gray-600">© 2023 INTER GLOBAL RESOURCES, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

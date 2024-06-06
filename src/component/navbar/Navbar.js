import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using react-icons for hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (submenuOpen) {
      setSubmenuOpen(false);
    }
  };

  const handleSubmenuItemClick = () => {
    setIsOpen(false);
    setSubmenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-lg font-semibold text-white">vagravel traders</div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white" onClick={handleSubmenuItemClick}>Home</Link>
            <button onClick={() => setSubmenuOpen(!submenuOpen)} className="text-gray-300 hover:text-white">Product</button>
            <Link to="/about" className="text-gray-300 hover:text-white" onClick={handleSubmenuItemClick}>About</Link>
            <Link to="/contact-us" className="text-gray-300 hover:text-white" onClick={handleSubmenuItemClick}>Contact Us</Link>
          </div>
        <div className="hidden md:flex items-center space-x-4">
            {/* <a href="https://facebook.com" className="text-gray-300 hover:text-white"><FaFacebook /></a>
            <a href="https://whatsapp.com" className="text-gray-300 hover:text-white"><FaWhatsapp /></a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-white"><FaInstagram /></a> */}
            <a href="#" class="fab fa-facebook fa-1x text-gray-300 hover:text-white  "></a>
        <a href="#" class="fab fa-instagram fa-1x text-gray-300 hover:text-white"></a>
        <a href="#" class="fab fa-whatsapp fa-1x text-gray-300 hover:text-white "></a>
          </div>
      </div>
        </div>

      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
              <Link to="/" onClick={toggleMenu} className="block mb-4 text-gray-300 hover:text-white">Home</Link>
              <button onClick={() => setSubmenuOpen(!submenuOpen)} className="block mb-4 text-gray-300 hover:text-white">Product</button>
              {submenuOpen && (
                  <div className="bg-gray-600 p-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Bitumen</h3>
                    <ul>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Bitumen" className="hover:text-gray-300 text-white-500">Bitumen</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Ca-solvent" className="hover:text-gray-300 text-white">CA Solvent</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300 text-white">Furnace Oil</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300 text-white">Fuel Oil</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300 text-white">Light Diesel Oil(LDO)</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300 text-white">Mineral Turpentine Oil (MTO)</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300 text-white">Rubber Processing Oil</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300 text-white">Mixed Hydrocarbon Oil</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Coal</h3>
                    <ul>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indian-coal" className="hover:text-gray-300">Indian Coal</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indonesian-coal" className="hover:text-gray-300">Indonesian Coal</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/usa-coal" className="hover:text-gray-300">USA Coal</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indonesian-coal" className="hover:text-gray-300">South Africa Oil</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/usa-coal" className="hover:text-gray-300">Petcoke</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Solvent</h3>
                    <ul>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">C 9 Solvent</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Toluene</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Benzene</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Glycol Ethers</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Ketones</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Methyle Alcohol</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Phenols</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Xylene</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">N-Hexane</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Minerals</h3>
                    <ul>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Mineral</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Lime Stone & Cement Grade</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Gypsum</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Pyroxenite</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Chrome ore</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Manganese ore</Link></li>
                    </ul>
                  </div>
                </div>
              )}
              <Link to="/about" onClick={toggleMenu} className="block mb-4 text-gray-300 hover:text-white">About</Link>
              <Link to="/contact-us" onClick={toggleMenu} className="block mb-4 text-gray-300 hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      )}

      <div className={`hidden md:block ${submenuOpen ? 'bg-gray-700' : ''}`}>
        {submenuOpen && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bitumen</h3>
            <ul>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Bitumen" className="hover:text-gray-300">Bitumen</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Ca-solvent" className="hover:text-gray-300">CA Solvent</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Furnace Oil</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Fuel Oil</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Light Diesel Oil(LDO)</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Mineral Turpentine Oil (MTO)</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Rubber Processing Oil</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Mixed Hydrocarbon Oil</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Coal</h3>
            <ul>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indian-coal" className="hover:text-gray-300">Indian Coal</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indonesian-coal" className="hover:text-gray-300">Indonesian Coal</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/usa-coal" className="hover:text-gray-300">USA Coal</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indonesian-coal" className="hover:text-gray-300">South Africa Oil</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/usa-coal" className="hover:text-gray-300">Petcoke</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Solvent</h3>
            <ul>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">C 9 Solvent</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Toluene</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Benzene</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Glycol Ethers</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Ketones</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Methyle Alcohol</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Phenols</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Xylene</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">N-Hexane</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Minerals</h3>
            <ul>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Mineral</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Lime Stone & Cement Grade</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Gypsum</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">Pyroxenite</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Chrome ore</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Manganese ore</Link></li>
            </ul>
          </div>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

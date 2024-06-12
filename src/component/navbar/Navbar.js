import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Using react-icons for hamburger and close icons
import logo from '../../image/logo.png'
// import { WhatsApp } from '@mui/icons-material';
import whats from '../../image/whatsApp.png'


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
    <nav className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-lg font-bold text-white">
            <Link to="/" className="text-black hover:text-gray-500 font-bold" onClick={handleSubmenuItemClick}>
            {/* <img src={logo} alt='vajravel Traders'/> */}
            
            </Link>

              <img src={logo} alt='vajravel Traders'/>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black text-bold hover:text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-black hover:text-gray-500 font-bold" onClick={handleSubmenuItemClick}>Home</Link>
            <button onClick={() => setSubmenuOpen(!submenuOpen)} className="text-black hover:text-gray-500 font-bold">Product</button>
            <Link to="/about" className="text-black hover:text-gray-500 font-bold" onClick={handleSubmenuItemClick}>About</Link>
            <Link to="/contact-us" className="text-black hover:text-gray-500 font-bold" onClick={handleSubmenuItemClick}>Contact Us</Link>
          </div>
        <div className="hidden md:flex items-center space-x-4">
          
  <a href="https://wa.me/9311668312" className="text-gray-300 hover:text-white" style={{ color: '#25D366' }}>
  <img src={whats} style={{ maxWidth: '33px' }} />
        </a>
        <div className='font-bold'>9311668312</div>
          </div>
      </div>
        </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
              <Link to="/" onClick={toggleMenu} className="block mb-4 text-gray-300 hover:text-white">Home</Link>
              <button onClick={() => setSubmenuOpen(!submenuOpen)} className="block mb-4 text-gray-300 hover:text-white">Product</button>
              {submenuOpen && (
                  <div className="bg-white p-4">
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
                    {/* <h3 className="text-lg font-semibold mb-4">Coal</h3> */}
                    <ul>
                    <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/base-fuel" className="hover:text-gray-300">Base Fuel</Link></li>
                    <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/import-diesel" className="hover:text-gray-300">Import Diesel</Link></li>
                    <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/bio-diesel" className="hover:text-gray-300">Bio Diesel</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indian-coal" className="hover:text-gray-300">Indian Coal</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indonesian-coal" className="hover:text-gray-300">Indonesian Coal</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/usa-coal" className="hover:text-gray-300">USA Coal</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/south-africa-coal" className="hover:text-gray-300">South Africa Oil</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/petcoke" className="hover:text-gray-300">Petcoke</Link></li>
                    </ul>
                  </div>
                  <div>
                    {/* <h3 className="text-lg font-semibold mb-4">Solvent</h3> */}
                    <ul>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-500">C 9 Solvent</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-500">Toluene</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-500">Benzene</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/glycol-ethers" className="hover:text-gray-300">Glycol Ethers</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/kitones" className="hover:text-gray-300">Ketones</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/methyle-alcohol" className="hover:text-gray-300">Methyle Alcohol</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/phenols" className="hover:text-gray-300">Phenols</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/xylene" className="hover:text-gray-300">Xylene</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/n-hexane" className="hover:text-gray-300">N-Hexane</Link></li>
                    </ul>
                  </div>
                  <div>
                  
                    <ul>
                     
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Lime-stone" className="hover:text-gray-500">Lime Stone & Cement Grade</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/gypsum" className="hover:text-gray-500">Gypsum</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/pyroxenite" className="hover:text-gray-500">Pyroxenite</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/chome-ore" className="hover:text-gray-500">Chrome ore</Link></li>
                      <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/manganese-ore" className="hover:text-gray-500">Manganese ore</Link></li>
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

      <div className={`hidden md:block ${submenuOpen ? 'bg-white' : ''}`}>
        {submenuOpen && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bitumen</h3>
            <ul>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Bitumen" className="hover:text-gray-300">Bitumen</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Ca-solvent" className="hover:text-gray-300">CA Solvent</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Furnance-oil" className="hover:text-gray-300">Furnace Oil</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/fuel-oil" className="hover:text-gray-300">Fuel Oil</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/light-diesel-oil" className="hover:text-gray-300">Light Diesel Oil(LDO)</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Mineral-oil" className="hover:text-gray-300">Mineral Turpentine Oil (MTO)</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/rubber-processing-oil" className="hover:text-gray-300">Rubber Processing Oil</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/mixed-hydrocarbon-oil" className="hover:text-gray-300">Mixed Hydrocarbon Oil</Link></li>
            </ul>
          </div>
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Coal</h3> */}
            <ul>
            <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/import-diesel" className="hover:text-gray-300">Import Diesel</Link></li>
            <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/base-fuel" className="hover:text-gray-300">Base Fuel</Link></li>
            <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/bio-diesel" className="hover:text-gray-300">Bio Diesel</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indian-coal" className="hover:text-gray-300">Indian Coal</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/indonesian-coal" className="hover:text-gray-300">Indonesian Coal</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/usa-coal" className="hover:text-gray-300">USA Coal</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/south-africa-coal" className="hover:text-gray-300">South Africa Coal</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/petcoke" className="hover:text-gray-300">Petcoke</Link></li>
            </ul>
          </div>
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Solvent</h3> */}
            <ul>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/C9-solvent" className="hover:text-gray-300">C 9 Solvent</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Toluene" className="hover:text-gray-300">Toluene</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Benzene" className="hover:text-gray-300">Benzene</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/glycol-ethers" className="hover:text-gray-300">Glycol Ethers</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/ketones" className="hover:text-gray-300">Ketones</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/methyle-alcohol" className="hover:text-gray-300">Methyle Alcohol</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/phenols" className="hover:text-gray-300">Phenols</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/xylene" className="hover:text-gray-300">Xylene</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/n-hexane" className="hover:text-gray-300">N-Hexane</Link></li>
            </ul>
          </div>
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Minerals</h3> */}
            <ul>
           
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/lime-stone-cement-grade" className="hover:text-gray-300">Lime Stone & Cement Grade</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/gypsum" className="hover:text-gray-300">Gypsum</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/pyroxenite" className="hover:text-gray-300">Pyroxenite</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/chorme-ore" className="hover:text-gray-300">Chrome ore</Link></li>
              <li className="mb-2"onClick={handleSubmenuItemClick}><Link to="/Manganese-ore" className="hover:text-gray-300">Manganese ore</Link></li>
            </ul>
          </div>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
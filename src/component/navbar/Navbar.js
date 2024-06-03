import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import './Class.css'
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');
  const [subMenu, setSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const showSubMenu = (hasChildren) => {
    const subMenuElement = hasChildren.querySelector('.sub-menu');
    setSubMenu(subMenuElement);
    setSubMenuActive(true);
    subMenuElement.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('span').textContent;
    setCurrentMenuTitle(menuTitle);
  };

  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = 'slideRight 0.5s ease forwards';
      setTimeout(() => {
        setSubMenuActive(false);
        setSubMenu(null);
      }, 300);
    }
    setCurrentMenuTitle('');
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <Link to="/">Vajrabel Traders</Link>
              </div>
            </div>
            <div className="header-item item-center">
              <div className={`menu-overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
              <nav className={`menu ${menuActive ? 'active' : ''}`}>
                <div className="mobile-menu-head">
                  <div className="go-back" onClick={hideSubMenu}>
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title">{currentMenuTitle}</div>
                  <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
                </div>
                <ul className="menu-main" onClick={(e) => {
                  if (!menuActive) return;
                  const hasChildren = e.target.closest('.menu-item-has-children');
                  if (hasChildren) showSubMenu(hasChildren);
                }}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <span>Company <i className="fa fa-angle-down"></i></span>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      {/* <div className="list-item text-center">
                        <Link to="">
                          <h4 className="title">About US</h4>
                        </Link>
                      </div> */}
                      <div className="list-item text-center">
                        <Link to="/who-we-are">
                          <h4 className="title">Who We Are</h4>
                        </Link>
                      </div>
                      {/* <div className="list-item text-center">
                        <Link to="">
                          <h4 className="title">Leadership Team</h4>
                        </Link>
                      </div> */}
                      {/* <div className="list-item text-center">
                        <Link to="/price-and-planes">
                          <h4 className="title">Price & Planes</h4>
                        </Link>
                      </div> */}
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <span>Product <i className="fa fa-angle-down"></i></span>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Product Details</h4>
                        <ul>
                          <li><Link to="/Bitumen">Bitumen</Link></li>
                          <li><Link to="/Ca-solvent">CA Solvent</Link></li>
                          <li><Link to="/Furnance-oil">Furnace Oil</Link></li>
                          <li><Link to="/Fuel-oil">Fuel Oil</Link></li>
                          <li><Link to="/light-diesel-oil">Light Diesel Oil(LDO)</Link></li>
                          <li><Link to="/mineral-turpentine-oil">Mineral Turpentine Oil (MTO)</Link></li>
                          <li><Link to="/rubber-processing-oil">Rubber Processing Oil</Link></li>
                          <li><Link to="/mixed-hydrocarbon-oil">Mixed Hydrocarbon Oil</Link></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">COAl</h4>
                        <ul>
                          <li><Link to="/indian-coal">Indian Coal</Link></li>
                          <li><Link to="/indonesian-coal">Indonesian Coal</Link></li>
                          <li><Link to="/usa-coal">USA Coal</Link></li>
                          <li><Link to="/south-africa-oil">South Africa Oil</Link></li>
                          <li><Link to="/petcoke">Petcoke</Link></li>
                        </ul>

                      </div>
                      <div className="list-item">
  <h4 className="title">Solvent</h4>
  <ul>
    <li><Link to="/C9-solvent">C 9 Solvent</Link></li>
    <li><Link to="/Toluene">Toluene</Link></li>
    <li><Link to="/Benzene">Benzene</Link></li>
    <li><Link to="/Glycol-Ethers">Glycol Ethers</Link></li>
    <li><Link to="/Ketones">Ketones</Link></li>
    <li><Link to="/methylalcohol">Methyle Alcohol</Link></li>
    <li><Link to="/Phenols">Phenols</Link></li>
    <li><Link to="/Xylene">Xylene</Link></li>
    <li><Link to="/nhexane">N-Hexane</Link></li>
  </ul>
</div>

                      <div className='list-item'>
                        <h4 className="title">Solvent</h4>
                        <ul>
                          <li><Link to="/Mineral-oil">Mineral</Link></li>
                          <li><Link to="/lime-stone-cement-grade">Lime Stone & Cement Grade</Link></li>
                          <li><Link to="/gypsum">Gypsum</Link></li>
                          <li><Link to="/gabbro-aggregate">Gabbro Aggregate</Link></li>
                          <li><Link to="/pyroxenite">Pyroxenite</Link></li>
                          <li><Link to="/chrome-ore">Chrome ore</Link></li>
                          <li><Link to="/manganese-ore">Manganese ore</Link></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <Link to="#">Contact
                     <i className="fas fa-angle-down"></i></Link>
                    {/* <div className="sub-menu single-column-menu">
                      <ul>
                        <li><Link to="#">Standard Layout</Link></li>
                        <li><Link to="#">Grid Layout</Link></li>
                        <li><Link to="#">single Post Layout</Link></li>
                      </ul> */}
                  {/* </div> */}
                  {/* </li>  */}
                  {/* <li className="menu-item-has-children">
                    <Link to="#">Pages <i className="fas fa-angle-down"></i></Link>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><Link to="#">Login</Link></li>
                        <li><Link to="#">Register</Link></li>
                        <li><Link to="#">Faq</Link></li>
                        <li><Link to="#">404 Page</Link></li>
                      </ul>
                    </div>
                  </li> */}
                  <li>
                    <Link to="Contactus">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-item item-right">
              <Link to="#"><i className="fas fa-search"></i></Link>

              <div className="mobile-menu-trigger" onClick={toggleMenu}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <section className="banner-section"></section> */}

    </div>
  );
};

export default Navbar;
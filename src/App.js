import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Service from './component/services/Services';
import Deliver from './component/Deliver/Deliver';
import TopProduct from './component/TopProduct/TopProduct';
import Client from './component/Client/Client';
import Form from './component/Client/Form.js/Form';
import Footer from './component/footer/Footer';
import Whoweare from './component/innerPages/Who/Whoweare'
import First from './First';
import './App.css'
import Rudder from './component/innerPages/Rubber/Rubber';
import Miniral from './component/innerPages/mineral turpentineoil/Miniral';
import Mixed from './component/innerPages/mixed/Mixed';
import Bitumen from './component/innerPages/bitumen/Bitumen';
import Casolvent from './component/innerPages/ca solvent/Casolvent';
import Furananceoil from './component/innerPages/furanance oil/furanaceoil';
import Fueloil from './component/innerPages/Fuel oil/Fueloil';
import LightDieselOil from './component/innerPages/light diesel oil/LightdieselOil';
import Miniraloil from './component/innerPages/miniral/Miniraloil';
import C9solvent from './component/innerPages/c9 solvent/C9solvent';
import Toluence from './component/innerPages/taulene/Taulene';
import Benzene from './component/innerPages/Benzene/Benzene';
import GlycolEthers from './component/innerPages/Glycol-ethers/GlycolEthers';
import Ketones from './component/innerPages/Ketones/Ketones';
import Methylalcohol from './component/innerPages/methlyalcohol/MethlyAlcohol';
import Phenols from './component/innerPages/phenols/Phenols';
import Contactus from './component/contactuspage/Contactus';
import Coal from './component/innerPages/coal/Coal';
import Indo from './component/innerPages/Indo/Indo';
import UsaCoal from './component/innerPages/usaCoal/UsaCoal';
import South from './component/innerPages/south/South';
import Limecement from './component/innerPages/lime stone & cement grade/Lime&Cement';
import Gypsum from './component/innerPages/gysm/Gypsum';
import Gabbro from './component/innerPages/gabbro/Gabbro';
import Pyroxenite from './component/innerPages/Pyroxenite/Pyroxenite';
import Petcoke from './component/innerPages/petCoke/Petcoke';
import Chromeore from './component/innerPages/Chrome ore/Chromeore';
import Magnanceore from './component/innerPages/magnances ore/Magnanceore';
import Aboutsus from './component/Aboutsus';
import Leadership from './component/Leadership';
import Xylene from './component/innerPages/Xylene/Xylene';
import Nhexane from './component/innerPages/nhexane/Nhexane';
import Loader from './component/loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/rubber-processing-oil" element={<Rudder />} />
          <Route path="/mineral-turpentine-oil" element={<Miniral />} />
          <Route path="/mixed-hydrocarbon-oil" element={<Mixed />} />
          <Route path="/bitumen" element={<Bitumen />} />
          <Route path="/Ca-solvent" element={<Casolvent />} />
          <Route path="/Furnance-oil" element={<Furananceoil />} />
          <Route path="/Fuel-oil" element={<Fueloil />} />
          <Route path="/light-diesel-oil" element={<LightDieselOil />} />
          <Route path="/Mineral-oil" element={<Miniraloil />} />
          <Route path="/C9-solvent" element={<C9solvent />} />
          <Route path="/toluence-oil" element={<Toluence />} />
          <Route path="/benzene" element={<Benzene />} />
          <Route path="/glycol-ethers" element={<GlycolEthers />} />
          <Route path="/Ketones" element={<Ketones />} />
          <Route path="/methyle-alcohol" element={<Methylalcohol />} />
          <Route path="/phenols" element={<Phenols />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/indian-coal" element={<Coal />} />
          <Route path="/indonesian-coal" element={<Indo />} />
          <Route path="/usa-coal" element={<UsaCoal />} />
          <Route path="/south-africa-coal" element={<South />} />
          <Route path="/lime-stone-cement-grade" element={<Limecement />} />
          <Route path="/Gypsum" element={<Gypsum />} />
          <Route path="/gabbro-aggregate" element={<Gabbro />} />
          <Route path="/pyroxenite" element={<Pyroxenite />} />
          <Route path="/petcoke" element={<Petcoke />} />
          <Route path="/Chrome-Ore" element={<Chromeore />} />
          <Route path="/manganese-ore" element={<Magnanceore />} />
          <Route path="/about" element={<Aboutsus />} />
          <Route path="/who-we-are" element={<Whoweare />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/Xylene" element={<Xylene />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/n-hexane" element={<Nhexane />} />
          <Route path="/Toluene" element={<Toluence />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

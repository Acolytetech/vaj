import React from 'react';
import './App.css';
import Home from './component/home/Home';
import Service from './component/services/Services';
import Deliver from './component/Deliver/Deliver';
import TopProduct from './component/TopProduct/TopProduct';
import Client from './component/Client/Client';
import Form from './component/Client/Form.js/Form';

import ChatBoat from './component/chatBoat/ChatBoat';

function First() {


  return (
    <div className='app'>
      {/* <Navbar /> */}
      <Home />
      <Deliver />
      <TopProduct />
      <Service />
      <ChatBoat/>
      <Client />
      <Form />
      {/* <Footer /> */}
    </div>
  );
}

export default First;

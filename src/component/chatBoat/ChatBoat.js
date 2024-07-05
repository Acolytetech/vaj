import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import { FaTimes } from 'react-icons/fa';
import boat from '../../image/boat.png';
import './Action.css'; // Import the CSS file

function ChatBoat() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='chatboat-container fixed  right-4 m-4 p-4 z-50'style={{ bottom: '-1.5rem' }}>
      {isOpen ? (
        <div className='chatbot-box bg-white shadow-lg border rounded-lg'>
          <div className='close-icon flex justify-end p-2'>
            <FaTimes className='cursor-pointer' onClick={handleToggle} />
          </div>
          <div className='chatbot-content'>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      ) : (
        <img src={boat} alt="boat" className="chatbot-icon cursor-pointer" onClick={handleToggle} />
      )}
    </div>
  );
}

export default ChatBoat;

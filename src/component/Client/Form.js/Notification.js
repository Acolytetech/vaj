import React from 'react';
import './Notification.css'

function Notification({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className={`fixed top-0 left-0 w-full p-4 text-center ${type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white">
          &times;
        </button>
      </div>
    </div>
  );
}

export default Notification;

import React from 'react';

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className={`fixed top-0 right-0 mt-8 mr-4 p-4 rounded shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      {message}
      <button onClick={onClose} className="ml-4">
        Close
      </button>
    </div>
  );
};

export default Notification;

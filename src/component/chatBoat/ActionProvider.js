import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  return (
    <div className='p-4'>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            createChatBotMessage,
            setState,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
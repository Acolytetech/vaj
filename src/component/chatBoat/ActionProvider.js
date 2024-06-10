class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleGreeting = () => {
    const greetingMessage = this.createChatBotMessage(
      "Hello! Today I will assist you."
    );
    this.setChatbotMessage(greetingMessage);
  };

  handleUserQuery = () => {
    const botMessage = this.createChatBotMessage(
      "For further assistance, please call 9311668312 or send a WhatsApp message. Our team will contact you shortly."
    );
    this.setChatbotMessage(botMessage);
  };

  setChatbotMessage = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;

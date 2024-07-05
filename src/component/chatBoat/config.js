import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const config = {
  botName: "Savi",
  initialMessages: [
    createChatBotMessage(`Welcome to Vajravel!`),
    createChatBotMessage(`I am Savi, how may I help you?`)
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;

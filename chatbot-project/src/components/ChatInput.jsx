import React, { useEffect, useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';
import dayjs from 'dayjs';

function ChatInput({ chatMessages, setChatMessages }) {
  // use state to save data the changes over time
  const [inputText, setInputText] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyboardInput(event) {
    switch (event.key) {
      case 'Enter':
        sendMessage();
        return;
      
      case 'Escape':
        setInputText('');
        return;

      default:
        return;
    }
  }

  function clearMessage() {
    localStorage.removeItem('messages');
    setChatMessages([]);
  }

  async function sendMessage() {
    if (isLoading) {
      console.log('loading');
      return;
    }

    // running the set function will always replace chatMessages with the new array
    // and regenerate the HTML

    let time = dayjs().valueOf();

    const newChatMessages = [
      ...chatMessages, 
      {
        message : inputText,
        sender : "user",
        timestamp : dayjs(time).format('h:mma'),
        id : crypto.randomUUID()
      }
    ]
    
    const newChatbotMsgId = crypto.randomUUID();

    // temporarily make chatbot message loading
    setChatMessages([
      ...newChatMessages,
      {
        message : <img className="loading-spinner" src={LoadingSpinner} />,
        sender : "robot",
        id : newChatbotMsgId
      }
    ]);

    setInputText('');
    
    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputText);
    setIsLoading(false);

    time = dayjs().valueOf();

    setChatMessages([
      ...newChatMessages,
      {
        message : response,
        sender : "robot",
        timestamp : dayjs(time).format('h:mma'),
        id : newChatbotMsgId
      }
    ]);
  }

  return (
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={handleKeyboardInput}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
      <button
        onClick={clearMessage}
        className='clear-button'
      >Clear</button>
    </div>
  );
}

export default ChatInput;
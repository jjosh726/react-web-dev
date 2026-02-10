import React, { useEffect, useState } from 'react'
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  useEffect(() => {
    Chatbot.addResponses({
      "love" : "is beautiful.",
      "its all around" : "and its everywhere."
    });
  }, []);

  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
};

export default App;

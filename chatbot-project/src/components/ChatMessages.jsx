import React from 'react';
import ChatMessage from "./ChatMessage";
import useAutoScroll from '../hooks/useAutoScroll';
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);

  return (
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.length === 0 && (
        <p>Welcome to the chatbot project! Send a message using the textbox below.</p>
      )}

      {chatMessages.map(chatMessage => {
        const { message, sender, timestamp, id } = chatMessage;
        return ( 
          <ChatMessage 
            message={message} 
            sender={sender}
            timestamp={timestamp}
            key={id}
          /> 
        );
      })}
    </div>
  );
}

export default ChatMessages;
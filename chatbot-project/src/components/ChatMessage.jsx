import React from 'react'
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css'

// in-parameter destructuring
function ChatMessage({ message, sender, timestamp }) {
  
  return (
    <div className= {
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>

      {sender === 'robot' && (
        <img className="chat-message-profile" src={RobotProfileImage} />
      )}

      <div className="chat-message-text">
        {message}
        {timestamp && (
          <div className='time-stamp'>{timestamp}</div>
        )}
      </div>

      {sender === 'user' && (
          <img className="chat-message-profile" src={UserProfileImage} />
        )}
      
    </div>
  );
}

export default ChatMessage;
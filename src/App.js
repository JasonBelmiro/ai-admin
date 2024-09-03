import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const send = () => {
    if (input.trim()) {
      const response = `Response to: ${input}`;

      setMessages([...messages, { text: input, isUser: true }, { text: response, isUser: false }]);
      setInput('');
    }
  };

  return (
    <div>
      <div className="header">
        <img src="/logo.png" alt="AI-DECE Logo" className="logo" />
      </div>
      <div className="chat-container">
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isUser ? 'user' : 'response'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && send()}
            placeholder="Type your message..."
          />
          <button onClick={send}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;

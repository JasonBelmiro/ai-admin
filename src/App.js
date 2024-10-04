import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import "./bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const adjustHeight = (element) => {
    element.style.height = "auto";
    const scrollHeight = element.scrollHeight;
    const maxHeight = 100;

    element.style.height = scrollHeight <= maxHeight ? `${scrollHeight}px` : `${maxHeight}px`;

    if (scrollHeight > 100) {
      element.style.overflowY = "scroll";
    } else {
      element.style.overflowY = "hidden";
    }
  };

  const send = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:5001/api/bot/run", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_prompt: input }),
        });

        const data = await response.json();

        if (data.response.image) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              content: (
                <div>
                  <a
                    href={data.response.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={data.response.image}
                      alt="Response Image"
                      style={{ display: "block", margin: "0 auto", width: "30%" }}
                    />
                  </a>
                  <p style={{ textAlign: "justify" }}>{data.response.text}</p>
                </div>
              ),
              isUser: false,
            },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.response.text, isUser: false },
          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, something went wrong.", isUser: false },
        ]);
      }

      setIsLoading(false);
      setInput("");
      adjustHeight(inputRef.current);

      inputRef.current.style.height = "auto";
      inputRef.current.style.overflowY = "hidden";
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const clearChat = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <div>
      <div className="header">
        <div className="left-icons">
          <img
            src="/sidebar.png"
            alt="Toggle Sidebar"
            onClick={toggleSidebar}
            style={{ cursor: "pointer", height: "35px", marginLeft: "10px" }}
          />
          <img
            src="/newchat.png"
            alt="New Chat"
            onClick={clearChat}
            style={{ cursor: "pointer", height: "28px", marginLeft: "20px" }}
          />
        </div>
        <img src="/logo.png" alt="AI-DECE Logo" className="logo" />
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>History 1</li>
          <li>History 2</li>
          <li>History 3</li>
        </ul>
      </div>
      <div className={`chat-container main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className={`message-wrapper ${msg.isUser ? "user" : "response"}`}>
              {!msg.isUser && (
                <div className="avatar-wrapper bot-avatar">
                  <img src="/bot.png" alt="Bot" className="avatar" />
                </div>
              )}
              <div className={`message ${msg.isUser ? "user-message" : "response-message"}`}>
                {msg.content || msg.text}
              </div>
              {msg.isUser && (
                <div className="avatar-wrapper user-avatar">
                  <img src="/user.png" alt="User" className="avatar" />
                </div>
              )}
            </div>          
          ))}
          <div ref={messagesEndRef} />
          {isLoading && <div className="loading-spinner"></div>}
        </div>
        <div className="input-container">
          <textarea
            ref={inputRef}
            rows="1"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              adjustHeight(e.target);
            }}
            onKeyPress={(e) => e.key === "Enter" && send()}
            placeholder="Type your message..."
            disabled={isLoading}
            style={{ resize: "none" }}
          />
          <button onClick={send} disabled={isLoading}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

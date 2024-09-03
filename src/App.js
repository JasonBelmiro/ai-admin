import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const send = async () => {
    if (input.trim()) {
      // Menambahkan pesan pengguna ke state terlebih dahulu
      setMessages([...messages, { text: input, isUser: true }]);
      setIsLoading(true); // Mulai loading

      try {
        // Melakukan post request ke API
        const response = await fetch("http://localhost:5001/api/bot/run", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_prompt: input }),
        });

        const data = await response.json();

        if (data.response.image) {
          // Jika respons mengandung gambar, tampilkan gambar dengan link dan teks di bawahnya
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
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </a>
                  <p style={{ textAlign: "justify" }}>{data.response.text}</p>
                </div>
              ),
              isUser: false,
            },
          ]);
        } else {
          // Jika tidak ada gambar, hanya tampilkan teks
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

      setIsLoading(false); // Selesai loading
      setInput("");
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
            <div
              key={index}
              className={`message ${msg.isUser ? "user" : "response"}`}
            >
              {msg.content || msg.text}
            </div>
          ))}
          {isLoading && (
            // <div className="loading-icon">
            //   <img
            //     src="/loading.gif"
            //     alt="Loading..."
            //     style={{ display: "block", margin: "0 auto" }}
            //   />
            // </div>
            <div className="loading-spinner"></div>
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && send()}
            placeholder="Type your message..."
            disabled={isLoading} // Nonaktifkan input saat loading
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

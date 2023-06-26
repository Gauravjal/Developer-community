import React, { useState } from "react";
import './Chat.css';
function Chatbot() {
  const [messages, setMessages] = useState([{"text": "Hello, how can I help you?", "sender": "chatbot"}]);
  const [userMessage, setUserMessage] = useState();

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Send user message to the backend
    fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: userMessage, sender: "user" },
          { text: data.response, sender: "chatbot" },
        ]);
        // Clear the user message input field
        setUserMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          alignItems: "center",
        }}
      >
        <h2>Chatbot</h2>
      </div> */}
      <div style={{z:'100',backgroundColor:'gray'}} className="chat-container">
        <div className="message-list">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user" ? "user-message" : "chatbot-message"
              }`}
            >
             <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={userMessage}
            onChange={handleUserMessageChange}
            placeholder="Type your message..."
            onKeyPress={(e)=>{
                if(e.key==="Enter")
                handleSendMessage();
            }}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;

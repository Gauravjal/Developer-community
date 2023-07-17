import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import "./Chat.css";
function Chatbot({ showBot, setShowBot }) {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", sender: "chatbot" },
  ]);
  const [userMessage, setUserMessage] = useState();
  // const [showBot, setShowBot] = useState(true);
  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Send user message to the backend
    fetch("https://stackoverflow-clone-mfrc.onrender.com/chat", {
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
    <div
      style={{
        display: showBot ? "auto" : "none",
        z: "100",
        backgroundColor: "none",
        
      }}
    >
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
      <div
        style={{ z: "100", backgroundColor: "#fff" }}
        className="chat-container"
      >
        <div style={{marginTop:'50px'}} className="message-list">
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
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>

        <MdCancelPresentation
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            //backgroundColor: "white",
            color: "black",
            padding: "5px",
            border: "none",
            cursor: "pointer",
            fontSize:'30px'
          }}
          onClick={() => setShowBot(false)}
        />
      </div>
    </div>
  );
}

export default Chatbot;

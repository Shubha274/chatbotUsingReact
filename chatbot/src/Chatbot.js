import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./chatbot.css";
import Response from "./Response";
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#4CAF50",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#4CAF50",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
  botAvatar: "https://example.com/bot-avatar.png", // Optional: Provide a URL for the bot avatar
  botBorderRadius: "50%", // Optional: Adjust the border radius of the bot bubble
  // Custom style to position the Chatbot at the bottom-right corner
  floatingButton: {
    right: "20px",
    bottom: "20px",
  },
};

function Chatbot() {
  const [userInput, setUserInput] = useState(""); // State to store user input

  const handleUserInput = (input) => {
    setUserInput(input); // Update user input state
  };
  const [steps, setSteps] = useState([
    {
      id: "1",
      // what u want display to the user
      message: "Hello,welcome to our website",
      // it triggers next particular object and shows the message
      trigger: "2",
    },
    {
      id: "2",
      message: "What is your name?",
      trigger: "name",
    },
    {
      id: "name",
      //waiting for the user input
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}!  How can I assist you?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: "1", label: "Get information", trigger: "information" },
        { value: "2", label: "Support", trigger: "support" },
        // Loop back to the options step
      ],
    },
    {
      id: "information",
      message: "What information would you like?",
      trigger: "informationInput",
    },
    {
      id: "informationInput",
      user: true,
      trigger: "informationResponse",
      validator: (value) => {
        handleUserInput(value);
        return true;
      },
    },
    {
      id: "informationResponse",
      component: <Response userInput={userInput} />,
      asMessage: true,
      // Pass userInput as props to Response component
      trigger: "options",
    },
    {
      id: "support",
      message: "Please describe your issue or question.",
      trigger: "supportInput",
    },
    {
      id: "supportInput",
      user: true,
      trigger: "supportResponse",
    },
    {
      id: "supportResponse",
      message: "I understand. We will get back to you shortly.",
      trigger: "options", // After responding, go back to the options step
    },
  ]);
  return (
    <div className="App">
      {/*to intergrate chatbot on right side*/}
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating
          botDelay={2000}
          botDelayOffset={1000}
          customComponents={{
            bot: (props) => <Response {...props} userInput={userInput} />,
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;

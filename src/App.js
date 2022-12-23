import React, { useEffect, useState } from "react";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import Container from "@mui/material/Container";


function App() {
  const [messages, setMessages] = useState([]);

  const AddMess = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messages.length != 0 && messages[messages.length-1].author==='user') {
      const timeout=setTimeout(() => {
        AddMess({
          author: "Alica",
          text: "Hi, your message.",
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }

  }, [messages]);

  return (
    <Container maxWidth="sm">
      <>
        <h1>Welcome</h1>
        <Form AddMess={AddMess} />
        <MessageList messages={messages} />
      </>
    </Container>
  );
}

export default App;

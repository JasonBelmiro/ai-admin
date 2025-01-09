import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Chatbot from './Chatbot';
import Contact from './Contact';
import MessageLog from './MessageLog';

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="chatbot" element={<Chatbot />} />
      <Route path="contact" element={<Contact />} />
      <Route path="message-log" element={<MessageLog />} />
    </Routes>
  );
}

export default App;

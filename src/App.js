import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Chatbot from './Chatbot';
import Contact from './Contact';
import MessageLog from './MessageLog';
import AIReporting from './AI-Reporting';

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="chatbot" element={<Chatbot />} />
      <Route path="contact" element={<Contact />} />
      <Route path="message-log" element={<MessageLog />} />
      <Route path="ai-reporting" element={<AIReporting />} />
    </Routes>
  );
}

export default App;

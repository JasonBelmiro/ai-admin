import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function MessageLog() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const messages = [
    { id: 1, date: '20-11-2024', sender: 'Chatbot', message: 'How can I help you today?' },
    { id: 2, date: '28-11-2024', sender: 'User', message: 'I need support with my account.' },
    { id: 3, date: '07-12-2024', sender: 'Support', message: 'Your issue has been resolved.' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full h-14 bg-white flex items-center justify-between px-4 shadow-md z-10">
        <div className="flex items-center">
          <img src="/logo.png" alt="AI-DECE Logo" className="h-10" />
          <img
            src="/sidebar.png"
            alt="Toggle Sidebar"
            onClick={toggleSidebar}
            className="h-8 cursor-pointer ml-3 sm:ml-24"
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-bold text-gray-800">Admin</span>
          <img
            src="/blankprofile.png"
            alt="Profile"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-14 left-0 w-64 h-[calc(100vh-56px)] bg-gray-50 shadow-md transition-transform flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-4 space-y-2 flex-grow">
          {/* Top Section */}
          <li>
            <button
              onClick={() => navigate("/")}
              className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100"
            >
              <img src="/dashboard1.png" alt="Dashboard" className="h-6 mr-2" />
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/chatbot")}
              className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100"
            >
              <img src="/bot1.png" alt="Chatbot" className="h-6 mr-2" />
              Chatbot
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100"
            >
              <img src="/contact1.png" alt="Contact" className="h-6 mr-2" />
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/message-log")}
              className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100 text-[#3e2b95] !text-[#3e2b95]"
            >
              <img src="/messagelog.png" alt="Message Log" className="h-6 mr-2" />
              Message Log
            </button>
          </li>
        </ul>

        {/* Bottom Section */}
        <div className="mt-auto border-t border-gray-200 pt-2">
          <ul className="space-y-2 p-4">
            <li>
              <button
                onClick={() => navigate("/help")}
                className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100"
              >
                <img src="/help.png" alt="Help & Support" className="h-6 mr-2" />
                Help & Support
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/profile-settings")}
                className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100"
              >
                <img src="/setting.png" alt="Profile Settings" className="h-6 mr-2" />
                Profile Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/logout")}
                className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100"
              >
                <img src="/logout.png" alt="Logout" className="h-6 mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 ml-0 mt-14 bg-gray-100 transition-all ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        {/* Title */}
        <div className="px-4 py-4 bg-gray-100 rounded-md mb-4 ml-2 mt-4">
          <h1 className="text-2xl font-bold text-gray-800">Message Log</h1>
        </div>
        {/* Message List */}
        <div className="bg-white shadow-md rounded-md p-6 mx-4">
            <div className="overflow-auto max-h-60 border border-gray-200 rounded-md">
                <ul className="divide-y divide-gray-200">
                {messages.map((msg) => (
                    <li key={msg.id} className="p-4 hover:bg-gray-50">
                    <p className="text-sm text-gray-500">{msg.date} - <strong>{msg.sender}</strong></p>
                    <p className="text-gray-700">{msg.message}</p>
                    </li>
                ))}
                </ul>
            </div>
            
            {/* Search and Filter */}
            <div className="mt-4 flex gap-4">
                <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-[#3e2b95] text-white px-4 py-2 rounded-md hover:bg-[#534593]">Search</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MessageLog;

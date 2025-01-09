import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Contact() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

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
              className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100 text-[#3e2b95] !text-[#3e2b95]"
            >
              <img src="/contact.png" alt="Contact" className="h-6 mr-2" />
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/message-log")}
              className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100"
            >
              <img src="/messagelog1.png" alt="Message Log" className="h-6 mr-2" />
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
          <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
        </div>
        {/* Contact Details */}
        <div className="bg-white shadow-md rounded-md p-6 mx-4">
            <div className="space-y-2 mb-6">
            <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:admin@ai-dece.ai" className="text-blue-500">
                admin@ai-dece.ai
                </a>
            </p>
            <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+6282238366883" className="text-blue-500">
                +62 822 3836 6883
                </a>
            </p>
            <p>
                <strong>Working Hours:</strong> Mon-Fri, 8:00 AM - 5:00 PM
            </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                Name
                </label>
                <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                Message
                </label>
                <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-[#3e2b95] text-white py-2 px-4 rounded-md hover:bg-[#534593]"
            >
                Send Message
            </button>
            </form>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Contact;

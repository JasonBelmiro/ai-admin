import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
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
              className="flex items-center w-full p-2 text-gray-900 rounded-md hover:bg-gray-100 text-[#3e2b95] !text-[#3e2b95]"
            >
              <img src="/dashboard.png" alt="Dashboard" className="h-6 mr-2" />
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
        <div className="px-4 py-4 bg-gray-100 rounded-md ml-2 mt-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        {/* Cards */}
        <div className="p-4 grid grid-cols-2 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Total Registered Users</h3>
            <p className="text-2xl font-bold">1,200</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Current Token Limit</h3>
            <p className="text-2xl font-bold">50,000</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Remaining Tokens</h3>
            <p className="text-2xl font-bold">35,000</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">Tokens Expiring This Month</h3>
            <p className="text-2xl font-bold">15</p>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Token Overview */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Token Overview</h3>
            <div className="space-y-4">
              {/* Total Tokens */}
              <div>
                <p className="text-sm font-medium">Total Tokens</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">70% of total tokens are used</p>
              </div>
              {/* Remaining Tokens */}
              <div>
                <p className="text-sm font-medium">Remaining Tokens</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">30% tokens remaining</p>
              </div>
              {/* Tokens Expiring This Month */}
              <div>
                <p className="text-sm font-medium">Tokens Expiring This Month</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">15% tokens expiring this month</p>
              </div>
              {/* Tokens Expiring Next Month */}
              <div>
                <p className="text-sm font-medium">Tokens Expiring Next Month</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">10% tokens expiring next month</p>
              </div>
            </div>
          </div>

          {/* Activity Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Activity Summary</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span>New Users This Month:</span>
                <span className="font-semibold">50</span>
              </li>
              <li className="flex justify-between">
                <span>Chatbot Requests:</span>
                <span className="font-semibold">300</span>
              </li>
              <li className="flex justify-between">
                <span>Tokens Used:</span>
                <span className="font-semibold">20,000</span>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

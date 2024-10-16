import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">My Sidebar</h1>
      </div>
      <ul className="flex-1 p-4 space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="#dashboard">Dashboard</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="#profile">Profile</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="#settings">Settings</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <a href="#logout">Logout</a>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/account">Account</Link>
        </li>
      </ul>
      <div className="p-4">
        <button className="bg-blue-500 w-full py-2 rounded">Contact Us</button>
      </div>
    </div>
  );
};

export default Sidebar;

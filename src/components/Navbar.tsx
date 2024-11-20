import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">WanderGuides</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tours" className="text-gray-700 hover:text-indigo-600">Tours</Link>
            <Link to="/guides" className="text-gray-700 hover:text-indigo-600">Find Guides</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About Us</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
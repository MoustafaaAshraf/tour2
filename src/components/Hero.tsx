import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Explore with Local Experts
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Connect with passionate local guides for unique and authentic travel experiences around the world
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
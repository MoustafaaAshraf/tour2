import React from 'react';
import { Compass, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">WanderGuides</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Connecting travelers with exceptional local guides for authentic experiences worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-500"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-500"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-500"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">Destinations</a></li>
              <li><a href="#" className="hover:text-indigo-500">Tours</a></li>
              <li><a href="#" className="hover:text-indigo-500">Local Guides</a></li>
              <li><a href="#" className="hover:text-indigo-500">Experiences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-500">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-500">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-500">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-500">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-500">Safety</a></li>
              <li><a href="#" className="hover:text-indigo-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-500">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 WanderGuides. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-indigo-500">Terms</a>
              <a href="#" className="hover:text-indigo-500">Privacy</a>
              <a href="#" className="hover:text-indigo-500">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
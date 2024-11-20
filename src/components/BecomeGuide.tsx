import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

export default function BecomeGuide() {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Share Your Passion as a Local Guide
            </h2>
            <p className="text-indigo-100 mb-8">
              Turn your local knowledge and passion into a rewarding opportunity. Join our community of guides and create unforgettable experiences for travelers from around the world.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Choose Your Location</h3>
                  <p className="text-indigo-100">Lead tours in your city or travel to new destinations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Flexible Schedule</h3>
                  <p className="text-indigo-100">Work when you want, set your own availability</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Earn More</h3>
                  <p className="text-indigo-100">Set your own rates and earn tips from satisfied guests</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50">
              Start Guiding Today
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20"
              alt="Local guide"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
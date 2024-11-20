import React from 'react';
import { Star, Clock, Users } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: "Hidden Gems of Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    price: 79,
    duration: "4 hours",
    rating: 4.9,
    reviews: 128,
    guide: "Yuki T."
  },
  {
    id: 2,
    title: "Ancient Rome Walking Tour",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    price: 65,
    duration: "3 hours",
    rating: 4.8,
    reviews: 256,
    guide: "Marco R."
  },
  {
    id: 3,
    title: "Paris Food & Wine",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 95,
    duration: "4 hours",
    rating: 4.9,
    reviews: 189,
    guide: "Sophie L."
  }
];

export default function PopularTours() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Tours</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tour.title}
                </h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{tour.rating}</span>
                  <span className="text-gray-500">({tour.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Guide: {tour.guide}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${tour.price}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
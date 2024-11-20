import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const tours = [
  {
    id: 1,
    title: "Hidden Gems of Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    price: 79,
    duration: "4 hours",
    rating: 4.9,
    reviews: 128,
    guide: "Yuki T.",
    category: "City"
  },
  {
    id: 2,
    title: "Ancient Rome Walking Tour",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    price: 65,
    duration: "3 hours",
    rating: 4.8,
    reviews: 256,
    guide: "Marco R.",
    category: "History"
  },
  {
    id: 3,
    title: "Paris Food & Wine",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 95,
    duration: "4 hours",
    rating: 4.9,
    reviews: 189,
    guide: "Sophie L.",
    category: "Food"
  },
  {
    id: 4,
    title: "Barcelona Gothic Quarter",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    price: 55,
    duration: "3 hours",
    rating: 4.7,
    reviews: 145,
    guide: "Carlos M.",
    category: "History"
  },
  {
    id: 5,
    title: "Kyoto Temple Tour",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: 85,
    duration: "5 hours",
    rating: 4.9,
    reviews: 210,
    guide: "Hana K.",
    category: "Culture"
  },
  {
    id: 6,
    title: "New York Food Tour",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    price: 75,
    duration: "3 hours",
    rating: 4.8,
    reviews: 167,
    guide: "Mike S.",
    category: "Food"
  }
];

export default function Tours() {
  return (
    <div className="pt-16">
      <div className="bg-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Discover Unique Tours</h1>
          <div className="flex gap-4">
            <div className="flex-1 bg-white rounded-lg shadow-sm p-2">
              <div className="flex items-center">
                <Search className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search tours..."
                  className="flex-1 px-4 py-2 outline-none"
                />
              </div>
            </div>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              to={`/tours/${tour.id}`}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {tour.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tour.title}
                </h3>
                <div className="flex items-center justify-between text-gray-500 mb-4">
                  <span>{tour.duration}</span>
                  <span>Guide: {tour.guide}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    ${tour.price}
                  </span>
                  <div className="text-yellow-400 flex items-center">
                    ★ {tour.rating} ({tour.reviews})
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
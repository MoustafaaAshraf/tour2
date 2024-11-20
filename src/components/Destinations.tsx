import React from 'react';
import { MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
    tours: 48,
    rating: 4.9
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    tours: 56,
    rating: 4.8
  },
  {
    id: 3,
    name: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    tours: 42,
    rating: 4.9
  },
  {
    id: 4,
    name: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    tours: 35,
    rating: 4.7
  }
];

export default function Destinations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover extraordinary places with extraordinary people
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.tours} tours</span>
                    <span>•</span>
                    <span>{destination.rating} rating</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
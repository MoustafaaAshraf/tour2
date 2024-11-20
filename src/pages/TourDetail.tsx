import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, MapPin, Star, Calendar } from 'lucide-react';

export default function TourDetail() {
  const { id } = useParams();

  // In a real app, fetch tour data based on id
  const tour = {
    title: "Hidden Gems of Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    price: 79,
    duration: "4 hours",
    rating: 4.9,
    reviews: 128,
    guide: {
      name: "Yuki T.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 4.9,
      reviews: 156
    },
    description: "Discover Tokyo's hidden gems with a local guide. From secret food spots to hidden shrines, experience the city like a true local.",
    highlights: [
      "Visit local food markets and try authentic Japanese street food",
      "Explore hidden shrines and temples off the tourist path",
      "Learn about local customs and traditions",
      "Discover secret photo spots for Instagram-worthy shots"
    ],
    includes: [
      "Local guide",
      "Food tastings",
      "Temple entrance fees",
      "Small group experience"
    ],
    meetingPoint: "Shibuya Station, Hachiko Exit",
    groupSize: "Maximum 8 people",
    languages: ["English", "Japanese"]
  };

  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 inset-x-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{tour.title}</h1>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1">{tour.rating}</span>
                <span className="ml-1">({tour.reviews} reviews)</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                {tour.duration}
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-1" />
                {tour.groupSize}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
              <p>{tour.description}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>
              <ul className="space-y-4">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mr-3">
                      {index + 1}
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-3xl font-bold text-indigo-600 mb-6">
                ${tour.price}
                <span className="text-gray-500 text-lg font-normal"> / person</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{tour.meetingPoint}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="date"
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <select className="border rounded-lg px-3 py-2 w-full">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
                Book Now
              </button>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center space-x-4">
                  <img
                    src={tour.guide.image}
                    alt={tour.guide.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Guide: {tour.guide.name}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{tour.guide.rating}</span>
                      <span className="ml-1">({tour.guide.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
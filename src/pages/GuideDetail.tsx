import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Globe2, Calendar } from 'lucide-react';

export default function GuideDetail() {
  const { id } = useParams();

  // In a real app, fetch guide data based on id
  const guide = {
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 4.9,
    reviews: 156,
    bio: "Born and raised in Tokyo, I've been sharing my city's hidden gems with travelers for over 5 years. Passionate about Japanese culture, food, and photography.",
    languages: ["English", "Japanese"],
    specialties: ["Food & Culture", "Photography", "Historical Sites"],
    experience: "5 years",
    credentials: ["Licensed Tour Guide", "Food Safety Certified", "First Aid Certified"],
    tours: [
      {
        id: 1,
        title: "Hidden Gems of Tokyo",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        price: 79,
        duration: "4 hours",
        rating: 4.9,
        reviews: 128
      },
      {
        id: 2,
        title: "Tokyo Street Food Adventure",
        image: "https://images.unsplash.com/photo-1535924206533-b2f7c0a8e5c2",
        price: 89,
        duration: "3 hours",
        rating: 4.8,
        reviews: 95
      }
    ]
  };

  return (
    <div className="pt-16">
      <div className="bg-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8">
            <img
              src={guide.image}
              alt={guide.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{guide.name}</h1>
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  {guide.location}
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  {guide.rating} ({guide.reviews} reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p>{guide.bio}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe2 className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {guide.languages.map((lang) => (
                    <span key={lang} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold">Specialties</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {guide.specialties.map((specialty) => (
                    <span key={specialty} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">My Tours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guide.tours.map((tour) => (
                  <a
                    key={tour.id}
                    href={`/tours/${tour.id}`}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
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
                      <div className="flex items-center justify-between text-gray-500 mb-4">
                        <span>{tour.duration}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          {tour.rating} ({tour.reviews})
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-indigo-600">
                        ${tour.price}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Book a Private Tour</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Date
                  </label>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      className="border rounded-lg px-3 py-2 w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your interests and what you'd like to explore..."
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
                Contact Guide
              </button>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-2">Credentials</h4>
                <ul className="space-y-2">
                  {guide.credentials.map((credential) => (
                    <li key={credential} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
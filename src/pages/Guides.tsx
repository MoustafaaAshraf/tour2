import React from 'react';
import { MapPin, Star } from 'lucide-react';

const guides = [
  {
    id: 1,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 4.9,
    reviews: 156,
    languages: ["English", "Japanese"],
    specialties: ["Food & Culture", "Photography"],
    tours: 12
  },
  // ... more guides
];

export default function Guides() {
  return (
    <div className="pt-16">
      <div className="bg-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Meet Our Local Guides</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Connect with passionate locals who can't wait to share their culture and stories with you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">{guide.name}</h3>
                  <div className="flex items-center text-white/90 space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{guide.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{guide.rating}</span>
                  <span className="text-gray-500">({guide.reviews} reviews)</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Languages</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {guide.languages.map((lang) => (
                        <span key={lang} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Specialties</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {guide.specialties.map((specialty) => (
                        <span key={specialty} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={`/guides/${guide.id}`}
                    className="block w-full bg-indigo-600 text-white text-center px-4 py-2 rounded-full hover:bg-indigo-700"
                  >
                    View Profile & Tours
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
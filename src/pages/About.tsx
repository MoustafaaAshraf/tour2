import React from 'react';
import { Globe2, Users, Shield, Heart } from 'lucide-react';

const stats = [
  { label: 'Active Guides', value: '2,500+' },
  { label: 'Happy Travelers', value: '100,000+' },
  { label: 'Cities', value: '150+' },
  { label: 'Countries', value: '45+' },
];

const values = [
  {
    icon: Globe2,
    title: 'Local Authenticity',
    description: 'We believe in promoting authentic local experiences that benefit both travelers and communities.'
  },
  {
    icon: Users,
    title: 'Cultural Exchange',
    description: 'Our platform facilitates meaningful connections between travelers and local guides.'
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'We verify all our guides and implement strict safety measures to ensure worry-free experiences.'
  },
  {
    icon: Heart,
    title: 'Sustainable Tourism',
    description: 'We promote responsible tourism practices that respect local cultures and environments.'
  },
];

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About WanderGuides</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Connecting passionate local guides with curious travelers for authentic and unforgettable experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              Founded in 2024, WanderGuides was born from a simple idea: travel is better with local insights. We believed that the best way to experience a destination was through the eyes of those who call it home.
            </p>
            <p className="mb-4">
              What started as a small community of passionate guides in a few European cities has grown into a global network of local experts sharing their knowledge, culture, and stories with travelers from around the world.
            </p>
            <p>
              Today, we're proud to facilitate connections between curious travelers and knowledgeable locals, creating authentic experiences that benefit both visitors and communities alike.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
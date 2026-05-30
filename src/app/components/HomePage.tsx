import { useState } from 'react';
import { Search, MapPin, Shield, Users, Star, TrendingUp } from 'lucide-react';
import { PropertyCard } from './PropertyCard';
import { FilterSheet } from './FilterSheet';
import { SafetyBadge } from './SafetyBadge';

const MOCK_PROPERTIES = [
  {
    id: 1,
    name: "Sunshine Dormitory",
    address: "123 Luna St., Jaro, Iloilo City",
    price: 3500,
    distance: 0.3,
    university: "CPU",
    images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800"],
    rating: 4.8,
    reviews: 124,
    verified: true,
    safetyScore: 95,
    amenities: ["WiFi", "Water", "Security"],
    floodRisk: "Low",
    available: 3
  },
  {
    id: 2,
    name: "Scholars Haven",
    address: "456 Rizal Ave., La Paz, Iloilo City",
    price: 4200,
    distance: 0.5,
    university: "UP Visayas",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    rating: 4.9,
    reviews: 89,
    verified: true,
    safetyScore: 98,
    amenities: ["WiFi", "AC", "Laundry", "Kitchen"],
    floodRisk: "None",
    available: 2
  },
  {
    id: 3,
    name: "Student's Rest House",
    address: "789 Bonifacio Dr., Molo, Iloilo City",
    price: 2800,
    distance: 1.2,
    university: "ISAT-U",
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
    rating: 4.5,
    reviews: 67,
    verified: true,
    safetyScore: 88,
    amenities: ["WiFi", "Water"],
    floodRisk: "Medium",
    available: 5
  },
  {
    id: 4,
    name: "Casa Estudiantil",
    address: "234 Gen. Luna St., City Proper, Iloilo City",
    price: 5000,
    distance: 0.2,
    university: "CPU",
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"],
    rating: 4.7,
    reviews: 156,
    verified: true,
    safetyScore: 92,
    amenities: ["WiFi", "AC", "Study Room", "Gym"],
    floodRisk: "Low",
    available: 1
  }
];

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    distance: 5,
    floodRisk: 'all',
    minSafetyScore: 0
  });

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dormly</h1>
            <p className="text-blue-100 text-sm">Safe. Student. Housing.</p>
          </div>
          <Shield className="w-8 h-8" />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by location, university..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* University Tabs */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          {['all', 'CPU', 'UP Visayas', 'ISAT-U', 'USA', 'UI-Phinma'].map((uni) => (
            <button
              key={uni}
              onClick={() => setSelectedUniversity(uni)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                selectedUniversity === uni
                  ? 'bg-white text-blue-600'
                  : 'bg-blue-500 text-white hover:bg-blue-400'
              }`}
            >
              {uni === 'all' ? 'All Universities' : uni}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-4 mb-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-600">Verified</span>
            </div>
            <p className="text-lg font-bold text-gray-900">1,247</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-xs text-gray-600">Students</span>
            </div>
            <p className="text-lg font-bold text-gray-900">8,432</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="text-xs text-gray-600">Avg Rating</span>
            </div>
            <p className="text-lg font-bold text-gray-900">4.7</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">
            {MOCK_PROPERTIES.length} properties near you
          </h2>
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700"
          >
            <TrendingUp className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Property Listings */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        <div className="space-y-4">
          {MOCK_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Filter Sheet */}
      {filterOpen && (
        <FilterSheet
          filters={filters}
          onFiltersChange={setFilters}
          onClose={() => setFilterOpen(false)}
        />
      )}
    </div>
  );
}

import { Heart, Trash2, MapPin, Star } from 'lucide-react';

const SAVED_PROPERTIES = [
  {
    id: 1,
    name: "Sunshine Dormitory",
    address: "123 Luna St., Jaro",
    price: 3500,
    distance: 0.3,
    university: "CPU",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
    rating: 4.8,
    savedDate: "2 days ago"
  },
  {
    id: 2,
    name: "Scholars Haven",
    address: "456 Rizal Ave., La Paz",
    price: 4200,
    distance: 0.5,
    university: "UP Visayas",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    rating: 4.9,
    savedDate: "5 days ago"
  },
  {
    id: 4,
    name: "Casa Estudiantil",
    address: "234 Gen. Luna St., City Proper",
    price: 5000,
    distance: 0.2,
    university: "CPU",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    rating: 4.7,
    savedDate: "1 week ago"
  }
];

export function SavedPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white px-4 py-6">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-6 h-6 fill-white" />
          <h1 className="text-2xl font-bold">Saved Properties</h1>
        </div>
        <p className="text-pink-100">Your favorite housing options</p>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <p className="text-sm text-gray-600">
          You have <span className="font-semibold text-gray-900">{SAVED_PROPERTIES.length} saved properties</span>
        </p>
      </div>

      {/* Saved List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20">
        {SAVED_PROPERTIES.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <Heart className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">No saved properties yet</h3>
            <p className="text-sm text-gray-600">
              Start exploring and save your favorite places to compare later!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {SAVED_PROPERTIES.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="flex">
                  {/* Image */}
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-32 h-32 object-cover"
                  />

                  {/* Content */}
                  <div className="flex-1 p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                          <MapPin className="w-3 h-3" />
                          <span>{property.distance} km to {property.university}</span>
                        </div>
                        <p className="text-xs text-gray-500">{property.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                        </div>
                        <p className="text-lg font-bold text-blue-600">
                          ₱{property.price.toLocaleString()}
                          <span className="text-xs text-gray-500 font-normal">/mo</span>
                        </p>
                      </div>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-2">Saved {property.savedDate}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 px-3 py-2 flex gap-2">
                  <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    Compare
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

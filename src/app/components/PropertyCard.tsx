import { MapPin, Star, Shield, Droplet, Users, Wifi } from 'lucide-react';

interface Property {
  id: number;
  name: string;
  address: string;
  price: number;
  distance: number;
  university: string;
  images: string[];
  rating: number;
  reviews: number;
  verified: boolean;
  safetyScore: number;
  amenities: string[];
  floodRisk: string;
  available: number;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const getFloodRiskColor = (risk: string) => {
    switch (risk) {
      case 'None': return 'text-green-600 bg-green-50';
      case 'Low': return 'text-yellow-600 bg-yellow-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      case 'High': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        {property.verified && (
          <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium">
            <Shield className="w-3.5 h-3.5" />
            Verified Safe
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <p className="text-xs text-gray-600">Safety Score</p>
          <p className="text-lg font-bold text-green-600">{property.safetyScore}%</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Rating */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.distance} km to {property.university}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-900">{property.rating}</span>
            <span className="text-xs text-gray-600">({property.reviews})</span>
          </div>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-600 mb-3">{property.address}</p>

        {/* Flood Risk Badge */}
        <div className="mb-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${getFloodRiskColor(property.floodRisk)}`}>
            <Droplet className="w-4 h-4" />
            Flood Risk: {property.floodRisk}
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {property.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-xs text-gray-500">+{property.amenities.length - 3} more</span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-600">Starting from</p>
            <p className="text-xl font-bold text-blue-600">₱{property.price.toLocaleString()}/mo</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {property.available} room{property.available !== 1 ? 's' : ''} left
            </span>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

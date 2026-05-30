import { X, Sliders } from 'lucide-react';

interface Filters {
  priceRange: [number, number];
  distance: number;
  floodRisk: string;
  minSafetyScore: number;
}

interface FilterSheetProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onClose: () => void;
}

export function FilterSheet({ filters, onFiltersChange, onClose }: FilterSheetProps) {
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Price Range (₱/month)
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])
                }
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₱{filters.priceRange[0].toLocaleString()}</span>
                <span>₱{filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Distance */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Maximum Distance from Campus
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0.1"
                max="5"
                step="0.1"
                value={filters.distance}
                onChange={(e) => updateFilter('distance', parseFloat(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="text-sm text-gray-600 text-center">
                Within {filters.distance.toFixed(1)} km
              </div>
            </div>
          </div>

          {/* Flood Risk */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Flood Risk Level
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['all', 'None', 'Low', 'Medium'].map((risk) => (
                <button
                  key={risk}
                  onClick={() => updateFilter('floodRisk', risk)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    filters.floodRisk === risk
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {risk === 'all' ? 'All Levels' : risk}
                </button>
              ))}
            </div>
          </div>

          {/* Safety Score */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Minimum Safety Score
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={filters.minSafetyScore}
                onChange={(e) => updateFilter('minSafetyScore', parseInt(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="text-sm text-gray-600 text-center">
                {filters.minSafetyScore}% or higher
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => {
                onFiltersChange({
                  priceRange: [0, 10000],
                  distance: 5,
                  floodRisk: 'all',
                  minSafetyScore: 0
                });
              }}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

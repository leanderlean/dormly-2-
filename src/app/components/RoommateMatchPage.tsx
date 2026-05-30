import { useState } from 'react';
import { Users, Moon, Coffee, BookOpen, Music, Briefcase, Heart, X, Check } from 'lucide-react';

const MOCK_MATCHES = [
  {
    id: 1,
    name: "Maria Santos",
    age: 20,
    course: "BS Computer Engineering",
    university: "CPU",
    year: "3rd Year",
    matchScore: 95,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    traits: {
      sleepSchedule: "Early Bird (10PM - 6AM)",
      studyHabits: "Focused & Quiet",
      cleanliness: "Very Organized",
      socialLevel: "Moderately Social"
    },
    interests: ["Reading", "Studying", "Cooking"],
    budget: "₱3,500 - ₱4,500",
    looking: "Quiet study environment near CPU"
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    age: 19,
    course: "BS Civil Engineering",
    university: "UP Visayas",
    year: "2nd Year",
    matchScore: 88,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    traits: {
      sleepSchedule: "Night Owl (12AM - 8AM)",
      studyHabits: "Group Study Preferred",
      cleanliness: "Organized",
      socialLevel: "Very Social"
    },
    interests: ["Sports", "Music", "Gaming"],
    budget: "₱3,000 - ₱4,000",
    looking: "Active community near campus"
  },
  {
    id: 3,
    name: "Anna Reyes",
    age: 21,
    course: "BS Nursing",
    university: "CPU",
    year: "4th Year",
    matchScore: 92,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    traits: {
      sleepSchedule: "Flexible Schedule",
      studyHabits: "Focused & Quiet",
      cleanliness: "Very Organized",
      socialLevel: "Selective Social"
    },
    interests: ["Reading", "Yoga", "Volunteering"],
    budget: "₱4,000 - ₱5,000",
    looking: "Safe, quiet place for clinical rotation schedule"
  }
];

export function RoommateMatchPage() {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white px-4 py-6">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Roommate Matching</h1>
        </div>
        <p className="text-purple-100">Find your perfect study partner</p>
      </div>

      {/* Match Score Info */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Your Top Matches</p>
            <p className="font-semibold text-gray-900">{MOCK_MATCHES.length} compatible students found</p>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
            Edit Preferences
          </button>
        </div>
      </div>

      {/* Matches List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20">
        <div className="space-y-4">
          {MOCK_MATCHES.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Match Header */}
              <div className="relative">
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1.5 rounded-full font-bold text-sm">
                  {match.matchScore}% Match
                </div>
                <div className="flex items-start gap-4 p-4">
                  <img
                    src={match.avatar}
                    alt={match.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{match.name}</h3>
                    <p className="text-sm text-gray-600">{match.age} years old • {match.year}</p>
                    <p className="text-sm text-purple-600 font-medium mt-1">{match.course}</p>
                    <p className="text-xs text-gray-500 mt-1">{match.university}</p>
                  </div>
                </div>
              </div>

              {/* Compatibility Traits */}
              <div className="px-4 pb-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Moon className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-gray-600">Sleep Schedule</span>
                    </div>
                    <p className="text-sm text-gray-900">{match.traits.sleepSchedule}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-gray-600">Study Habits</span>
                    </div>
                    <p className="text-sm text-gray-900">{match.traits.studyHabits}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium text-gray-600">Cleanliness</span>
                    </div>
                    <p className="text-sm text-gray-900">{match.traits.cleanliness}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span className="text-xs font-medium text-gray-600">Social Level</span>
                    </div>
                    <p className="text-sm text-gray-900">{match.traits.socialLevel}</p>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <p className="text-xs font-medium text-gray-600 mb-2">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    {match.interests.map((interest) => (
                      <span
                        key={interest}
                        className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Budget & Looking For */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-gray-600">Budget:</span>
                    <span className="text-sm text-gray-900">{match.budget}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-gray-600">Looking for:</span>
                    <span className="text-sm text-gray-900">{match.looking}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    <X className="w-4 h-4" />
                    Pass
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">
                    <Heart className="w-4 h-4" />
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

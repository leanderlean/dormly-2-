import { useState } from 'react';
import { User, Bell, Shield, CreditCard, LogOut, ChevronRight, Heart, BookmarkCheck, Settings } from 'lucide-react';

export function ProfilePage() {
  const [user] = useState({
    name: "Rann Andrade",
    email: "rann.andrade@student.cpu.edu.ph",
    university: "Central Philippine University",
    course: "BS Electrical Engineering",
    year: "4th Year",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    verified: true
  });

  const menuItems = [
    {
      section: "Account",
      items: [
        { icon: User, label: "Edit Profile", badge: null },
        { icon: Shield, label: "Safety Preferences", badge: null },
        { icon: Bell, label: "Notifications", badge: "3 new" },
        { icon: CreditCard, label: "Payment Methods", badge: null }
      ]
    },
    {
      section: "My Activity",
      items: [
        { icon: BookmarkCheck, label: "Saved Properties", badge: "12" },
        { icon: Heart, label: "Roommate Matches", badge: "5" },
        { icon: Settings, label: "Search Preferences", badge: null }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 py-6 pb-8">
        <h1 className="text-2xl font-bold mb-1">My Profile</h1>
        <p className="text-blue-100">Manage your account & preferences</p>
      </div>

      {/* Profile Card */}
      <div className="px-4 -mt-4 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
              {user.verified && (
                <div className="absolute -bottom-1 -right-1 bg-green-600 rounded-full p-1.5">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-gray-900 text-lg">{user.name}</h2>
              <p className="text-sm text-gray-600 mb-1">{user.email}</p>
              <div className="mt-2">
                <p className="text-sm font-medium text-purple-600">{user.course}</p>
                <p className="text-xs text-gray-500">{user.university} • {user.year}</p>
              </div>
            </div>
          </div>

          {user.verified && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-green-600">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Student Verification Complete</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        {menuItems.map((section) => (
          <div key={section.section} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
              {section.section}
            </h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {section.items.map((item, index) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors ${
                    index !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Session
          </h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-red-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-red-600" />
                </div>
                <span className="font-medium text-red-600">Log Out</span>
              </div>
              <ChevronRight className="w-5 h-5 text-red-400" />
            </button>
          </div>
        </div>

        {/* App Version */}
        <div className="text-center pb-6">
          <p className="text-xs text-gray-400">Dormly v1.0.0</p>
          <p className="text-xs text-gray-400 mt-1">Safe. Student. Housing.</p>
        </div>
      </div>
    </div>
  );
}

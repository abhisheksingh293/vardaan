import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Class10cbseextraResource = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const resources = [
    {
      name: "SST Practice Paper - Set 1",
      path: "/studymaterial/class10/extraresources/Class10cbsesstpracticepaper1",
      description: "Half Yearly 2025",
      icon: "📝",
      bgGradient: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      name: "SST Practice Paper - Set 2",
      path: "/studymaterial/class10/extraresources/Class10cbsesstpracticepaper2",
      description: "Half Yearly 2025",
      icon: "📝",
      bgGradient: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      name: "Practice Questions",
      path: "/studymaterial/class10/extraresources/practice-questions",
      description: "Half Yearly 2025",
      icon: "📝",
      bgGradient: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      name: "Revision Notes",
      path: "/studymaterial/class10/extraresources/revision-notes",
      description: "Half Yearly 2025",
      icon: "📝",
      bgGradient: 'from-yellow-500 to-yellow-600',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      name: "Important Questions",
      path: "/studymaterial/class10/extraresources/important-questions",
      description: "Half Yearly 2025",
      icon: "📝",
      bgGradient: 'from-red-500 to-red-600',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      name: "Practice Questions",
      path: "/studymaterial/class10/extraresources/practice-questions",
      description: "Half Yearly 2025",
      icon: "📝",
      bgGradient: 'from-indigo-500 to-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    }
  ];

  

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeTab);

  const handleResourceClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 font-inter">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .card-hover-effect {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .card-hover-effect:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
        `}
      </style>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 mb-4">
            Class 10 Extra Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access premium study materials, practice papers, and expert-curated resources to excel in your exams.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              onClick={() => handleResourceClick(resource.path)}
              className={`bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover-effect cursor-pointer group`}
            >
              <div className={`h-3 bg-gradient-to-r ${resource.bgGradient}`}></div>
              <div className="p-6">
                <div className={`w-14 h-14 ${resource.iconBg} ${resource.iconColor} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.name}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                  
                    
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Class10cbseextraResource;


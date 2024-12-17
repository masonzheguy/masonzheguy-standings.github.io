import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const SwimmerCard = ({ rank, name, bio, achievements, speciality, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Color gradients for each card
  const gradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-indigo-600',
    'from-green-400 to-emerald-600',
    'from-yellow-400 to-orange-500',
    'from-red-500 to-rose-600'
  ];

  return (
    <Card 
      className={`w-full max-w-md mx-auto bg-gradient-to-br ${gradients[rank-1]} text-white shadow-xl 
        transform transition duration-300 hover:scale-105 cursor-pointer`}
      onClick={() => {
        setIsExpanded(!isExpanded);
        onSelect({ name, speciality, rank });
      }}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <CardTitle className="text-2xl font-bold">
              {name}
            </CardTitle>
            <span className="bg-white/30 px-2 py-1 rounded-full text-sm flex items-center">
              🏊 {speciality}
            </span>
          </div>
          <div className="bg-white/30 px-3 py-1 rounded-full text-lg font-semibold flex items-center">
            🏆 Rank {rank}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/90 italic mb-4">
          "{bio}"
        </CardDescription>
        {isExpanded && (
          <div className="mt-4 bg-white/20 rounded-lg p-4">
            <h3 className="font-bold mb-2 flex items-center">
              🚩 Achievements
            </h3>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center">
                  🏊‍♂️ {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const GrapesSwimmers = () => {
  const [selectedSwimmer, setSelectedSwimmer] = useState(null);

  const swimmers = [
    { 
      name: 'Elijah', 
      bio: 'Freestyle Specialist', 
      rank: 1, 
      speciality: 'Freestyle',
      achievements: [
        'Pro 500 swimmer',
        'Thats about it'
      ],
      details: {
        age: 17,
        weight: '150 lbs',
        height: "5'10\"",
        bestTime: 'Not entered yet'
      }
    },
    { 
      name: 'Mason', 
      bio: 'Butterfly Maestro', 
      rank: 2,
      speciality: 'Butterfly',
      achievements: [
        'Fly man',
        'Like Leo but better',
        'Like Ben but taller'
      ],
      details: {
        age: 16,
        weight: '145 lbs',
        height: "5'9\"",
        bestTime: 'Not entered yet'
      }
    },
    { 
      name: 'Ben', 
      bio: 'IM Competitor', 
      rank: 3,
      speciality: 'IM',
      achievements: [
        'Short',
        'Like Will but doesn\'t skip'
      ],
      details: {
        age: 16,
        weight: '140 lbs',
        height: "5'6\"",
        bestTime: 'Not entered yet'
      }
    },
    { 
      name: 'Leo', 
      bio: 'Backstroke Warrior', 
      rank: 4,
      speciality: 'Backstroke',
      achievements: [
        'Rehabilitation',
        'Crippled'
      ],
      details: {
        age: 17,
        weight: '155 lbs',
        height: "5'11\"",
        bestTime: 'Not entered yet'
      }
    },
    { 
      name: 'Will', 
      bio: 'Practice Skipper', 
      rank: 5,
      speciality: 'Breaststroke',
      achievements: [
        'Skips practice'
      ],
      details: {
        age: 16,
        weight: '148 lbs',
        height: "5'8\"",
        bestTime: 'Not entered yet'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex">
      <div className="w-3/4 p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          🏊 The Grapes 🍇
        </h1>
        <div className="space-y-6">
          {swimmers.map(swimmer => (
            <SwimmerCard 
              key={swimmer.name} 
              name={swimmer.name} 
              bio={swimmer.bio} 
              rank={swimmer.rank}
              speciality={swimmer.speciality}
              achievements={swimmer.achievements}
              onSelect={(swimmer) => setSelectedSwimmer(swimmer)}
            />
          ))}
        </div>
        <div className="text-center mt-10 bg-white/50 rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            The Grapes Swim Team Motto
          </h2>
          <p className="italic text-gray-700">
            "long leg short leg"
          </p>
        </div>
      </div>
      
      <div className="w-1/4 bg-white/80 p-6 border-l">
        {selectedSwimmer ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedSwimmer.name} Details</h2>
            {swimmers.find(s => s.name === selectedSwimmer.name)?.details && (
              <div className="space-y-2">
                <p>🔢 Rank: {selectedSwimmer.rank}</p>
                <p>🏊 Speciality: {selectedSwimmer.speciality}</p>
                <p>📏 Height: {swimmers.find(s => s.name === selectedSwimmer.name).details.height}</p>
                <p>⚖️ Weight: {swimmers.find(s => s.name === selectedSwimmer.name).details.weight}</p>
                <p>🕰️ Best Time: {swimmers.find(s => s.name === selectedSwimmer.name).details.bestTime}</p>
              </div>
            )}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">🚩 Achievements</h3>
              <ul className="space-y-2">
                {swimmers.find(s => s.name === selectedSwimmer.name)?.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    🏊‍♂️ {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Select a swimmer to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default GrapesSwimmers;

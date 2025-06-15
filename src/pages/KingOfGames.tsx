
import { ExternalLink, Users, Trophy, Zap, Target } from "lucide-react";

const KingOfGames = () => {
  const handleRedirect = () => {
    window.open("https://www.battlegroundsmobileindia.com/", "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 gradient-text text-glow floating-animation">
          King of Games
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Experience the ultimate battleground where legends are born. Join millions of players in the most intense mobile gaming experience.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Game Image */}
        <div className="relative">
          <div className="futuristic-card rounded-2xl overflow-hidden hover-lift neon-glow">
            <img 
              src="/lovable-uploads/afbccd8a-6f72-49a2-b52e-38fc11fbf81b.png" 
              alt="Battlegrounds Mobile India"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Game Info */}
        <div className="space-y-8">
          <div className="futuristic-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-6 text-glow">
              Battlegrounds Mobile India
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                The most popular battle royale game that has taken India by storm. Drop into the battleground, 
                loot weapons, and fight to be the last one standing in this ultimate survival game.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-black/40 rounded-xl border border-cyan-400/20">
                  <Users className="text-cyan-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">100 Players</div>
                    <div className="text-gray-400 text-sm">Per Match</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-black/40 rounded-xl border border-cyan-400/20">
                  <Trophy className="text-yellow-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">Ranked Mode</div>
                    <div className="text-gray-400 text-sm">Competitive</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-black/40 rounded-xl border border-cyan-400/20">
                  <Zap className="text-purple-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">Multiple Maps</div>
                    <div className="text-gray-400 text-sm">Diverse Terrain</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-black/40 rounded-xl border border-cyan-400/20">
                  <Target className="text-red-400" size={24} />
                  <div>
                    <div className="text-white font-semibold">Tactical Combat</div>
                    <div className="text-gray-400 text-sm">Strategy First</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Game Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Ultra HD graphics with realistic gameplay</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Multiple game modes including Classic and Arcade</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Team up with friends in squad matches</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Regular updates with new content and events</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleRedirect}
                className="w-full game-button flex items-center justify-center space-x-3 text-lg font-bold"
              >
                <span>Play Battlegrounds Mobile India</span>
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16">
        <div className="futuristic-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">Ready to Become the King?</h3>
          <p className="text-gray-300 text-lg mb-6">
            Join the battle royale that has captivated millions of players across India. 
            Every match is a new opportunity to prove your skills and claim victory.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>• Free to Play</span>
            <span>• Regular Tournaments</span>
            <span>• Seasonal Rewards</span>
            <span>• Cross-Platform Play</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KingOfGames;


import { ExternalLink, Users, Trophy, Zap, Target } from "lucide-react";

const KingOfGames = () => {
  const handleRedirect = () => {
    window.open("https://www.battlegroundsmobileindia.com/", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
            Gamecity
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Experience the ultimate battleground where legends are born. Join millions of players in the most intense mobile gaming experience.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex justify-center">
          {/* Game Info */}
          <div className="max-w-4xl w-full">
            <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                Battlegrounds Mobile India
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center px-2">
                  The most popular battle royale game that has taken India by storm. Drop into the battleground, 
                  loot weapons, and fight to be the last one standing in this ultimate survival game.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                    <Users className="text-blue-600 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-gray-800 font-semibold text-sm sm:text-base">100 Players</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Per Match</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                    <Trophy className="text-yellow-500 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-gray-800 font-semibold text-sm sm:text-base">Ranked Mode</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Competitive</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                    <Zap className="text-purple-500 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-gray-800 font-semibold text-sm sm:text-base">Multiple Maps</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Diverse Terrain</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                    <Target className="text-red-500 flex-shrink-0" size={20} />
                    <div>
                      <div className="text-gray-800 font-semibold text-sm sm:text-base">Tactical Combat</div>
                      <div className="text-gray-500 text-xs sm:text-sm">Strategy First</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">Game Features:</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ultra HD graphics with realistic gameplay</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Multiple game modes including Classic and Arcade</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Team up with friends in squad matches</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular updates with new content and events</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleRedirect}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl"
                >
                  <span className="text-center">Play Battlegrounds Mobile India</span>
                  <ExternalLink size={18} className="flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 sm:mt-16">
          <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Ready to Enter Gamecity?</h3>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 px-2">
              Join the battle royale that has captivated millions of players across India. 
              Every match is a new opportunity to prove your skills and claim victory.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <span>• Free to Play</span>
              <span>• Regular Tournaments</span>
              <span>• Seasonal Rewards</span>
              <span>• Cross-Platform Play</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KingOfGames;

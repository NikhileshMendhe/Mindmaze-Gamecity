
import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Users, Trophy, Clock } from "lucide-react";

const GameLobby = () => {
  const [selectedMode, setSelectedMode] = useState<string>("1v1");
  const [isSearching, setIsSearching] = useState(false);

  const gameModes = [
    {
      id: "1v1",
      name: "1v1 Duel",
      icon: Play,
      description: "Race against another player",
      color: "from-red-500 to-pink-500"
    },
    {
      id: "coop",
      name: "Co-op Mode",
      icon: Users,
      description: "Solve puzzles together",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: "ranked",
      name: "Ranked Queue",
      icon: Trophy,
      description: "Competitive matchmaking",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const handleStartGame = () => {
    setIsSearching(true);
    // Simulate matchmaking delay
    setTimeout(() => {
      setIsSearching(false);
      // In a real app, this would navigate to the actual game
      console.log(`Starting ${selectedMode} game...`);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Game Lobby</h1>
        <p className="text-gray-400 text-lg">Choose your game mode and start playing</p>
      </div>

      {/* Game Mode Selection */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {gameModes.map((mode) => {
          const Icon = mode.icon;
          return (
            <div
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 ${
                selectedMode === mode.id
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-purple-500/20 hover:border-purple-500/40"
              }`}
            >
              <div className="text-center">
                <div className={`bg-gradient-to-br ${mode.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{mode.name}</h3>
                <p className="text-gray-400 text-sm">{mode.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Play Button */}
      <div className="text-center mb-8">
        {!isSearching ? (
          <button
            onClick={handleStartGame}
            className="game-button text-white text-xl px-12 py-4"
          >
            <Play className="inline mr-2" size={24} />
            Find Match
          </button>
        ) : (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 max-w-md mx-auto">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-white">Searching for opponent...</h3>
              <p className="text-gray-400">Finding the perfect match for you</p>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
          <div className="text-2xl font-bold text-purple-400 mb-1">1,234</div>
          <div className="text-gray-400 text-sm">Players Online</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
          <div className="text-2xl font-bold text-pink-400 mb-1">45</div>
          <div className="text-gray-400 text-sm">Active Matches</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-1">2:30</div>
          <div className="text-gray-400 text-sm">Avg Match Time</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
          <div className="text-2xl font-bold text-yellow-400 mb-1">856</div>
          <div className="text-gray-400 text-sm">Your Rank</div>
        </div>
      </div>

      {/* Demo Game Link */}
      <div className="text-center mt-8">
        <Link 
          to="/game/demo"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-purple-300 border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200"
        >
          <Clock className="inline mr-2" size={18} />
          Try Demo Game
        </Link>
      </div>
    </div>
  );
};

export default GameLobby;

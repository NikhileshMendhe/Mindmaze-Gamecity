
import { Link } from "react-router-dom";
import { Play, Users, Trophy, Zap } from "lucide-react";
import PuzzlePreview from "../components/PuzzlePreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-glow">
                MindMaze
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enter the ultimate arena of logic and strategy. Challenge players worldwide in real-time puzzle battles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lobby" className="game-button text-white text-lg">
                <Play className="inline mr-2" size={20} />
                Start Playing
              </Link>
              <Link to="/leaderboard" className="px-6 py-3 rounded-xl font-semibold text-purple-300 border border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200">
                <Trophy className="inline mr-2" size={20} />
                View Rankings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Game Modes</h2>
          <p className="text-gray-400 text-lg">Choose your battleground</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">1v1 Duel</h3>
              <p className="text-gray-400">Race against another player to solve the same puzzle first</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Co-op Mode</h3>
              <p className="text-gray-400">Work together with a partner to solve complex puzzles</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Ranked Queue</h3>
              <p className="text-gray-400">Climb the ladder with skill-based matchmaking</p>
            </div>
          </div>
        </div>

        {/* Puzzle Preview */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-white">Puzzle Types</h2>
          <p className="text-gray-400 text-lg">Master different types of logic challenges</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PuzzlePreview 
            title="Lights Out"
            description="Toggle lights to turn them all off"
            type="lights-out"
          />
          <PuzzlePreview 
            title="Path Finder"
            description="Connect start to finish efficiently"
            type="path-finder"
          />
          <PuzzlePreview 
            title="Symbol Decoder"
            description="Crack the hidden pattern"
            type="symbol-decoder"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

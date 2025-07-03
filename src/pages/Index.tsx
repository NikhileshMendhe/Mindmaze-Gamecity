import { Link } from "react-router-dom";
import { Play, Users, Trophy, Zap, Star, Gift, Gamepad2, Puzzle, MapPin } from "lucide-react";

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
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-purple-400" size={24} />
              <p className="text-2xl md:text-3xl font-semibold text-purple-300">
                The Ultimate Game City for Gamers
              </p>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Welcome to the digital metropolis where legendary games, mind-bending puzzles, and epic adventures await. 
              Your gateway to unlimited gaming experiences.
            </p>
            
            {/* Big Play Section */}
            <div className="mb-12">
              <Link to="/lobby" className="inline-block">
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-1 rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-12 py-6 rounded-3xl text-white font-bold text-2xl md:text-3xl flex items-center gap-4 hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                    <Play size={36} className="text-white" />
                    BIG PLAY
                    <Play size={36} className="text-white" />
                  </div>
                </div>
              </Link>
              <p className="text-gray-400 mt-4 text-lg">
                Jump into the action - All games, One destination
              </p>
            </div>

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

      {/* Game City Districts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Explore Game City Districts</h2>
          <p className="text-gray-400 text-lg">Navigate through different gaming neighborhoods in MindMaze</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Legendary Games</h3>
              <p className="text-gray-400">Play epic free-to-play games including Fortnite, League of Legends, Counter-Strike 2, and more legendary titles</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Puzzle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Puzzle Games</h3>
              <p className="text-gray-400">Challenge your mind with logic puzzles, chess, card games, and brain teasers designed to test your strategic thinking</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Fun Games</h3>
              <p className="text-gray-400">Enjoy casual gaming with classics like Tic Tac Toe, Snake, Tetris, and Pac-Man for quick entertainment</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Hard Games</h3>
              <p className="text-gray-400">Discover premium game giveaways featuring titles like Cyberpunk 2077, Elden Ring, and other challenging experiences</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 neon-glow">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Best Games</h3>
              <p className="text-gray-400">Explore top-rated character classes and RPG elements with detailed stats, ratings, and strategic gameplay features</p>
            </div>
          </div>
        </div>

        {/* Game Modes Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Game Modes</h2>
          <p className="text-gray-400 text-lg">Choose your battleground</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
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

        {/* Detailed Game Information */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Available Games</h2>
          <p className="text-gray-400 text-lg">Complete overview of all game categories</p>
        </div>
        
        <div className="space-y-12">
          {/* Legendary Games Section */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Legendary Games</h3>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              Access to the most popular free-to-play games that have defined gaming culture. From battle royales to MOBAs, 
              these games offer competitive multiplayer experiences with millions of active players worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">Featured Titles Include:</h4>
                <ul className="space-y-1">
                  <li>• Battle Royale Games (Fortnite, Apex Legends)</li>
                  <li>• MOBA Games (League of Legends, Dota 2)</li>
                  <li>• FPS Games (Counter-Strike 2, Valorant)</li>
                  <li>• MMORPGs (World of Warcraft, Final Fantasy XIV)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Game Features:</h4>
                <ul className="space-y-1">
                  <li>• Competitive multiplayer gameplay</li>
                  <li>• Regular content updates</li>
                  <li>• Esports tournaments</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Puzzle Games Section */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Puzzle size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Puzzle Games</h3>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              Test your cognitive abilities with our collection of brain-challenging puzzles. From classic games like Chess 
              to innovative logic puzzles, these games are designed to improve problem-solving skills and strategic thinking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">Available Puzzles:</h4>
                <ul className="space-y-1">
                  <li>• Lights Out - Toggle pattern puzzles</li>
                  <li>• Chess - Classic strategy board game</li>
                  <li>• Card Battle - Strategic card gameplay</li>
                  <li>• Symbol Decoder - Memory pattern games</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Game Modes:</h4>
                <ul className="space-y-1">
                  <li>• 1v1 Competitive matches</li>
                  <li>• Co-op collaborative solving</li>
                  <li>• Ranked progression system</li>
                  <li>• Practice mode available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fun Games Section */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Gamepad2 size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Fun Games</h3>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              Enjoy classic arcade and casual games that bring nostalgic entertainment. Perfect for quick gaming sessions 
              and relaxation, these timeless games offer simple yet engaging gameplay mechanics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">Classic Games:</h4>
                <ul className="space-y-1">
                  <li>• Snake - Navigate and grow your snake</li>
                  <li>• Tetris - Block-stacking puzzle game</li>
                  <li>• Pac-Man - Maze navigation adventure</li>
                  <li>• Tic Tac Toe - Simple strategy game</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Categories:</h4>
                <ul className="space-y-1">
                  <li>• Arcade classics</li>
                  <li>• Puzzle games</li>
                  <li>• Strategy games</li>
                  <li>• Action games</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hard Games Section */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Gift size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Hard Games</h3>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              Discover premium gaming experiences through our giveaway collection. Access high-quality games and exclusive 
              content that would normally require purchase, all available through limited-time promotional offers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">Featured Giveaways:</h4>
                <ul className="space-y-1">
                  <li>• AAA Game titles (Cyberpunk 2077, Elden Ring)</li>
                  <li>• Indie game collections</li>
                  <li>• DLC and expansion packs</li>
                  <li>• Gaming software and tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Giveaway Types:</h4>
                <ul className="space-y-1">
                  <li>• Limited-time offers</li>
                  <li>• Beta access keys</li>
                  <li>• Full game licenses</li>
                  <li>• Premium content unlocks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Games Section */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Trophy size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Best Games</h3>
            </div>
            <p className="text-gray-300 mb-4 text-lg">
              Explore our curated collection of top-rated character classes and RPG elements. Each entry features detailed 
              statistics, difficulty ratings, and strategic gameplay mechanics for serious RPG enthusiasts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">Character Classes:</h4>
                <ul className="space-y-1">
                  <li>• Warrior classes with combat specialization</li>
                  <li>• Mage classes with elemental powers</li>
                  <li>• Rogue classes with stealth abilities</li>
                  <li>• Support classes with healing skills</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">RPG Features:</h4>
                <ul className="space-y-1">
                  <li>• Detailed stat progression</li>
                  <li>• Difficulty scaling system</li>
                  <li>• Player rating system</li>
                  <li>• Strategic gameplay elements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

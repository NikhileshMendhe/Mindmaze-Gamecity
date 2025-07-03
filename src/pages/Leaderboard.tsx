
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "PuzzleMaster", rating: 2450, wins: 234, losses: 45, winRate: 84 },
    { rank: 2, name: "LogicKing", rating: 2380, wins: 198, losses: 52, winRate: 79 },
    { rank: 3, name: "MindBender", rating: 2290, wins: 167, losses: 43, winRate: 80 },
    { rank: 4, name: "GridSolver", rating: 2215, wins: 145, losses: 38, winRate: 79 },
    { rank: 5, name: "PatternSeeker", rating: 2180, wins: 134, losses: 41, winRate: 77 },
    { rank: 6, name: "QuickThink", rating: 2140, wins: 123, losses: 37, winRate: 77 },
    { rank: 7, name: "BrainStorm", rating: 2095, wins: 112, losses: 35, winRate: 76 },
    { rank: 8, name: "SmartMove", rating: 2050, wins: 98, losses: 32, winRate: 75 },
    { rank: 9, name: "CycleSolver", rating: 2010, wins: 89, losses: 31, winRate: 74 },
    { rank: 10, name: "FlashSolve", rating: 1975, wins: 82, losses: 28, winRate: 75 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="text-yellow-400" size={24} />;
      case 2: return <Medal className="text-gray-300" size={24} />;
      case 3: return <Award className="text-amber-600" size={24} />;
      default: return <span className="text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1: return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30";
      case 2: return "bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/30";
      case 3: return "bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600/30";
      default: return "bg-slate-800/50 border-purple-500/20";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Global Leaderboard</h1>
        <p className="text-gray-400 text-base sm:text-lg">Top players competing in MindMaze</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-500/20 text-center">
          <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">2,450</div>
          <div className="text-gray-400 text-xs sm:text-sm">Top Rating</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-500/20 text-center">
          <div className="text-xl sm:text-2xl font-bold text-pink-400 mb-1">1,234</div>
          <div className="text-gray-400 text-xs sm:text-sm">Active Players</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-500/20 text-center">
          <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">45,678</div>
          <div className="text-gray-400 text-xs sm:text-sm">Games Played</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-purple-500/20 text-center">
          <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">2:15</div>
          <div className="text-gray-400 text-xs sm:text-sm">Avg Game Time</div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
        <div className="p-6 border-b border-purple-500/20">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <TrendingUp className="mr-2 text-purple-400" />
            Top Players
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700/50">
              <tr>
                <th className="px-2 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-semibold text-xs sm:text-sm">Rank</th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 text-left text-gray-300 font-semibold text-xs sm:text-sm">Player</th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 text-center text-gray-300 font-semibold text-xs sm:text-sm">Rating</th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 text-center text-gray-300 font-semibold text-xs sm:text-sm hidden sm:table-cell">Wins</th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 text-center text-gray-300 font-semibold text-xs sm:text-sm hidden sm:table-cell">Losses</th>
                <th className="px-2 sm:px-6 py-3 sm:py-4 text-center text-gray-300 font-semibold text-xs sm:text-sm">Win Rate</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player) => (
                <tr 
                  key={player.rank}
                  className={`border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors ${
                    player.rank <= 3 ? getRankStyle(player.rank) : ''
                  }`}
                >
                  <td className="px-2 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center">
                      {getRankIcon(player.rank)}
                    </div>
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4">
                    <div className="font-semibold text-white text-sm sm:text-base">{player.name}</div>
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="font-bold text-purple-400 text-sm sm:text-base">{player.rating}</div>
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-center hidden sm:table-cell">
                    <div className="text-green-400 font-semibold">{player.wins}</div>
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-center hidden sm:table-cell">
                    <div className="text-red-400 font-semibold">{player.losses}</div>
                  </td>
                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                    <div className="font-semibold text-white text-sm sm:text-base">{player.winRate}%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your Ranking */}
      <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-xl font-bold mb-4 text-white">Your Ranking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Current Rank</span>
              <span className="text-2xl font-bold text-purple-400">#856</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Rating</span>
              <span className="text-xl font-semibold text-white">1,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Next Rank</span>
              <span className="text-purple-400">#720 (50 points away)</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Games Played</span>
              <span className="text-white font-semibold">47</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Win Rate</span>
              <span className="text-green-400 font-semibold">68%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Best Streak</span>
              <span className="text-yellow-400 font-semibold">12 wins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

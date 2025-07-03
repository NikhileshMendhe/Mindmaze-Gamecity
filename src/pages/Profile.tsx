
import { User, Trophy, Clock, TrendingUp, Settings } from "lucide-react";

const Profile = () => {
  const playerStats = {
    username: "PuzzleNinja",
    rank: 856,
    rating: 1450,
    gamesPlayed: 47,
    wins: 32,
    losses: 15,
    winRate: 68,
    bestStreak: 12,
    totalPlayTime: "23h 45m",
    favoriteMode: "1v1 Duel",
    joinDate: "March 2024"
  };

  const recentGames = [
    { opponent: "GridMaster", result: "win", mode: "1v1 Duel", duration: "2:34", date: "2 hours ago" },
    { opponent: "LogicLord", result: "loss", mode: "Ranked", duration: "4:12", date: "5 hours ago" },
    { opponent: "PatternPro", result: "win", mode: "1v1 Duel", duration: "1:58", date: "1 day ago" },
    { opponent: "MindBender", result: "win", mode: "Co-op", duration: "3:45", date: "1 day ago" },
    { opponent: "QuickSolve", result: "loss", mode: "Ranked", duration: "5:23", date: "2 days ago" },
  ];

  const achievements = [
    { name: "First Win", description: "Win your first game", unlocked: true, icon: "🏆" },
    { name: "Speed Demon", description: "Win a game in under 1 minute", unlocked: true, icon: "⚡" },
    { name: "Perfectionist", description: "Win 5 games in a row", unlocked: true, icon: "🎯" },
    { name: "Marathon", description: "Play for 10 hours total", unlocked: true, icon: "🏃" },
    { name: "Lights Out Master", description: "Win 100 Lights Out games", unlocked: false, icon: "💡" },
    { name: "Top 100", description: "Reach top 100 on leaderboard", unlocked: false, icon: "🌟" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      {/* Profile Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User size={48} className="text-white" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-2">{playerStats.username}</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                Rank #{playerStats.rank}
              </span>
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">
                {playerStats.rating} Rating
              </span>
              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                Joined {playerStats.joinDate}
              </span>
            </div>
          </div>
          
          <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white flex items-center space-x-2 transition-colors">
            <Settings size={18} />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Stats Panel */}
        <div className="lg:col-span-2 space-y-8">
          {/* Game Stats */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="mr-2 text-purple-400" />
              Game Statistics
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-1">{playerStats.gamesPlayed}</div>
                <div className="text-gray-400 text-sm">Games Played</div>
              </div>
              
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-2xl font-bold text-green-400 mb-1">{playerStats.wins}</div>
                <div className="text-gray-400 text-sm">Wins</div>
              </div>
              
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-2xl font-bold text-red-400 mb-1">{playerStats.losses}</div>
                <div className="text-gray-400 text-sm">Losses</div>
              </div>
              
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400 mb-1">{playerStats.winRate}%</div>
                <div className="text-gray-400 text-sm">Win Rate</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 mt-6">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-xl font-bold text-cyan-400 mb-1">{playerStats.bestStreak}</div>
                <div className="text-gray-400 text-sm">Best Win Streak</div>
              </div>
              
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-xl font-bold text-orange-400 mb-1">{playerStats.totalPlayTime}</div>
                <div className="text-gray-400 text-sm">Total Play Time</div>
              </div>
              
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-xl font-bold text-pink-400 mb-1">{playerStats.favoriteMode}</div>
                <div className="text-gray-400 text-sm">Favorite Mode</div>
              </div>
            </div>
          </div>

          {/* Recent Games */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Clock className="mr-2 text-purple-400" />
              Recent Games
            </h2>
            
            <div className="space-y-3">
              {recentGames.map((game, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      game.result === 'win' ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                    <div>
                      <div className="text-white font-semibold">vs {game.opponent}</div>
                      <div className="text-gray-400 text-sm">{game.mode}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white">{game.duration}</div>
                    <div className="text-gray-400 text-sm">{game.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="mr-2 text-purple-400" />
              Achievements
            </h2>
            
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  achievement.unlocked 
                    ? 'bg-slate-700/30 border-purple-500/30' 
                    : 'bg-slate-700/10 border-slate-600/30 opacity-60'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className={`font-semibold ${
                        achievement.unlocked ? 'text-white' : 'text-gray-400'
                      }`}>
                        {achievement.name}
                      </div>
                      <div className="text-gray-400 text-sm">{achievement.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

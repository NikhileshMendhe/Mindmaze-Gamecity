
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Trophy, User, Crown, Youtube, Gamepad2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/lobby", icon: Users, label: "Play" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/youtubers", icon: Youtube, label: "YouTubers" },
    { path: "/king-of-games", icon: Gamepad2, label: "King of Games" },
    { path: "/god-of-games", icon: Crown, label: "God of Games" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="futuristic-card border-b border-cyan-400/20 sticky top-0 z-50 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-4xl font-bold gradient-text hover:scale-110 transition-transform duration-500 text-glow text-cyber floating-animation"
            >
              MindMaze
            </Link>
          </div>
          
          <div className="flex space-x-3">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 hover-lift text-cyber ${
                  location.pathname === path
                    ? "futuristic-card border border-cyan-400/50 text-cyan-300 neon-glow pulse-glow"
                    : "text-gray-300 hover:text-cyan-300 hover:futuristic-card hover:border hover:border-cyan-400/30 hover:neon-glow"
                }`}
              >
                <Icon size={20} className="text-glow" />
                <span className="hidden sm:block font-bold text-sm tracking-wider">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

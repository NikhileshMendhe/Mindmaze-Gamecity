
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Trophy, User, Crown } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/lobby", icon: Users, label: "Play" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/god-of-games", icon: Crown, label: "God of Games" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="glass-card border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300 text-glow"
            >
              MindMaze
            </Link>
          </div>
          
          <div className="flex space-x-2">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover-lift ${
                  location.pathname === path
                    ? "glass-card border border-purple-400/30 text-purple-300 neon-glow"
                    : "text-gray-300 hover:text-white hover:glass-card hover:border hover:border-white/20"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:block font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

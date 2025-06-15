
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Trophy, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/lobby", icon: Users, label: "Play" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MindMaze
            </Link>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === path
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:block">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

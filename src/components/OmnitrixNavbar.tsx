import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Trophy, User, Crown, Youtube, Gamepad2, Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const OmnitrixNavbar = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [rotation, setRotation] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", icon: Home, label: "Home", angle: 0 },
    { path: "/lobby", icon: Users, label: "Play", angle: 45 },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard", angle: 90 },
    { path: "/youtubers", icon: Youtube, label: "YouTubers", angle: 135 },
    { path: "/king-of-games", icon: Gamepad2, label: "King", angle: 180 },
    { path: "/god-of-games", icon: Crown, label: "God", angle: 225 },
    { path: "/profile", icon: User, label: "Profile", angle: 270 },
    { path: "#menu", icon: Menu, label: "Menu", angle: 315, isMenu: true },
  ];

  const handleNavClick = (isMenu?: boolean) => {
    // Play sound if available
    const audio = new Audio('/ben10-omnitrix.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Silently fail if audio not found
    });
    
    setRotation(prev => prev + 360);
    
    if (isMenu) {
      setIsMenuOpen(true);
    }
  };

  const glowColor = theme === 'blue' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(239, 68, 68, 0.6)';
  const borderColor = theme === 'blue' ? 'rgb(59, 130, 246)' : 'rgb(239, 68, 68)';

  return (
    <>
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Omnitrix Container */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64">
        {/* Central Hub */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${borderColor} 0%, ${theme === 'blue' ? '#1e3a8a' : '#7f1d1d'} 100%)`,
            boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.1)`,
            animation: 'pulse 3s ease-in-out infinite'
          }}
        >
          <div className="absolute inset-2 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <div 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              style={{
                background: borderColor,
                boxShadow: `0 0 15px ${glowColor}`
              }}
            />
          </div>
        </div>

        {/* Orbiting Icons */}
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {navItems.map(({ path, icon: Icon, label, angle, isMenu }) => {
            const isActive = location.pathname === path;
            const radius = 80; // Distance from center (sm:100)
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return isMenu ? (
              <button
                key={path}
                onClick={() => handleNavClick(true)}
                className="absolute top-1/2 left-1/2 group cursor-pointer"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-${rotation}deg)`,
                  transition: 'all 0.7s ease-out'
                }}
                title={label}
              >
                <div 
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'scale-110' 
                      : 'scale-100 group-hover:scale-125'
                  }`}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${borderColor}, ${theme === 'blue' ? '#3b82f6' : '#ef4444'})` 
                      : 'rgba(0, 0, 0, 0.6)',
                    border: `2px solid ${isActive ? borderColor : 'rgba(255, 255, 255, 0.2)'}`,
                    boxShadow: isActive 
                      ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}` 
                      : '0 4px 12px rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Icon 
                    size={20} 
                    className={`${isActive ? 'text-white' : 'text-gray-300'} transition-colors sm:w-6 sm:h-6`}
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  {label}
                </span>
              </button>
            ) : (
              <Link
                key={path}
                to={path}
                onClick={() => handleNavClick()}
                className="absolute top-1/2 left-1/2 group"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-${rotation}deg)`,
                  transition: 'all 0.7s ease-out'
                }}
                title={label}
              >
                <div 
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'scale-110' 
                      : 'scale-100 group-hover:scale-125'
                  }`}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${borderColor}, ${theme === 'blue' ? '#3b82f6' : '#ef4444'})` 
                      : 'rgba(0, 0, 0, 0.6)',
                    border: `2px solid ${isActive ? borderColor : 'rgba(255, 255, 255, 0.2)'}`,
                    boxShadow: isActive 
                      ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}` 
                      : '0 4px 12px rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Icon 
                    size={20} 
                    className={`${isActive ? 'text-white' : 'text-gray-300'} transition-colors sm:w-6 sm:h-6`}
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 pointer-events-none" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.7s ease-out' }}>
          {navItems.map(({ angle }, index) => {
            const radius = 80;
            const x1 = 96; // center (sm:128)
            const y1 = 96; // center (sm:128)
            const x2 = x1 + Math.cos((angle * Math.PI) / 180) * radius;
            const y2 = y1 + Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={borderColor}
                strokeWidth="1"
                opacity="0.3"
              />
            );
          })}
        </svg>
      </div>
    </div>

    {/* Navigation Menu Dialog */}
    <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DialogContent className="sm:max-w-md bg-black/90 border-2" style={{ borderColor }}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center" style={{ color: borderColor }}>
            Navigation Menu
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {navItems.filter(item => !item.isMenu).map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => {
                handleNavClick();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: location.pathname === path 
                  ? `linear-gradient(135deg, ${borderColor}, ${theme === 'blue' ? '#3b82f6' : '#ef4444'})` 
                  : 'rgba(255, 255, 255, 0.1)',
                border: `2px solid ${location.pathname === path ? borderColor : 'rgba(255, 255, 255, 0.2)'}`,
                boxShadow: location.pathname === path 
                  ? `0 0 20px ${glowColor}` 
                  : '0 4px 12px rgba(0, 0, 0, 0.4)',
              }}
            >
              <Icon size={24} className="text-white" />
              <span className="text-white font-semibold text-lg">{label}</span>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default OmnitrixNavbar;

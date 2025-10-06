import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Lightbulb, FolderOpen, Trophy, Gamepad2, Video, Mail } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const OmnitrixNavbar = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const navItems = [
    { path: "/", icon: Home, label: "Home", angle: 0 },
    { path: "/profile", icon: User, label: "About", angle: 45 },
    { path: "/profile", icon: Lightbulb, label: "Skills", angle: 90 },
    { path: "/king-of-games", icon: FolderOpen, label: "Projects", angle: 135 },
    { path: "/leaderboard", icon: Trophy, label: "Achievements", angle: 180 },
    { path: "/lobby", icon: Gamepad2, label: "Games", angle: 225 },
    { path: "/youtubers", icon: Video, label: "Videos", angle: 270 },
    { path: "/profile", icon: Mail, label: "Contact", angle: 315 },
  ];

  const playSound = () => {
    const audio = new Audio('/ben10-omnitrix.mp3');
    audio.volume = 0.6;
    audio.play().catch(() => {});
  };

  const handleCoreClick = () => {
    playSound();
    setIsExpanded(!isExpanded);
  };

  const handleNavClick = (path: string) => {
    playSound();
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsExpanded(false);
      setIsAnimating(false);
    }, 1200);
  };

  const glowColor = theme === 'blue' ? 'rgba(59, 130, 246, 0.6)' : 'rgba(239, 68, 68, 0.6)';
  const borderColor = theme === 'blue' ? 'rgb(59, 130, 246)' : 'rgb(239, 68, 68)';
  const coreColor = theme === 'blue' ? 'rgb(59, 130, 246)' : 'rgb(239, 68, 68)';

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="relative w-[90vmin] h-[90vmin] max-w-[500px] max-h-[500px] pointer-events-auto">
        
        {/* Expanding Circle Animation */}
        {isAnimating && (
          <div 
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              animation: 'ping 1.2s cubic-bezier(0, 0, 0.2, 1)'
            }}
          />
        )}

        {/* Particle Effects */}
        {isExpanded && (
          <>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: coreColor,
                  boxShadow: `0 0 10px ${glowColor}`,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${isExpanded ? '120px' : '0px'})`,
                  transition: 'all 0.8s ease-out',
                  opacity: isExpanded ? 0.6 : 0,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </>
        )}

        {/* Central Omnitrix Core */}
        <button
          onClick={handleCoreClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group"
          style={{
            width: isExpanded ? '80px' : '100px',
            height: isExpanded ? '80px' : '100px',
          }}
        >
          <div 
            className="w-full h-full rounded-full transition-all duration-700"
            style={{
              background: `radial-gradient(circle, ${coreColor} 0%, ${theme === 'blue' ? '#1e3a8a' : '#7f1d1d'} 100%)`,
              boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.1)`,
              animation: 'pulse 3s ease-in-out infinite'
            }}
          >
            <div className="absolute inset-3 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <div 
                className="w-10 h-10 rounded-full transition-all duration-700"
                style={{
                  background: coreColor,
                  boxShadow: `0 0 20px ${glowColor}`,
                  transform: isExpanded ? 'scale(0.6)' : 'scale(1)'
                }}
              />
            </div>
          </div>
        </button>

        {/* Orbiting Navigation Icons */}
        <div className={`absolute inset-0 transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {navItems.map(({ path, icon: Icon, label, angle }) => {
            const isActive = location.pathname === path;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * (isExpanded ? radius : 0);
            const y = Math.sin((angle * Math.PI) / 180) * (isExpanded ? radius : 0);

            return (
              <Link
                key={path}
                to={path}
                onClick={() => handleNavClick(path)}
                className="absolute top-1/2 left-1/2 group"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: isExpanded ? `${angle / 360 * 0.3}s` : '0s'
                }}
                title={label}
              >
                <div 
                  className={`w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'scale-110' 
                      : 'scale-100 group-hover:scale-125'
                  }`}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${borderColor}, ${theme === 'blue' ? '#3b82f6' : '#ef4444'})` 
                      : 'rgba(0, 0, 0, 0.8)',
                    border: `2px solid ${isActive ? borderColor : 'rgba(255, 255, 255, 0.3)'}`,
                    boxShadow: isActive 
                      ? `0 0 25px ${glowColor}, 0 0 50px ${glowColor}` 
                      : '0 4px 15px rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Icon 
                    size={24} 
                    className={`${isActive ? 'text-white' : 'text-gray-300'} transition-colors mb-1`}
                  />
                  <span className="text-[9px] font-bold text-white whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Connecting Lines (when expanded) */}
        {isExpanded && (
          <svg className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3 }}>
            {navItems.map(({ angle }, index) => {
              const radius = 140;
              const centerX = 250;
              const centerY = 250;
              const x2 = centerX + Math.cos((angle * Math.PI) / 180) * radius;
              const y2 = centerY + Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <line
                  key={index}
                  x1={centerX}
                  y1={centerY}
                  x2={x2}
                  y2={y2}
                  stroke={borderColor}
                  strokeWidth="1"
                  style={{
                    strokeDasharray: '5,5',
                    animation: 'dash 20s linear infinite'
                  }}
                />
              );
            })}
          </svg>
        )}
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </div>
  );
};

export default OmnitrixNavbar;

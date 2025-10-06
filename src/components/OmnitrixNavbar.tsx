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
    { path: "/lobby", icon: Gamepad2, label: "Play", angle: 45 },
    { path: "/youtubers", icon: User, label: "Community", angle: 90 },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard", angle: 135 },
    { path: "/youtubers", icon: Video, label: "Streams", angle: 180 },
    { path: "/king-of-games", icon: FolderOpen, label: "Store", angle: 225 },
    { path: "/profile", icon: Mail, label: "Chat", angle: 270 },
    { path: "/profile", icon: Lightbulb, label: "Settings", angle: 315 },
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
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 pointer-events-none">
      <div 
        className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] pointer-events-auto"
        style={{
          transform: `rotate(${isExpanded ? 0 : -45}deg)`,
          transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        
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
            width: isExpanded ? '60px' : '80px',
            height: isExpanded ? '60px' : '80px',
          }}
        >
          <div 
            className="w-full h-full rounded-full transition-all duration-700"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${coreColor} 0%, ${theme === 'blue' ? '#1e40af' : '#991b1b'} 50%, ${theme === 'blue' ? '#1e3a8a' : '#7f1d1d'} 100%)`,
              boxShadow: `0 0 40px ${glowColor}, 0 0 80px ${glowColor}, inset 0 0 30px rgba(255,255,255,0.3), inset -5px -5px 20px rgba(0,0,0,0.4)`,
              animation: 'pulse 2s ease-in-out infinite',
              border: `3px solid ${borderColor}`
            }}
          >
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm flex items-center justify-center">
              <div 
                className="w-6 h-6 rounded-full transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, white, ${coreColor})`,
                  boxShadow: `0 0 30px ${glowColor}, inset 0 0 10px rgba(255,255,255,0.8)`,
                  transform: isExpanded ? 'scale(0.5)' : 'scale(1)'
                }}
              />
            </div>
          </div>
        </button>

        {/* Orbiting Navigation Icons */}
        <div className={`absolute inset-0 transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {navItems.map(({ path, icon: Icon, label, angle }) => {
            const isActive = location.pathname === path;
            const radius = 110;
            const x = Math.cos((angle * Math.PI) / 180) * (isExpanded ? radius : 0);
            const y = Math.sin((angle * Math.PI) / 180) * (isExpanded ? radius : 0);

            return (
              <Link
                key={`${path}-${label}`}
                to={path}
                onClick={() => handleNavClick(path)}
                className="absolute top-1/2 left-1/2 group"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(45deg)`,
                  transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: isExpanded ? `${angle / 360 * 0.3}s` : '0s'
                }}
                title={label}
              >
                <div 
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'scale-110' 
                      : 'scale-100 group-hover:scale-125'
                  }`}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${borderColor} 0%, ${theme === 'blue' ? '#60a5fa' : '#f87171'} 100%)` 
                      : `linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
                    border: `2px solid ${isActive ? borderColor : 'rgba(255, 255, 255, 0.4)'}`,
                    boxShadow: isActive 
                      ? `0 0 30px ${glowColor}, 0 0 60px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.2)` 
                      : `0 4px 20px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(255,255,255,0.1)`,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Icon 
                    size={20} 
                    className={`${isActive ? 'text-white' : 'text-gray-200'} transition-colors mb-0.5`}
                  />
                  <span className="text-[8px] md:text-[9px] font-bold text-white whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Connecting Lines (when expanded) */}
        {isExpanded && (
          <svg className="absolute inset-0 pointer-events-none" style={{ opacity: 0.4 }}>
            {navItems.map(({ angle }, index) => {
              const radius = 110;
              const centerX = 140;
              const centerY = 140;
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
                  strokeWidth="2"
                  style={{
                    strokeDasharray: '3,3',
                    animation: 'dash 15s linear infinite',
                    filter: `drop-shadow(0 0 3px ${glowColor})`
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

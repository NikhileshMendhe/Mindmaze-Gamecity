import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Trophy, Gamepad2, Video, Store, MessageCircle, Settings } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const OmnitrixNavbar = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const navItems = [
    { path: "/", icon: Home, label: "Home", angle: 0 },
    { path: "/lobby", icon: Gamepad2, label: "Play", angle: 45 },
    { path: "/youtubers", icon: Users, label: "Community", angle: 90 },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard", angle: 135 },
    { path: "/youtubers", icon: Video, label: "Streams", angle: 180 },
    { path: "/king-of-games", icon: Store, label: "Store", angle: 225 },
    { path: "/profile", icon: MessageCircle, label: "Chat", angle: 270 },
    { path: "/profile", icon: Settings, label: "Settings", angle: 315 },
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
    <TooltipProvider>
      {/* Fullscreen Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-40 backdrop-blur-md transition-all duration-700"
          style={{
            background: `radial-gradient(circle at 80% 80%, ${glowColor} 0%, rgba(0,0,0,0.8) 60%)`,
          }}
          onClick={handleCoreClick}
        />
      )}

      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 pointer-events-none">
        <div 
          className="relative pointer-events-auto"
          style={{
            width: isExpanded ? '90vmin' : '80px',
            height: isExpanded ? '90vmin' : '80px',
            maxWidth: isExpanded ? '600px' : '80px',
            maxHeight: isExpanded ? '600px' : '80px',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
        
        {/* Expanding Circle Animation */}
        {isAnimating && (
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              animation: 'ping 1.2s cubic-bezier(0, 0, 0.2, 1)'
            }}
          />
        )}

        {/* Rotating Ring Effect */}
        {isExpanded && (
          <div 
            className="absolute inset-0 rounded-full border-2 animate-spin"
            style={{
              borderColor: `${borderColor} transparent ${borderColor} transparent`,
              animationDuration: '8s',
              filter: `drop-shadow(0 0 20px ${glowColor})`
            }}
          />
        )}

        {/* Energy Particles */}
        {isExpanded && (
          <>
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full animate-pulse"
                style={{
                  background: coreColor,
                  boxShadow: `0 0 15px ${glowColor}`,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * (360 / 16)}deg) translateY(-${isExpanded ? '40%' : '0'})`,
                  transition: 'all 0.8s ease-out',
                  opacity: isExpanded ? 0.7 : 0,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </>
        )}

        {/* Central Omnitrix Core */}
        <button
          onClick={handleCoreClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group hover:scale-110"
          style={{
            width: isExpanded ? '80px' : '80px',
            height: isExpanded ? '80px' : '80px',
          }}
        >
          <div 
            className="w-full h-full rounded-full transition-all duration-700 relative"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${coreColor} 0%, ${theme === 'blue' ? '#1e40af' : '#991b1b'} 50%, ${theme === 'blue' ? '#1e3a8a' : '#7f1d1d'} 100%)`,
              boxShadow: `
                0 0 60px ${glowColor}, 
                0 0 120px ${glowColor}, 
                inset 0 0 40px rgba(255,255,255,0.4), 
                inset -8px -8px 30px rgba(0,0,0,0.5),
                0 10px 40px rgba(0,0,0,0.6)
              `,
              animation: 'pulse 2s ease-in-out infinite',
              border: `4px solid ${borderColor}`
            }}
          >
            {/* Glass reflection layer */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <div 
                className="w-8 h-8 rounded-full transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, white, ${coreColor})`,
                  boxShadow: `0 0 40px ${glowColor}, inset 0 0 15px rgba(255,255,255,0.9)`,
                  transform: isExpanded ? 'scale(0.6) rotate(180deg)' : 'scale(1)',
                }}
              />
              {/* Shine effect */}
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)',
                }}
              />
            </div>
          </div>
        </button>

        {/* Orbiting Navigation Icons */}
        <div className={`absolute inset-0 transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {navItems.map(({ path, icon: Icon, label, angle }) => {
            const isActive = location.pathname === path;
            const radius = isExpanded ? '42%' : '0%';
            const x = Math.cos((angle * Math.PI) / 180);
            const y = Math.sin((angle * Math.PI) / 180);

            return (
              <Tooltip key={`${path}-${label}`} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={path}
                    onClick={() => handleNavClick(path)}
                    className="absolute top-1/2 left-1/2 group"
                    style={{
                      transform: `translate(calc(-50% + ${x} * ${radius}), calc(-50% + ${y} * ${radius}))`,
                      transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transitionDelay: isExpanded ? `${angle / 360 * 0.3}s` : '0s'
                    }}
                  >
                    <div 
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                        isActive 
                          ? 'scale-110' 
                          : 'scale-100 group-hover:scale-125'
                      }`}
                      style={{
                        background: isActive 
                          ? `radial-gradient(circle at 30% 30%, ${borderColor}, ${theme === 'blue' ? '#1e40af' : '#991b1b'})` 
                          : `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))`,
                        border: `3px solid ${isActive ? borderColor : 'rgba(255, 255, 255, 0.5)'}`,
                        boxShadow: isActive 
                          ? `0 0 40px ${glowColor}, 0 0 80px ${glowColor}, inset 0 0 25px rgba(255,255,255,0.3), 0 8px 32px rgba(0,0,0,0.4)` 
                          : `0 6px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255,255,255,0.15)`,
                        backdropFilter: 'blur(12px)'
                      }}
                    >
                      <Icon 
                        size={28} 
                        className={`${isActive ? 'text-white' : 'text-gray-100'} transition-colors`}
                        strokeWidth={2.5}
                      />
                      {/* Icon glow effect */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
                            animation: 'pulse 2s ease-in-out infinite'
                          }}
                        />
                      )}
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent 
                  side="left" 
                  className="text-sm font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${borderColor}, ${theme === 'blue' ? '#1e40af' : '#991b1b'})`,
                    border: `2px solid ${borderColor}`,
                    boxShadow: `0 0 20px ${glowColor}`,
                    color: 'white'
                  }}
                >
                  {label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Connecting Lines (when expanded) */}
        {isExpanded && (
          <svg className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5, width: '100%', height: '100%' }}>
            {navItems.map(({ angle }, index) => {
              const centerPercent = 50;
              const radiusPercent = 42;
              const x2 = centerPercent + Math.cos((angle * Math.PI) / 180) * radiusPercent;
              const y2 = centerPercent + Math.sin((angle * Math.PI) / 180) * radiusPercent;
              
              return (
                <line
                  key={index}
                  x1={`${centerPercent}%`}
                  y1={`${centerPercent}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={borderColor}
                  strokeWidth="2"
                  style={{
                    strokeDasharray: '5,5',
                    animation: 'dash 12s linear infinite',
                    filter: `drop-shadow(0 0 5px ${glowColor})`
                  }}
                />
              );
            })}
          </svg>
        )}
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </TooltipProvider>
  );
};

export default OmnitrixNavbar;

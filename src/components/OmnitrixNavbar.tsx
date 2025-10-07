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
  const [rotation, setRotation] = useState(0);
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/lobby", icon: Gamepad2, label: "Play" },
    { path: "/youtubers", icon: Users, label: "Community" },
    { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
    { path: "/youtubers", icon: Video, label: "Streams" },
    { path: "/king-of-games", icon: Store, label: "Store" },
    { path: "/profile", icon: MessageCircle, label: "Chat" },
    { path: "/profile", icon: Settings, label: "Settings" },
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
            width: isExpanded ? '95vmin' : '240px',
            height: isExpanded ? '95vmin' : '240px',
            maxWidth: isExpanded ? '700px' : '240px',
            maxHeight: isExpanded ? '700px' : '240px',
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

        {/* Flower-like Icon Circles */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.5s linear'
          }}
        >
          {navItems.map((item, index) => {
            const angle = (index * 360) / navItems.length;
            const radius = isExpanded ? 46 : 42;
            const size = isExpanded ? 16 : 13;
            
            return (
              <Tooltip key={`${item.path}-${item.label}`} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}%) rotate(-${angle + rotation}deg)`,
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div 
                      className="group relative"
                      style={{
                        width: `${size}vmin`,
                        height: `${size}vmin`,
                        minWidth: isExpanded ? '95px' : '65px',
                        minHeight: isExpanded ? '95px' : '65px',
                        maxWidth: isExpanded ? '130px' : '80px',
                        maxHeight: isExpanded ? '130px' : '80px',
                      }}
                    >
                      <div 
                        className="w-full h-full rounded-full flex items-center justify-center transition-all duration-700"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), rgba(255,255,255,0.2))`,
                          border: `3px solid ${location.pathname === item.path ? borderColor : 'rgba(255, 255, 255, 0.7)'}`,
                          boxShadow: location.pathname === item.path 
                            ? `0 0 50px ${glowColor}, 0 0 30px ${glowColor}, inset 0 0 30px rgba(255,255,255,0.5), 0 8px 25px rgba(0,0,0,0.4)` 
                            : `0 0 25px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3), inset 0 0 25px rgba(255,255,255,0.3), 0 8px 20px rgba(0,0,0,0.3)`,
                          backdropFilter: 'blur(15px)',
                          transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                        }}
                      >
                        <item.icon 
                          size={isExpanded ? 45 : 28} 
                          className="text-white drop-shadow-2xl transition-all duration-700 group-hover:scale-125"
                          strokeWidth={2.8}
                        />
                      </div>
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
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>

        {/* Central Omnitrix Core */}
        <button
          onClick={handleCoreClick}
          onMouseEnter={() => {
            const interval = setInterval(() => {
              setRotation(prev => prev + 1);
            }, 16);
            (window as any).rotationInterval = interval;
          }}
          onMouseLeave={() => {
            clearInterval((window as any).rotationInterval);
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group hover:scale-110 z-10"
          style={{
            width: isExpanded ? '110px' : '85px',
            height: isExpanded ? '110px' : '85px',
          }}
        >
          <div 
            className="w-full h-full rounded-full transition-all duration-700 relative cursor-pointer"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${coreColor} 0%, ${theme === 'blue' ? '#1e40af' : '#991b1b'} 50%, ${theme === 'blue' ? '#1e3a8a' : '#7f1d1d'} 100%)`,
              boxShadow: `
                0 0 60px ${glowColor}, 
                0 0 120px ${glowColor}, 
                inset 0 0 40px rgba(255,255,255,0.4), 
                inset -8px -8px 30px rgba(0,0,0,0.5),
                0 10px 40px rgba(0,0,0,0.6)
              `,
              animation: 'corePulse 2s ease-in-out infinite',
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

        {/* Curved Petals (when expanded) */}
        {isExpanded && (
          <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: borderColor, stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: borderColor, stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: borderColor, stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            {navItems.map((_, index) => {
              const angle = (index * 360) / navItems.length;
              const centerPercent = 50;
              const radiusPercent = 48;
              const angleRad = (angle * Math.PI) / 180;
              
              const endX = centerPercent + Math.cos(angleRad) * radiusPercent;
              const endY = centerPercent + Math.sin(angleRad) * radiusPercent;
              
              // Create curved control points for petal effect
              const controlDistance = radiusPercent * 0.6;
              const perpAngle1 = angleRad - Math.PI / 6;
              const perpAngle2 = angleRad + Math.PI / 6;
              
              const cp1X = centerPercent + Math.cos(perpAngle1) * controlDistance;
              const cp1Y = centerPercent + Math.sin(perpAngle1) * controlDistance;
              const cp2X = centerPercent + Math.cos(perpAngle2) * controlDistance;
              const cp2Y = centerPercent + Math.sin(perpAngle2) * controlDistance;
              
              return (
                <g key={index}>
                  {/* Curved petal path */}
                  <path
                    d={`M ${centerPercent}% ${centerPercent}% Q ${cp1X}% ${cp1Y}%, ${endX}% ${endY}% Q ${cp2X}% ${cp2Y}%, ${centerPercent}% ${centerPercent}%`}
                    fill="url(#petalGradient)"
                    opacity="0.3"
                    style={{
                      filter: `drop-shadow(0 0 15px ${glowColor})`,
                      animation: 'petalPulse 3s ease-in-out infinite',
                      animationDelay: `${index * 0.15}s`
                    }}
                  />
                  {/* Outline stroke */}
                  <path
                    d={`M ${centerPercent}% ${centerPercent}% Q ${cp1X}% ${cp1Y}%, ${endX}% ${endY}%`}
                    stroke={borderColor}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                    style={{
                      filter: `drop-shadow(0 0 8px ${glowColor})`
                    }}
                  />
                  <path
                    d={`M ${centerPercent}% ${centerPercent}% Q ${cp2X}% ${cp2Y}%, ${endX}% ${endY}%`}
                    stroke={borderColor}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                    style={{
                      filter: `drop-shadow(0 0 8px ${glowColor})`
                    }}
                  />
                </g>
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
        @keyframes corePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        @keyframes petalPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </TooltipProvider>
  );
};

export default OmnitrixNavbar;

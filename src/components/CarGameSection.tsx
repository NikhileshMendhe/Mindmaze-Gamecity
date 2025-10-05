import { useState } from "react";
import { Play } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const CarGameSection = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayClick = () => {
    // Add car animation effect
    const button = document.getElementById('drive-button');
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => {
        window.open('https://shopify.com/editions/summer2025/drive', '_blank');
      }, 300);
    }
  };

  const primaryColor = theme === 'blue' ? '#3b82f6' : '#ef4444';
  const secondaryColor = theme === 'blue' ? '#1e3a8a' : '#7f1d1d';
  const glowColor = theme === 'blue' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(239, 68, 68, 0.4)';

  return (
    <div className="relative overflow-hidden rounded-2xl my-16 border" style={{ borderColor: `${primaryColor}40` }}>
      {/* Neon Highway Background */}
      <div className="absolute inset-0 bg-black">
        {/* Animated grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, ${primaryColor}20 1px, transparent 1px),
            linear-gradient(to bottom, ${primaryColor}20 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'scroll-grid 2s linear infinite'
        }} />
        
        {/* Light trails */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-32 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: '-20%',
                background: `linear-gradient(to bottom, transparent, ${primaryColor}, transparent)`,
                animation: `trail-fall ${3 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: `0 0 20px ${glowColor}`
              }}
            />
          ))}
        </div>

        {/* Glow effects */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: `radial-gradient(circle, ${primaryColor}, transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 text-center">
        {/* Car Icon/Animation Area */}
        <div className="mb-8 relative">
          <div 
            className="inline-block transition-transform duration-300"
            style={{ transform: isHovered ? 'translateX(10px)' : 'translateX(0)' }}
          >
            <div 
              className="text-8xl font-bold"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: `drop-shadow(0 0 30px ${glowColor})`
              }}
            >
              🏎️
            </div>
          </div>
          
          {/* Headlight effect */}
          {isHovered && (
            <div 
              className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
              style={{
                background: `radial-gradient(circle, ${primaryColor}80, transparent)`,
                filter: 'blur(20px)'
              }}
            />
          )}
        </div>

        {/* Title */}
        <h2 
          className="text-4xl sm:text-6xl font-bold mb-4"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, white, ${primaryColor})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `0 0 40px ${glowColor}`
          }}
        >
          Drive Your Vision Forward
        </h2>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Building the Future, One Idea at a Time
        </p>

        {/* Play Button */}
        <button
          id="drive-button"
          onClick={handlePlayClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative px-12 py-6 rounded-2xl font-bold text-xl sm:text-2xl text-white transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
            boxShadow: `
              0 0 30px ${glowColor},
              0 0 60px ${glowColor},
              0 10px 40px rgba(0, 0, 0, 0.5)
            `,
            border: `2px solid ${primaryColor}`
          }}
        >
          <span className="relative z-10 flex items-center gap-4">
            <Play className="w-8 h-8" fill="white" />
            Play Game
            <Play className="w-8 h-8" fill="white" />
          </span>
          
          {/* Button glow overlay */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, transparent, ${primaryColor}40, transparent)`,
              animation: 'shimmer-button 2s linear infinite'
            }}
          />

          {/* Pulsing ring */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              border: `3px solid ${primaryColor}`,
              animation: 'pulse-ring 1.5s ease-out infinite'
            }}
          />
        </button>

        {/* Speed lines effect */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: isHovered ? '80px' : '40px',
                background: `linear-gradient(to right, transparent, ${primaryColor}, transparent)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-grid {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes trail-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes shimmer-button {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CarGameSection;


import { ExternalLink, Crown, Star, Gamepad2, Trophy, Zap } from "lucide-react";

const GodOfGames = () => {
  const handleVisitRockstar = () => {
    window.open('https://www.rockstargames.com/', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/c524b1e7-9445-46d2-b198-df162cd65c33.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Crown Icon */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow animate-pulse">
              <Crown size={48} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent text-glow">
              God of Games
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-white mb-8 text-glow">
            Enter the Ultimate Gaming Universe
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Welcome to Rockstar Games - the legendary studio behind Grand Theft Auto, Red Dead Redemption, and countless gaming masterpieces that have defined generations of players.
          </p>

          {/* Main CTA Button */}
          <div className="mb-16">
            <button
              onClick={handleVisitRockstar}
              className="group relative inline-flex items-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl neon-glow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Crown className="mr-4" size={32} />
              <span>Enter Rockstar Universe</span>
              <ExternalLink className="ml-4" size={28} />
            </button>
          </div>

          {/* Game Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 neon-glow">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Legendary Titles</h3>
              <p className="text-gray-300 text-lg">
                Experience iconic games like GTA VI, Red Dead Redemption, and Max Payne series
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 neon-glow">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gamepad2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Open World Adventures</h3>
              <p className="text-gray-300 text-lg">
                Immerse yourself in vast, detailed worlds with unlimited possibilities
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 neon-glow">
              <div className="bg-gradient-to-br from-yellow-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Award Winning</h3>
              <p className="text-gray-300 text-lg">
                Multiple Game of the Year awards and industry recognition
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="glass-card rounded-2xl p-8 border border-purple-500/30 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Gaming Legacy</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">200M+</div>
                <div className="text-gray-300">Games Sold</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">50+</div>
                <div className="text-gray-300">Awards Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">Billions</div>
                <div className="text-gray-300">Hours Played</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-6">
              Ready to experience gaming perfection?
            </p>
            <button
              onClick={handleVisitRockstar}
              className="inline-flex items-center px-10 py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-xl transition-all duration-300 hover:scale-105 neon-glow"
            >
              <Zap className="mr-3" size={24} />
              Explore Now
              <ExternalLink className="ml-3" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GodOfGames;

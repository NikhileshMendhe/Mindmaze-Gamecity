
import { Star, Users, Target, Zap } from "lucide-react";

interface BestGame {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  difficulty: string;
  players: number;
  rating: number;
  features: string[];
}

interface BestGameCardProps {
  game: BestGame;
}

const BestGameCard = ({ game }: BestGameCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'hard': return 'text-red-400 bg-red-400/10';
      default: return 'text-blue-400 bg-blue-400/10';
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group overflow-hidden">
      <div className="relative">
        <img 
          src={game.image} 
          alt={game.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {game.category}
        </div>
        <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(game.difficulty)}`}>
          {game.difficulty}
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded flex items-center space-x-1">
          <Star size={12} className="text-yellow-400 fill-current" />
          <span className="text-xs">{game.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white line-clamp-1">{game.name}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Users size={12} />
            <span>{game.players.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Target size={12} />
            <span>{game.category}</span>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {game.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index} 
                className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
          <Zap size={16} />
          <span>Play Now</span>
        </button>
      </div>
    </div>
  );
};

export default BestGameCard;

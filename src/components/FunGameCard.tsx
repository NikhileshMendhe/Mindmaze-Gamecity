
import { ExternalLink, Gamepad } from "lucide-react";

interface FunGame {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  image?: string;
}

interface FunGameCardProps {
  game: FunGame;
}

const FunGameCard = ({ game }: FunGameCardProps) => {
  const handlePlayGame = () => {
    window.open(game.url, '_blank');
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 group overflow-hidden">
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
        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {game.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white line-clamp-1">{game.name}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Gamepad size={12} />
            <span>Fun Game</span>
          </div>
        </div>
        
        <button
          onClick={handlePlayGame}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>Play Now</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default FunGameCard;

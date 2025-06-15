
import { ExternalLink, Users, Calendar } from "lucide-react";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const handlePlayGame = () => {
    window.open(game.game_url, '_blank');
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 group overflow-hidden">
      <div className="relative">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {game.genre}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white line-clamp-1">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.short_description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Users size={12} />
            <span>{game.publisher}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar size={12} />
            <span>{game.release_date}</span>
          </div>
        </div>
        
        <button
          onClick={handlePlayGame}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>Play Now</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default GameCard;

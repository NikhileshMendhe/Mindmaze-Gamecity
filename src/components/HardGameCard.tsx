
import { ExternalLink, Clock, Users, Award } from "lucide-react";

interface HardGame {
  id: number;
  title: string;
  description: string;
  image: string;
  platforms: string;
  end_date: string;
  users: number;
  type: string;
  status: string;
  gamerpower_url: string;
  open_giveaway_url: string;
}

interface HardGameCardProps {
  game: HardGame;
}

const HardGameCard = ({ game }: HardGameCardProps) => {
  const handleClaimGame = () => {
    window.open(game.open_giveaway_url, '_blank');
  };

  const formatEndDate = (dateString: string) => {
    if (dateString === 'N/A') return 'No End Date';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-200 group overflow-hidden">
      <div className="relative">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {game.type}
        </div>
        <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {game.status}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white line-clamp-1">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Users size={12} />
            <span>{game.users.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={12} />
            <span>{formatEndDate(game.end_date)}</span>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 mb-3">
          <span className="font-semibold">Platforms:</span> {game.platforms}
        </div>
        
        <button
          onClick={handleClaimGame}
          className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Award size={16} />
          <span>Claim Game</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default HardGameCard;

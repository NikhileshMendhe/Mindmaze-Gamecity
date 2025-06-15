
import { ExternalLink, DollarSign, Monitor, User } from "lucide-react";

interface PaidGame {
  id: string;
  title: string;
  description: string;
  price: string;
  developer: string;
  platform: string;
  genre: string;
  url: string;
  image: string;
}

interface PaidGameCardProps {
  game: PaidGame;
}

const PaidGameCard = ({ game }: PaidGameCardProps) => {
  const handleBuyGame = () => {
    window.open(game.url, '_blank');
  };

  return (
    <div className="glass-card rounded-2xl cosmic-border hover-lift transition-all duration-300 group overflow-hidden shimmer">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 glass-card text-white px-3 py-1 rounded-full text-xs font-bold">
          {game.genre}
        </div>
        <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {game.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white line-clamp-1 gradient-text">{game.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">{game.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center space-x-2 glass-card px-3 py-1 rounded-full">
            <User size={12} />
            <span className="font-medium">{game.developer}</span>
          </div>
          <div className="flex items-center space-x-2 glass-card px-3 py-1 rounded-full">
            <Monitor size={12} />
            <span className="truncate font-medium">{game.platform}</span>
          </div>
        </div>
        
        <button
          onClick={handleBuyGame}
          className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 hover:from-orange-400 hover:via-red-400 hover:to-pink-500 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-bold hover-lift neon-glow group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <DollarSign size={18} />
          <span>Buy Now</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default PaidGameCard;

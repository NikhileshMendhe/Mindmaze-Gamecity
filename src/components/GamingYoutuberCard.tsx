
import { ExternalLink, Users, Globe, Youtube } from "lucide-react";

interface GamingYoutuber {
  id: string;
  name: string;
  description: string;
  subscribers: string;
  specialty: string;
  country: string;
  url: string;
  image: string;
}

interface GamingYoutuberCardProps {
  youtuber: GamingYoutuber;
}

const GamingYoutuberCard = ({ youtuber }: GamingYoutuberCardProps) => {
  const handleVisitChannel = () => {
    window.open(youtuber.url, '_blank');
  };

  return (
    <div className="glass-card rounded-2xl cosmic-border hover-lift transition-all duration-300 group overflow-hidden shimmer">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={youtuber.image} 
          alt={youtuber.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 glass-card text-white px-3 py-1 rounded-full text-xs font-bold">
          {youtuber.specialty}
        </div>
        <div className="absolute top-3 left-3 glass-card text-white px-3 py-1 rounded-full text-xs font-bold">
          {youtuber.country}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white line-clamp-1 gradient-text">{youtuber.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">{youtuber.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center space-x-2 glass-card px-3 py-1 rounded-full">
            <Users size={12} />
            <span className="font-medium">{youtuber.subscribers}</span>
          </div>
          <div className="flex items-center space-x-2 glass-card px-3 py-1 rounded-full">
            <Globe size={12} />
            <span className="truncate font-medium">{youtuber.country}</span>
          </div>
        </div>
        
        <button
          onClick={handleVisitChannel}
          className="w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-400 hover:via-red-500 hover:to-red-600 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 font-bold hover-lift neon-glow group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <Youtube size={18} />
          <span>Visit Channel</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default GamingYoutuberCard;

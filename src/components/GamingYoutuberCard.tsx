
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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-200 group overflow-hidden">
      <div className="relative">
        <img 
          src={youtuber.image} 
          alt={youtuber.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {youtuber.specialty}
        </div>
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
          {youtuber.country}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white line-clamp-1">{youtuber.name}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{youtuber.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Users size={12} />
            <span>{youtuber.subscribers}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Globe size={12} />
            <span className="truncate">{youtuber.country}</span>
          </div>
        </div>
        
        <button
          onClick={handleVisitChannel}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Youtube size={16} />
          <span>Visit Channel</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default GamingYoutuberCard;

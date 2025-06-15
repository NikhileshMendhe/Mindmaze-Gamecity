
import { Loader2 } from "lucide-react";
import { useGamingYoutubers } from "../hooks/useGamingYoutubers";
import GamingYoutuberCard from "../components/GamingYoutuberCard";

const YouTubers = () => {
  const { data: youtubers, isLoading, error } = useGamingYoutubers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 gradient-text text-glow floating-animation">
          Gaming YouTubers
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Discover the most popular gaming content creators from around the world. 
          From epic gameplay to entertaining commentary, these YouTubers have captured millions of hearts.
        </p>
      </div>

      {/* Content */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-cyan-400" size={64} />
          <span className="ml-4 text-white text-xl">Loading gaming YouTubers...</span>
        </div>
      )}

      {error && (
        <div className="text-center py-20">
          <div className="futuristic-card rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-red-400 text-xl">Failed to load gaming YouTubers. Please try again later.</p>
          </div>
        </div>
      )}

      {!isLoading && !error && youtubers && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-appear">
          {youtubers.map((youtuber) => (
            <GamingYoutuberCard key={youtuber.id} youtuber={youtuber} />
          ))}
        </div>
      )}

      {!isLoading && !error && (!youtubers || youtubers.length === 0) && (
        <div className="text-center py-20">
          <div className="futuristic-card rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-gray-400 text-xl">No gaming YouTubers found.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubers;

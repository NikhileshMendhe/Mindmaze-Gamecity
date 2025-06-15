
import { useState } from "react";
import { Users, Clock, Trophy, Loader2 } from "lucide-react";
import { useFreeGames } from "../hooks/useFreeGames";
import GameCard from "../components/GameCard";

const GameLobby = () => {
  const [selectedMode, setSelectedMode] = useState<"1v1" | "co-op" | "ranked">("1v1");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const { data: games, isLoading, error } = useFreeGames();

  // Get unique genres for filtering
  const genres = games ? [...new Set(games.map(game => game.genre))] : [];
  
  // Filter games by selected genre
  const filteredGames = games?.filter(game => 
    selectedGenre === "all" || game.genre === selectedGenre
  ).slice(0, 12) || []; // Limit to 12 games for performance

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Free-to-Play Games
        </h1>
        <p className="text-gray-400 text-lg">Discover and play amazing free games!</p>
      </div>

      {/* Game Mode Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Select Game Mode</h2>
        <div className="flex justify-center space-x-4">
          {[
            { mode: "1v1" as const, icon: Users, label: "1v1 Duel", desc: "Race against one opponent" },
            { mode: "co-op" as const, icon: Clock, label: "Co-op", desc: "Solve together with friends" },
            { mode: "ranked" as const, icon: Trophy, label: "Ranked", desc: "Climb the competitive ladder" }
          ].map(({ mode, icon: Icon, label, desc }) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`p-4 rounded-xl transition-all duration-200 text-center ${
                selectedMode === mode
                  ? "bg-purple-500/30 border border-purple-500/50 text-white"
                  : "bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-white hover:border-slate-600"
              }`}
            >
              <Icon size={32} className="mx-auto mb-2" />
              <div className="font-semibold">{label}</div>
              <div className="text-sm opacity-75">{desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Genre Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Filter by Genre</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedGenre("all")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedGenre === "all"
                ? "bg-purple-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            All Games
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedGenre === genre
                  ? "bg-purple-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">Available Games</h2>
        
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin text-purple-500" size={48} />
            <span className="ml-3 text-white text-lg">Loading games...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 text-lg">Failed to load games. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        {!isLoading && !error && filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found for the selected genre.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameLobby;

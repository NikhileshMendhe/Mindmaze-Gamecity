
import { useState } from "react";
import { Users, Clock, Trophy, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useFreeGames } from "../hooks/useFreeGames";
import { useFunGames } from "../hooks/useFunGames";
import GameCard from "../components/GameCard";
import FunGameCard from "../components/FunGameCard";
import PuzzlePreview from "../components/PuzzlePreview";

const GameLobby = () => {
  const [selectedMode, setSelectedMode] = useState<"1v1" | "co-op" | "ranked">("1v1");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [gameType, setGameType] = useState<"free-games" | "puzzle-games" | "fun-games">("free-games");
  const { data: games, isLoading, error } = useFreeGames();
  const { data: funGames, isLoading: funGamesLoading, error: funGamesError } = useFunGames();

  // Get unique genres for filtering
  const genres = games ? [...new Set(games.map(game => game.genre))] : [];
  
  // Filter games by selected genre
  const filteredGames = games?.filter(game => 
    selectedGenre === "all" || game.genre === selectedGenre
  ).slice(0, 12) || []; // Limit to 12 games for performance

  // Get unique categories for fun games filtering
  const funGameCategories = funGames ? [...new Set(funGames.map(game => game.category))] : [];
  
  // Filter fun games by selected category
  const filteredFunGames = funGames?.filter(game => 
    selectedGenre === "all" || game.category === selectedGenre
  ).slice(0, 12) || [];

  // Puzzle games data
  const puzzleGames = [
    {
      id: "lights-out-game",
      title: "Lights Out",
      description: "Toggle the lights to turn them all off!",
      type: "lights-out" as const
    },
    {
      id: "card-game",
      title: "Card Battle",
      description: "Play higher value cards to win!",
      type: "card-game" as const
    },
    {
      id: "symbol-decoder-game",
      title: "Symbol Decoder",
      description: "Memorize and recreate the pattern!",
      type: "symbol-decoder" as const
    },
    {
      id: "chess-game",
      title: "Chess",
      description: "Classic chess - capture the opponent's king!",
      type: "chess" as const
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Game Lobby
        </h1>
        <p className="text-gray-400 text-lg">Choose your game type and start playing!</p>
      </div>

      {/* Game Type Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Game Type</h2>
        <div className="flex justify-center space-x-4 flex-wrap gap-2">
          <button
            onClick={() => setGameType("free-games")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "free-games"
                ? "bg-purple-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Free-to-Play Games
          </button>
          <button
            onClick={() => setGameType("puzzle-games")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "puzzle-games"
                ? "bg-purple-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Puzzle Games
          </button>
          <button
            onClick={() => setGameType("fun-games")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "fun-games"
                ? "bg-green-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Fun Games
          </button>
        </div>
      </div>

      {/* Game Mode Selection */}
      {gameType === "puzzle-games" && (
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
      )}

      {/* Genre Filter - for free games and fun games */}
      {(gameType === "free-games" || gameType === "fun-games") && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">
            Filter by {gameType === "free-games" ? "Genre" : "Category"}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedGenre("all")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedGenre === "all"
                  ? gameType === "fun-games" ? "bg-green-500 text-white" : "bg-purple-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              All Games
            </button>
            {(gameType === "free-games" ? genres : funGameCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedGenre(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedGenre === category
                    ? gameType === "fun-games" ? "bg-green-500 text-white" : "bg-purple-500 text-white"
                    : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Games Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">
          {gameType === "free-games" ? "Available Games" : 
           gameType === "puzzle-games" ? "Puzzle Games" : "Fun Games"}
        </h2>
        
        {gameType === "free-games" ? (
          <>
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
          </>
        ) : gameType === "fun-games" ? (
          <>
            {funGamesLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-green-500" size={48} />
                <span className="ml-3 text-white text-lg">Loading fun games...</span>
              </div>
            )}

            {funGamesError && (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg">Failed to load fun games. Please try again later.</p>
              </div>
            )}

            {!funGamesLoading && !funGamesError && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFunGames.map((game) => (
                  <FunGameCard key={game.id} game={game} />
                ))}
              </div>
            )}

            {!funGamesLoading && !funGamesError && filteredFunGames.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No fun games found for the selected category.</p>
              </div>
            )}
          </>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {puzzleGames.map((puzzle) => (
              <Link key={puzzle.id} to={`/game/${puzzle.id}`}>
                <PuzzlePreview
                  title={puzzle.title}
                  description={puzzle.description}
                  type={puzzle.type}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameLobby;

import { useState } from "react";
import { Users, Clock, Trophy, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useFreeGames } from "../hooks/useFreeGames";
import { useFunGames } from "../hooks/useFunGames";
import { useHardGames } from "../hooks/useHardGames";
import { useBestGames } from "../hooks/useBestGames";
import { useLevelGames } from "../hooks/useLevelGames";
import { usePaidGames } from "../hooks/usePaidGames";
import { useGamingYoutubers } from "../hooks/useGamingYoutubers";
import GameCard from "../components/GameCard";
import FunGameCard from "../components/FunGameCard";
import HardGameCard from "../components/HardGameCard";
import BestGameCard from "../components/BestGameCard";
import LevelGameCard from "../components/LevelGameCard";
import PaidGameCard from "../components/PaidGameCard";
import GamingYoutuberCard from "../components/GamingYoutuberCard";
import PuzzlePreview from "../components/PuzzlePreview";

const GameLobby = () => {
  const [selectedMode, setSelectedMode] = useState<"1v1" | "co-op" | "ranked">("1v1");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [gameType, setGameType] = useState<"free-games" | "puzzle-games" | "fun-games" | "hard-games" | "best-games" | "level-games" | "paid-games" | "gaming-youtubers">("free-games");
  
  const { data: games, isLoading, error } = useFreeGames();
  const { data: funGames, isLoading: funGamesLoading, error: funGamesError } = useFunGames();
  const { data: hardGames, isLoading: hardGamesLoading, error: hardGamesError } = useHardGames();
  const { data: bestGames, isLoading: bestGamesLoading, error: bestGamesError } = useBestGames();
  const { data: levelGames, isLoading: levelGamesLoading, error: levelGamesError } = useLevelGames();
  const { data: paidGames, isLoading: paidGamesLoading, error: paidGamesError } = usePaidGames();
  const { data: youtubers, isLoading: youtubersLoading, error: youtubersError } = useGamingYoutubers();

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

  // Get unique types for hard games filtering
  const hardGameTypes = hardGames ? [...new Set(hardGames.map(game => game.type))] : [];
  
  // Filter hard games by selected type
  const filteredHardGames = hardGames?.filter(game => 
    selectedGenre === "all" || game.type === selectedGenre
  ).slice(0, 12) || [];

  // Get unique categories for best games filtering
  const bestGameCategories = bestGames ? [...new Set(bestGames.map(game => game.category))] : [];
  
  // Filter best games by selected category
  const filteredBestGames = bestGames?.filter(game => 
    selectedGenre === "all" || game.category === selectedGenre
  ).slice(0, 12) || [];

  // Get unique types for level games filtering
  const levelGameTypes = levelGames ? [...new Set(levelGames.map(game => game.type))] : [];
  
  // Filter level games by selected type
  const filteredLevelGames = levelGames?.filter(game => 
    selectedGenre === "all" || game.type === selectedGenre
  ).slice(0, 12) || [];

  // Get unique genres for paid games filtering
  const paidGameGenres = paidGames ? [...new Set(paidGames.map(game => game.genre))] : [];
  
  // Filter paid games by selected genre
  const filteredPaidGames = paidGames?.filter(game => 
    selectedGenre === "all" || game.genre === selectedGenre
  ).slice(0, 12) || [];

  // Puzzle games data - Updated with all games
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
    },
    {
      id: "sudoku-game",
      title: "Sudoku",
      description: "Fill the grid with numbers 1-9!",
      type: "sudoku" as const
    },
    {
      id: "towers-of-hanoi-game",
      title: "Towers of Hanoi",
      description: "Move all disks to the rightmost tower!",
      type: "towers-of-hanoi" as const
    },
    {
      id: "slitherlink-game",
      title: "Slitherlink",
      description: "Connect dots to form a single loop!",
      type: "slitherlink" as const
    },
    {
      id: "math-equations-game",
      title: "Math Equations",
      description: "Solve the mathematical puzzles!",
      type: "math-equations" as const
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
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
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
          <button
            onClick={() => setGameType("free-games")}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
              gameType === "free-games"
                ? "bg-purple-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Legendary Games
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
          <button
            onClick={() => setGameType("hard-games")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "hard-games"
                ? "bg-red-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Hard Games
          </button>
          <button
            onClick={() => setGameType("best-games")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "best-games"
                ? "bg-blue-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Best Games
          </button>
          <button
            onClick={() => setGameType("level-games")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "level-games"
                ? "bg-yellow-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Level Games
          </button>
          <button
            onClick={() => setGameType("paid-games")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "paid-games"
                ? "bg-orange-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Paid Games
          </button>
          <button
            onClick={() => setGameType("gaming-youtubers")}
            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
              gameType === "gaming-youtubers"
                ? "bg-red-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            Gaming YouTubers
          </button>
        </div>
      </div>

      {/* Game Mode Selection - for puzzle games */}
      {gameType === "puzzle-games" && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">Select Game Mode</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {[
              { mode: "1v1" as const, icon: Users, label: "1v1 Duel", desc: "Race against one opponent" },
              { mode: "co-op" as const, icon: Clock, label: "Co-op", desc: "Solve together with friends" },
              { mode: "ranked" as const, icon: Trophy, label: "Ranked", desc: "Climb the competitive ladder" }
            ].map(({ mode, icon: Icon, label, desc }) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`p-3 sm:p-4 rounded-xl transition-all duration-200 text-center flex-1 sm:max-w-xs ${
                  selectedMode === mode
                    ? "bg-purple-500/30 border border-purple-500/50 text-white"
                    : "bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-white hover:border-slate-600"
                }`}
              >
                <Icon size={24} className="mx-auto mb-2" />
                <div className="font-semibold text-sm sm:text-base">{label}</div>
                <div className="text-xs sm:text-sm opacity-75">{desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Genre Filter - for all game types except puzzle games and gaming youtubers */}
      {(gameType === "free-games" || gameType === "fun-games" || gameType === "hard-games" || gameType === "best-games" || gameType === "level-games" || gameType === "paid-games") && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">
            Filter by {gameType === "free-games" ? "Genre" : 
                      gameType === "fun-games" ? "Category" : 
                      gameType === "hard-games" ? "Type" :
                      gameType === "level-games" ? "Type" : 
                      gameType === "paid-games" ? "Genre" : "Category"}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedGenre("all")}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedGenre === "all"
                  ? gameType === "fun-games" ? "bg-green-500 text-white" : 
                    gameType === "hard-games" ? "bg-red-500 text-white" :
                    gameType === "best-games" ? "bg-blue-500 text-white" :
                    gameType === "level-games" ? "bg-yellow-500 text-white" :
                    gameType === "paid-games" ? "bg-orange-500 text-white" : "bg-purple-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              All Games
            </button>
            {(gameType === "free-games" ? genres : 
              gameType === "fun-games" ? funGameCategories : 
              gameType === "hard-games" ? hardGameTypes :
              gameType === "level-games" ? levelGameTypes : 
              gameType === "paid-games" ? paidGameGenres : bestGameCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedGenre(category)}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm ${
                  selectedGenre === category
                    ? gameType === "fun-games" ? "bg-green-500 text-white" : 
                      gameType === "hard-games" ? "bg-red-500 text-white" :
                      gameType === "best-games" ? "bg-blue-500 text-white" :
                      gameType === "level-games" ? "bg-yellow-500 text-white" :
                      gameType === "paid-games" ? "bg-orange-500 text-white" : "bg-purple-500 text-white"
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
          {gameType === "free-games" ? "Legendary Games" : 
           gameType === "puzzle-games" ? "Puzzle Games" : 
           gameType === "fun-games" ? "Fun Games" : 
           gameType === "hard-games" ? "Hard Games" :
           gameType === "level-games" ? "Level Games" : 
           gameType === "paid-games" ? "Paid Games" : 
           gameType === "gaming-youtubers" ? "Gaming YouTubers" : "Best Games"}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
        ) : gameType === "hard-games" ? (
          <>
            {hardGamesLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-red-500" size={48} />
                <span className="ml-3 text-white text-lg">Loading hard games...</span>
              </div>
            )}

            {hardGamesError && (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg">Failed to load hard games. Please try again later.</p>
              </div>
            )}

            {!hardGamesLoading && !hardGamesError && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredHardGames.map((game) => (
                  <HardGameCard key={game.id} game={game} />
                ))}
              </div>
            )}

            {!hardGamesLoading && !hardGamesError && filteredHardGames.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No hard games found for the selected type.</p>
              </div>
            )}
          </>
        ) : gameType === "best-games" ? (
          <>
            {bestGamesLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-blue-500" size={48} />
                <span className="ml-3 text-white text-lg">Loading best games...</span>
              </div>
            )}

            {bestGamesError && (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg">Failed to load best games. Please try again later.</p>
              </div>
            )}

            {!bestGamesLoading && !bestGamesError && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBestGames.map((game) => (
                  <BestGameCard key={game.id} game={game} />
                ))}
              </div>
            )}

            {!bestGamesLoading && !bestGamesError && filteredBestGames.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No best games found for the selected category.</p>
              </div>
            )}
          </>
        ) : gameType === "level-games" ? (
          <>
            {levelGamesLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-yellow-500" size={48} />
                <span className="ml-3 text-white text-lg">Loading level games...</span>
              </div>
            )}

            {levelGamesError && (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg">Failed to load level games. Please try again later.</p>
              </div>
            )}

            {!levelGamesLoading && !levelGamesError && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredLevelGames.map((game) => (
                  <LevelGameCard key={game.id} game={game} />
                ))}
              </div>
            )}

            {!levelGamesLoading && !levelGamesError && filteredLevelGames.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No level games found for the selected type.</p>
              </div>
            )}
          </>
        ) : gameType === "paid-games" ? (
          <>
            {paidGamesLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-orange-500" size={48} />
                <span className="ml-3 text-white text-lg">Loading paid games...</span>
              </div>
            )}

            {paidGamesError && (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg">Failed to load paid games. Please try again later.</p>
              </div>
            )}

            {!paidGamesLoading && !paidGamesError && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPaidGames.map((game) => (
                  <PaidGameCard key={game.id} game={game} />
                ))}
              </div>
            )}

            {!paidGamesLoading && !paidGamesError && filteredPaidGames.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No paid games found for the selected genre.</p>
              </div>
            )}
          </>
        ) : gameType === "gaming-youtubers" ? (
          <>
            {youtubersLoading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="animate-spin text-red-500" size={48} />
                <span className="ml-3 text-white text-lg">Loading gaming YouTubers...</span>
              </div>
            )}

            {youtubersError && (
              <div className="text-center py-12">
                <p className="text-red-400 text-lg">Failed to load gaming YouTubers. Please try again later.</p>
              </div>
            )}

            {!youtubersLoading && !youtubersError && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {youtubers?.map((youtuber) => (
                  <GamingYoutuberCard key={youtuber.id} youtuber={youtuber} />
                ))}
              </div>
            )}

            {!youtubersLoading && !youtubersError && (!youtubers || youtubers.length === 0) && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No gaming YouTubers found.</p>
              </div>
            )}
          </>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

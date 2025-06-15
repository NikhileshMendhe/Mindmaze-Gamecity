
import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Users, Clock, Trophy } from "lucide-react";
import PuzzlePreview from "../components/PuzzlePreview";

const GameLobby = () => {
  const [selectedMode, setSelectedMode] = useState<"1v1" | "co-op" | "ranked">("1v1");
  
  const gameTypes = [
    {
      id: "lights-out",
      title: "Lights Out",
      description: "Toggle lights to turn them all off",
      type: "lights-out" as const
    },
    {
      id: "path-finder", 
      title: "Path Finder",
      description: "Connect start to finish efficiently",
      type: "path-finder" as const
    },
    {
      id: "symbol-decoder",
      title: "Symbol Decoder", 
      description: "Crack the hidden pattern code",
      type: "symbol-decoder" as const
    },
    {
      id: "card-game",
      title: "Card Battle",
      description: "Play cards strategically to win",
      type: "card-game" as const
    }
  ];

  const generateGameId = (gameType: string) => {
    return `${gameType}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Game Lobby
        </h1>
        <p className="text-gray-400 text-lg">Choose your puzzle and challenge other players!</p>
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

      {/* Game Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">Choose Your Game</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameTypes.map((game) => (
            <Link
              key={game.id}
              to={`/game/${generateGameId(game.id)}`}
              className="block hover:scale-105 transition-transform duration-200"
            >
              <PuzzlePreview
                title={game.title}
                description={game.description}
                type={game.type}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Play */}
      <div className="text-center">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Match</h3>
          <p className="text-gray-400 mb-4">Jump into a random game immediately</p>
          <Link 
            to={`/game/${generateGameId('quick-match')}`}
            className="game-button text-white inline-flex items-center space-x-2"
          >
            <Play size={20} />
            <span>Quick Play</span>
          </Link>
        </div>
      </div>

      {/* Active Games */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">Active Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mock active games */}
          {[
            { id: "game1", players: ["Player1", "Player2"], type: "Lights Out", spectators: 5 },
            { id: "game2", players: ["Player3", "Player4"], type: "Card Battle", spectators: 12 },
            { id: "game3", players: ["Player5", "Player6"], type: "Path Finder", spectators: 3 }
          ].map((game) => (
            <div
              key={game.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-purple-500/40 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-white">{game.type}</h4>
                <span className="text-green-400 text-sm">● Live</span>
              </div>
              <div className="text-gray-400 text-sm mb-3">
                {game.players[0]} vs {game.players[1]}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">{game.spectators} watching</span>
                <button className="text-purple-400 hover:text-purple-300 text-sm">
                  Spectate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameLobby;

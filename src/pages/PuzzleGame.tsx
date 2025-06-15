
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import LightsOutGame from "../components/games/LightsOutGame";
import CardGame from "../components/games/CardGame";

const PuzzleGame = () => {
  const { gameId } = useParams();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [gameType, setGameType] = useState<"lights-out" | "card-game">("lights-out");

  useEffect(() => {
    // Determine game type from gameId
    if (gameId?.includes('card')) {
      setGameType('card-game');
    } else {
      setGameType('lights-out');
    }
  }, [gameId]);

  useEffect(() => {
    if (timeLeft > 0 && gameStatus === "playing") {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameStatus("lost");
    }
  }, [timeLeft, gameStatus]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGameWin = () => {
    setGameStatus("won");
  };

  const getGameTitle = () => {
    switch (gameType) {
      case 'card-game': return 'Card Battle';
      case 'lights-out': return 'Lights Out';
      default: return 'Puzzle Game';
    }
  };

  const getGameDescription = () => {
    switch (gameType) {
      case 'card-game': return 'Play higher value cards to win!';
      case 'lights-out': return 'Toggle the lights to turn them all off!';
      default: return 'Solve the puzzle!';
    }
  };

  const renderGame = () => {
    switch (gameType) {
      case 'card-game':
        return (
          <CardGame 
            onWin={handleGameWin} 
            gameActive={gameStatus === "playing"}
          />
        );
      case 'lights-out':
        return (
          <LightsOutGame 
            onWin={handleGameWin} 
            gameActive={gameStatus === "playing"}
          />
        );
      default:
        return null;
    }
  };

  const getInstructions = () => {
    switch (gameType) {
      case 'card-game':
        return [
          '• Click on your cards to play them',
          '• Higher value cards win the round',
          '• Win more rounds than your opponent',
          '• Ace is the highest card (14)'
        ];
      case 'lights-out':
        return [
          '• Click any light to toggle it',
          '• Adjacent lights will toggle too',
          '• Turn all lights off to win',
          '• Be faster than your opponent!'
        ];
      default:
        return [];
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link 
          to="/lobby"
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Lobby</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
            <Clock size={18} className="text-yellow-400" />
            <span className={`font-mono ${timeLeft < 60 ? 'text-red-400' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
            <User size={18} className="text-purple-400" />
            <span className="text-white">vs Player2</span>
          </div>
        </div>
      </div>

      {/* Game Status */}
      {gameStatus !== "playing" && (
        <div className="text-center mb-8">
          <div className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${
            gameStatus === "won" ? "border-green-500/50" : "border-red-500/50"
          } max-w-md mx-auto`}>
            <h2 className={`text-2xl font-bold mb-2 ${
              gameStatus === "won" ? "text-green-400" : "text-red-400"
            }`}>
              {gameStatus === "won" ? "Victory!" : "Time's Up!"}
            </h2>
            <p className="text-gray-400 mb-4">
              {gameStatus === "won" ? "Congratulations on winning the game!" : "Better luck next time!"}
            </p>
            <Link to="/lobby" className="game-button text-white">
              Play Again
            </Link>
          </div>
        </div>
      )}

      {/* Game Area */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Game */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">{getGameTitle()}</h2>
            <p className="text-gray-400 text-center mb-6">{getGameDescription()}</p>
            
            {renderGame()}
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Score */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-3 text-white">Score</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">You</span>
                <span className="text-green-400 font-bold">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Opponent</span>
                <span className="text-red-400 font-bold">0</span>
              </div>
            </div>
          </div>

          {/* Game Info */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-3 text-white">Game Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Mode</span>
                <span className="text-white">1v1 Duel</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Type</span>
                <span className="text-yellow-400">{getGameTitle()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Game ID</span>
                <span className="text-purple-400 font-mono">{gameId}</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
            <h3 className="text-lg font-semibold mb-3 text-white">How to Play</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              {getInstructions().map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleGame;

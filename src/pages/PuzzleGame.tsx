
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import LightsOutGame from "../components/games/LightsOutGame";
import CardGame from "../components/games/CardGame";
import SymbolDecoderGame from "../components/games/SymbolDecoderGame";
import ChessGame from "../components/games/ChessGame";

const PuzzleGame = () => {
  const { gameId } = useParams();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [gameType, setGameType] = useState<"lights-out" | "card-game" | "symbol-decoder" | "chess" | "sudoku" | "towers-of-hanoi" | "slitherlink" | "math-equations">("lights-out");

  useEffect(() => {
    // Determine game type from gameId
    if (gameId?.includes('card-game') || gameId?.includes('card')) {
      setGameType('card-game');
    } else if (gameId?.includes('symbol-decoder') || gameId?.includes('symbol')) {
      setGameType('symbol-decoder');
    } else if (gameId?.includes('chess')) {
      setGameType('chess');
    } else if (gameId?.includes('sudoku')) {
      setGameType('sudoku');
    } else if (gameId?.includes('towers-of-hanoi') || gameId?.includes('hanoi')) {
      setGameType('towers-of-hanoi');
    } else if (gameId?.includes('slitherlink')) {
      setGameType('slitherlink');
    } else if (gameId?.includes('math-equations') || gameId?.includes('math')) {
      setGameType('math-equations');
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
      case 'symbol-decoder': return 'Symbol Decoder';
      case 'chess': return 'Chess';
      case 'lights-out': return 'Lights Out';
      case 'sudoku': return 'Sudoku';
      case 'towers-of-hanoi': return 'Towers of Hanoi';
      case 'slitherlink': return 'Slitherlink';
      case 'math-equations': return 'Math Equations';
      default: return 'Puzzle Game';
    }
  };

  const getGameDescription = () => {
    switch (gameType) {
      case 'card-game': return 'Play higher value cards to win!';
      case 'symbol-decoder': return 'Memorize and recreate the pattern!';
      case 'chess': return 'Classic chess - capture the opponent\'s king!';
      case 'lights-out': return 'Toggle the lights to turn them all off!';
      case 'sudoku': return 'Fill the grid with numbers 1-9!';
      case 'towers-of-hanoi': return 'Move all disks to the rightmost tower!';
      case 'slitherlink': return 'Connect dots to form a single loop!';
      case 'math-equations': return 'Solve the mathematical puzzles!';
      default: return 'Solve the puzzle!';
    }
  };

  const renderPlaceholderGame = (gameName: string) => (
    <div className="flex flex-col items-center justify-center h-64 bg-slate-700/50 rounded-lg border-2 border-dashed border-purple-500/30">
      <h3 className="text-xl font-bold text-white mb-2">{gameName}</h3>
      <p className="text-gray-400 text-center">Game implementation coming soon!</p>
      <p className="text-gray-500 text-sm mt-2">This is a placeholder for the {gameName.toLowerCase()} game.</p>
    </div>
  );

  const renderGame = () => {
    switch (gameType) {
      case 'card-game':
        return (
          <CardGame 
            onWin={handleGameWin} 
            gameActive={gameStatus === "playing"}
          />
        );
      case 'symbol-decoder':
        return (
          <SymbolDecoderGame 
            onWin={handleGameWin} 
            gameActive={gameStatus === "playing"}
          />
        );
      case 'chess':
        return (
          <ChessGame 
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
      case 'sudoku':
        return renderPlaceholderGame('Sudoku');
      case 'towers-of-hanoi':
        return renderPlaceholderGame('Towers of Hanoi');
      case 'slitherlink':
        return renderPlaceholderGame('Slitherlink');
      case 'math-equations':
        return renderPlaceholderGame('Math Equations');
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
      case 'symbol-decoder':
        return [
          '• Memorize the pattern shown',
          '• Recreate it by clicking symbols',
          '• Complete the sequence correctly',
          '• Be faster than your opponent!'
        ];
      case 'chess':
        return [
          '• Click a piece to select it',
          '• Click a valid square to move',
          '• Capture the opponent\'s king to win',
          '• Standard chess movement rules apply'
        ];
      case 'lights-out':
        return [
          '• Click any light to toggle it',
          '• Adjacent lights will toggle too',
          '• Turn all lights off to win',
          '• Be faster than your opponent!'
        ];
      case 'sudoku':
        return [
          '• Fill each row, column, and 3×3 box',
          '• Use numbers 1-9 exactly once',
          '• No repeating numbers in any section',
          '• Complete faster than your opponent!'
        ];
      case 'towers-of-hanoi':
        return [
          '• Move all disks to the rightmost tower',
          '• Only move one disk at a time',
          '• Never place a larger disk on smaller one',
          '• Complete in minimum moves!'
        ];
      case 'slitherlink':
        return [
          '• Connect dots to form a single loop',
          '• Numbers show how many sides have lines',
          '• Loop cannot cross itself',
          '• Complete the puzzle correctly!'
        ];
      case 'math-equations':
        return [
          '• Solve each mathematical equation',
          '• Find the missing numbers',
          '• Use basic arithmetic operations',
          '• Complete all equations to win!'
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

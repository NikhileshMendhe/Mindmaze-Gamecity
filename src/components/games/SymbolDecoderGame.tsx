
import { useState, useEffect } from "react";

interface SymbolDecoderGameProps {
  onWin: () => void;
  gameActive: boolean;
}

const SymbolDecoderGame = ({ onWin, gameActive }: SymbolDecoderGameProps) => {
  const symbols = ['△', '○', '□', '◊', '★', '▽', '●', '■'];
  const [pattern, setPattern] = useState<string[]>([]);
  const [userGuess, setUserGuess] = useState<string[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showPattern, setShowPattern] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameActive && !gameStarted) {
      initializeGame();
    }
  }, [gameActive, gameStarted]);

  const initializeGame = () => {
    // Generate a random pattern of 4 symbols
    const newPattern = [];
    for (let i = 0; i < 4; i++) {
      newPattern.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    setPattern(newPattern);
    setUserGuess([]);
    setCurrentPosition(0);
    setShowPattern(true);
    setGameStarted(true);

    // Hide pattern after 3 seconds
    setTimeout(() => {
      setShowPattern(false);
    }, 3000);
  };

  const handleSymbolClick = (symbol: string) => {
    if (!gameActive || showPattern || currentPosition >= 4) return;

    const newGuess = [...userGuess];
    newGuess[currentPosition] = symbol;
    setUserGuess(newGuess);

    if (currentPosition === 3) {
      // Check if pattern matches
      const isCorrect = newGuess.every((guess, index) => guess === pattern[index]);
      if (isCorrect) {
        setTimeout(() => onWin(), 500);
      } else {
        // Reset for another try
        setTimeout(() => {
          setUserGuess([]);
          setCurrentPosition(0);
        }, 1000);
      }
    } else {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setUserGuess([]);
    setCurrentPosition(0);
    setShowPattern(true);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Pattern Display */}
      <div className="bg-slate-700/50 rounded-xl p-4 min-h-[100px] flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            {showPattern ? "Memorize the Pattern" : "Recreate the Pattern"}
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-xl font-bold"
              >
                {showPattern ? (
                  <span className="text-yellow-400">{pattern[index] || '?'}</span>
                ) : (
                  <span className="text-green-400">{userGuess[index] || '?'}</span>
                )}
              </div>
            ))}
          </div>
          {showPattern && (
            <p className="text-gray-400 text-sm mt-2">Pattern will hide in a few seconds...</p>
          )}
        </div>
      </div>

      {/* Symbol Selection Grid */}
      <div className="grid grid-cols-4 gap-3 max-w-md">
        {symbols.map((symbol, index) => (
          <button
            key={index}
            onClick={() => handleSymbolClick(symbol)}
            disabled={!gameActive || showPattern}
            className={`w-16 h-16 rounded-xl text-2xl font-bold transition-all duration-200 ${
              !gameActive || showPattern
                ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-br from-purple-600 to-purple-800 text-white hover:from-purple-500 hover:to-purple-700 hover:scale-105 active:scale-95'
            }`}
          >
            {symbol}
          </button>
        ))}
      </div>

      {/* Game Controls */}
      <div className="flex space-x-4">
        <button
          onClick={resetGame}
          className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
        >
          New Pattern
        </button>
      </div>

      {/* Current Progress */}
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          Position: {currentPosition + 1}/4
        </p>
      </div>
    </div>
  );
};

export default SymbolDecoderGame;

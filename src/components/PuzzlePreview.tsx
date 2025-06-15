import { useState, useEffect } from "react";

interface PuzzlePreviewProps {
  title: string;
  description: string;
  type: "lights-out" | "path-finder" | "symbol-decoder" | "card-game" | "chess" | "sudoku" | "towers-of-hanoi" | "slitherlink" | "math-equations";
}

const PuzzlePreview = ({ title, description, type }: PuzzlePreviewProps) => {
  const [gridState, setGridState] = useState<boolean[][]>([]);

  useEffect(() => {
    if (type === "lights-out") {
      // Initialize a 3x3 grid with random state
      const initialGrid = Array(3).fill(null).map(() => 
        Array(3).fill(null).map(() => Math.random() > 0.5)
      );
      setGridState(initialGrid);
    }
  }, [type]);

  const renderLightsOut = () => (
    <div className="grid grid-cols-3 gap-1 w-32 h-32 mx-auto">
      {gridState.map((row, i) =>
        row.map((isOn, j) => (
          <div
            key={`${i}-${j}`}
            className={`puzzle-cell ${isOn ? 'active' : 'inactive'}`}
          />
        ))
      )}
    </div>
  );

  const renderPathFinder = () => (
    <div className="grid grid-cols-4 gap-1 w-32 h-32 mx-auto">
      {Array(16).fill(null).map((_, i) => (
        <div
          key={i}
          className={`puzzle-cell ${
            i === 0 ? 'bg-green-500 border-green-400' : 
            i === 15 ? 'bg-red-500 border-red-400' : 
            [1, 5, 6, 10].includes(i) ? 'bg-purple-500 border-purple-400' : 'inactive'
          }`}
        />
      ))}
    </div>
  );

  const renderSymbolDecoder = () => (
    <div className="grid grid-cols-3 gap-1 w-32 h-32 mx-auto">
      {['△', '○', '□', '◊', '?', '★', '▽', '●', '■'].map((symbol, i) => (
        <div
          key={i}
          className="puzzle-cell inactive flex items-center justify-center text-lg font-bold"
        >
          {symbol}
        </div>
      ))}
    </div>
  );

  const renderCardGame = () => (
    <div className="flex justify-center items-center w-32 h-32 mx-auto">
      <div className="grid grid-cols-2 gap-2">
        {/* Playing cards preview */}
        <div className="w-12 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded border border-red-400 flex items-center justify-center">
          <span className="text-white text-xs font-bold">♥A</span>
        </div>
        <div className="w-12 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded border border-slate-400 flex items-center justify-center">
          <span className="text-white text-xs font-bold">♠K</span>
        </div>
        <div className="w-12 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded border border-red-400 flex items-center justify-center">
          <span className="text-white text-xs font-bold">♦Q</span>
        </div>
        <div className="w-12 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded border border-slate-400 flex items-center justify-center">
          <span className="text-white text-xs font-bold">♣J</span>
        </div>
      </div>
    </div>
  );

  const renderChess = () => (
    <div className="flex justify-center items-center w-32 h-32 mx-auto">
      <div className="grid grid-cols-4 gap-1">
        {/* Mini chess board preview */}
        <div className="w-6 h-6 bg-amber-100 flex items-center justify-center text-xs">♜</div>
        <div className="w-6 h-6 bg-amber-800 flex items-center justify-center text-xs">♞</div>
        <div className="w-6 h-6 bg-amber-100 flex items-center justify-center text-xs">♝</div>
        <div className="w-6 h-6 bg-amber-800 flex items-center justify-center text-xs">♛</div>
        <div className="w-6 h-6 bg-amber-800 flex items-center justify-center text-xs">♟</div>
        <div className="w-6 h-6 bg-amber-100 flex items-center justify-center text-xs">♟</div>
        <div className="w-6 h-6 bg-amber-800 flex items-center justify-center text-xs">♟</div>
        <div className="w-6 h-6 bg-amber-100 flex items-center justify-center text-xs">♟</div>
        <div className="w-6 h-6 bg-amber-100"></div>
        <div className="w-6 h-6 bg-amber-800"></div>
        <div className="w-6 h-6 bg-amber-100"></div>
        <div className="w-6 h-6 bg-amber-800"></div>
        <div className="w-6 h-6 bg-amber-800 flex items-center justify-center text-xs">♙</div>
        <div className="w-6 h-6 bg-amber-100 flex items-center justify-center text-xs">♙</div>
        <div className="w-6 h-6 bg-amber-800 flex items-center justify-center text-xs">♙</div>
        <div className="w-6 h-6 bg-amber-100 flex items-center justify-center text-xs">♙</div>
      </div>
    </div>
  );

  const renderSudoku = () => (
    <div className="grid grid-cols-3 gap-1 w-32 h-32 mx-auto">
      {[
        ['5', '', '3'], 
        ['', '7', ''], 
        ['9', '', '1']
      ].map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className="puzzle-cell inactive flex items-center justify-center text-sm font-bold text-white"
          >
            {cell}
          </div>
        ))
      )}
    </div>
  );

  const renderTowersOfHanoi = () => (
    <div className="flex justify-center items-end w-32 h-32 mx-auto space-x-4">
      {/* Three towers */}
      <div className="flex flex-col items-center">
        <div className="w-1 h-16 bg-amber-600"></div>
        <div className="w-8 h-2 bg-red-500 mb-1"></div>
        <div className="w-10 h-2 bg-blue-500 mb-1"></div>
        <div className="w-12 h-2 bg-green-500"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-1 h-20 bg-amber-600"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-1 h-20 bg-amber-600"></div>
      </div>
    </div>
  );

  const renderSlitherlink = () => (
    <div className="grid grid-cols-3 gap-1 w-32 h-32 mx-auto">
      {[
        ['2', '3', '1'], 
        ['', '2', ''], 
        ['1', '', '3']
      ].map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i}-${j}`}
            className={`puzzle-cell ${cell ? 'bg-slate-700 border-slate-600' : 'inactive'} flex items-center justify-center text-sm font-bold text-yellow-400`}
          >
            {cell}
          </div>
        ))
      )}
    </div>
  );

  const renderMathEquations = () => (
    <div className="flex flex-col justify-center items-center w-32 h-32 mx-auto space-y-2">
      <div className="text-white text-sm font-bold">12 + ? = 20</div>
      <div className="text-white text-sm font-bold">? × 3 = 15</div>
      <div className="text-white text-sm font-bold">8 - ? = 3</div>
      <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs">Solve!</div>
    </div>
  );

  const renderPuzzle = () => {
    switch (type) {
      case "lights-out": return renderLightsOut();
      case "path-finder": return renderPathFinder();
      case "symbol-decoder": return renderSymbolDecoder();
      case "card-game": return renderCardGame();
      case "chess": return renderChess();
      case "sudoku": return renderSudoku();
      case "towers-of-hanoi": return renderTowersOfHanoi();
      case "slitherlink": return renderSlitherlink();
      case "math-equations": return renderMathEquations();
      default: return null;
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 group">
      <div className="mb-4">
        {renderPuzzle()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white text-center">{title}</h3>
      <p className="text-gray-400 text-center text-sm">{description}</p>
    </div>
  );
};

export default PuzzlePreview;

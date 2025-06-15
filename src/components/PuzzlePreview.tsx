
import { useState, useEffect } from "react";

interface PuzzlePreviewProps {
  title: string;
  description: string;
  type: "lights-out" | "path-finder" | "symbol-decoder";
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

  const renderPuzzle = () => {
    switch (type) {
      case "lights-out": return renderLightsOut();
      case "path-finder": return renderPathFinder();
      case "symbol-decoder": return renderSymbolDecoder();
      default: return null;
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 group floating-animation">
      <div className="mb-4">
        {renderPuzzle()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white text-center">{title}</h3>
      <p className="text-gray-400 text-center text-sm">{description}</p>
    </div>
  );
};

export default PuzzlePreview;

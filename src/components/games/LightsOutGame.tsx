
import { useState, useEffect } from "react";

interface LightsOutGameProps {
  onWin: () => void;
  gameActive: boolean;
}

const LightsOutGame = ({ onWin, gameActive }: LightsOutGameProps) => {
  const GRID_SIZE = 5;
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [moves, setMoves] = useState(0);

  // Initialize the game
  useEffect(() => {
    initializeGame();
  }, []);

  // Check for win condition
  useEffect(() => {
    if (grid.length > 0 && isGameWon()) {
      onWin();
    }
  }, [grid, onWin]);

  const initializeGame = () => {
    // Create a solved grid (all false)
    let newGrid = Array(GRID_SIZE).fill(null).map(() => 
      Array(GRID_SIZE).fill(false)
    );

    // Make random moves to scramble the puzzle
    const numScrambleMoves = 10 + Math.floor(Math.random() * 10);
    for (let i = 0; i < numScrambleMoves; i++) {
      const randomRow = Math.floor(Math.random() * GRID_SIZE);
      const randomCol = Math.floor(Math.random() * GRID_SIZE);
      newGrid = toggleCell(newGrid, randomRow, randomCol);
    }

    setGrid(newGrid);
    setMoves(0);
  };

  const toggleCell = (currentGrid: boolean[][], row: number, col: number) => {
    const newGrid = currentGrid.map(r => [...r]);
    
    // Toggle the clicked cell and adjacent cells
    const directions = [
      [0, 0],   // center
      [-1, 0],  // top
      [1, 0],   // bottom
      [0, -1],  // left
      [0, 1],   // right
    ];

    directions.forEach(([dr, dc]) => {
      const newRow = row + dr;
      const newCol = col + dc;
      
      if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
        newGrid[newRow][newCol] = !newGrid[newRow][newCol];
      }
    });

    return newGrid;
  };

  const handleCellClick = (row: number, col: number) => {
    if (!gameActive) return;
    
    const newGrid = toggleCell(grid, row, col);
    setGrid(newGrid);
    setMoves(moves + 1);
  };

  const isGameWon = () => {
    return grid.every(row => row.every(cell => !cell));
  };

  const resetGame = () => {
    initializeGame();
  };

  if (grid.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="text-center">
      {/* Game Stats */}
      <div className="mb-6 flex justify-center space-x-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{moves}</div>
          <div className="text-gray-400 text-sm">Moves</div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="puzzle-grid grid-appear mb-6" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}>
        {grid.map((row, i) =>
          row.map((isOn, j) => (
            <button
              key={`${i}-${j}`}
              onClick={() => handleCellClick(i, j)}
              disabled={!gameActive}
              className={`puzzle-cell ${isOn ? 'active' : 'inactive'} ${
                !gameActive ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{ height: '60px' }}
            >
              {isOn && (
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md"></div>
              )}
            </button>
          ))
        )}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="px-6 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors duration-200"
      >
        New Puzzle
      </button>
    </div>
  );
};

export default LightsOutGame;


import { useState, useEffect } from "react";

interface SudokuGameProps {
  onWin: () => void;
  gameActive: boolean;
}

const SudokuGame = ({ onWin, gameActive }: SudokuGameProps) => {
  // Initialize a 9x9 grid with some pre-filled numbers
  const initialGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];

  const [grid, setGrid] = useState(initialGrid);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);

  const isValidMove = (grid: number[][], row: number, col: number, num: number): boolean => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (x !== col && grid[row][x] === num) return false;
    }

    // Check column
    for (let x = 0; x < 9; x++) {
      if (x !== row && grid[x][col] === num) return false;
    }

    // Check 3x3 box
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const currentRow = startRow + i;
        const currentCol = startCol + j;
        if (currentRow !== row && currentCol !== col && grid[currentRow][currentCol] === num) {
          return false;
        }
      }
    }

    return true;
  };

  const isSolved = (grid: number[][]): boolean => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === 0) return false;
      }
    }
    return true;
  };

  const handleCellClick = (row: number, col: number) => {
    if (!gameActive) return;
    if (initialGrid[row][col] !== 0) return; // Can't modify pre-filled cells
    setSelectedCell({ row, col });
  };

  const handleNumberInput = (num: number) => {
    if (!gameActive || !selectedCell) return;
    
    const newGrid = [...grid];
    if (isValidMove(newGrid, selectedCell.row, selectedCell.col, num)) {
      newGrid[selectedCell.row][selectedCell.col] = num;
      setGrid(newGrid);
      
      if (isSolved(newGrid)) {
        onWin();
      }
    }
  };

  const clearCell = () => {
    if (!gameActive || !selectedCell) return;
    if (initialGrid[selectedCell.row][selectedCell.col] !== 0) return;
    
    const newGrid = [...grid];
    newGrid[selectedCell.row][selectedCell.col] = 0;
    setGrid(newGrid);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="grid grid-cols-9 gap-1 p-4 bg-slate-700 rounded-lg">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-8 h-8 border flex items-center justify-center text-sm font-bold cursor-pointer transition-colors ${
                initialGrid[rowIndex][colIndex] !== 0
                  ? 'bg-slate-600 text-yellow-400 border-slate-500'
                  : selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                  ? 'bg-purple-500 text-white border-purple-400'
                  : cell !== 0
                  ? 'bg-slate-800 text-white border-slate-600 hover:bg-slate-700'
                  : 'bg-slate-800 text-gray-400 border-slate-600 hover:bg-slate-700'
              } ${
                (rowIndex + 1) % 3 === 0 && rowIndex < 8 ? 'border-b-2 border-white' : ''
              } ${
                (colIndex + 1) % 3 === 0 && colIndex < 8 ? 'border-r-2 border-white' : ''
              }`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              {cell !== 0 ? cell : ''}
            </div>
          ))
        )}
      </div>

      {selectedCell && (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white text-sm">
            Selected: Row {selectedCell.row + 1}, Col {selectedCell.col + 1}
          </p>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberInput(num)}
                className="w-10 h-10 bg-purple-600 hover:bg-purple-500 text-white rounded font-bold transition-colors"
              >
                {num}
              </button>
            ))}
            <button
              onClick={clearCell}
              className="w-10 h-10 bg-red-600 hover:bg-red-500 text-white rounded font-bold transition-colors"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SudokuGame;


import { useState, useEffect } from "react";

interface SlitherlinkGameProps {
  onWin: () => void;
  gameActive: boolean;
}

const SlitherlinkGame = ({ onWin, gameActive }: SlitherlinkGameProps) => {
  // 4x4 grid with numbers (0 means no number)
  const puzzle = [
    [0, 2, 0, 1],
    [3, 0, 2, 0],
    [0, 1, 0, 3],
    [2, 0, 3, 0]
  ];

  // Lines state: horizontal and vertical lines
  const [horizontalLines, setHorizontalLines] = useState<boolean[][]>(
    Array(5).fill(null).map(() => Array(4).fill(false))
  );
  const [verticalLines, setVerticalLines] = useState<boolean[][]>(
    Array(4).fill(null).map(() => Array(5).fill(false))
  );

  const toggleHorizontalLine = (row: number, col: number) => {
    if (!gameActive) return;
    const newLines = [...horizontalLines];
    newLines[row][col] = !newLines[row][col];
    setHorizontalLines(newLines);
    checkWin(newLines, verticalLines);
  };

  const toggleVerticalLine = (row: number, col: number) => {
    if (!gameActive) return;
    const newLines = [...verticalLines];
    newLines[row][col] = !newLines[row][col];
    setVerticalLines(newLines);
    checkWin(horizontalLines, newLines);
  };

  const countSurroundingLines = (row: number, col: number, hLines: boolean[][], vLines: boolean[][]): number => {
    let count = 0;
    // Top
    if (hLines[row][col]) count++;
    // Bottom
    if (hLines[row + 1][col]) count++;
    // Left
    if (vLines[row][col]) count++;
    // Right
    if (vLines[row][col + 1]) count++;
    return count;
  };

  const checkWin = (hLines: boolean[][], vLines: boolean[][]) => {
    // Check if all numbered cells have the correct number of surrounding lines
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (puzzle[row][col] !== 0) {
          const requiredLines = puzzle[row][col];
          const actualLines = countSurroundingLines(row, col, hLines, vLines);
          if (actualLines !== requiredLines) {
            return false;
          }
        }
      }
    }

    // Simple win condition for demo - if all constraints are satisfied
    let hasLoop = false;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 4; col++) {
        if (hLines[row][col]) {
          hasLoop = true;
          break;
        }
      }
      if (hasLoop) break;
    }

    if (hasLoop) {
      onWin();
    }
  };

  const resetGame = () => {
    setHorizontalLines(Array(5).fill(null).map(() => Array(4).fill(false)));
    setVerticalLines(Array(4).fill(null).map(() => Array(5).fill(false)));
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        {/* Grid container */}
        <div className="grid grid-cols-4 gap-0 p-8">
          {puzzle.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="relative w-16 h-16 flex items-center justify-center bg-slate-700 border border-slate-600"
              >
                {/* Cell number */}
                {cell !== 0 && (
                  <span className="text-yellow-400 text-xl font-bold z-10">
                    {cell}
                  </span>
                )}

                {/* Horizontal line above */}
                <div
                  className={`absolute -top-1 left-0 right-0 h-2 cursor-pointer transition-colors ${
                    horizontalLines[rowIndex][colIndex]
                      ? 'bg-green-400'
                      : 'bg-transparent hover:bg-green-200'
                  }`}
                  onClick={() => toggleHorizontalLine(rowIndex, colIndex)}
                />

                {/* Horizontal line below */}
                <div
                  className={`absolute -bottom-1 left-0 right-0 h-2 cursor-pointer transition-colors ${
                    horizontalLines[rowIndex + 1][colIndex]
                      ? 'bg-green-400'
                      : 'bg-transparent hover:bg-green-200'
                  }`}
                  onClick={() => toggleHorizontalLine(rowIndex + 1, colIndex)}
                />

                {/* Vertical line left */}
                <div
                  className={`absolute -left-1 top-0 bottom-0 w-2 cursor-pointer transition-colors ${
                    verticalLines[rowIndex][colIndex]
                      ? 'bg-green-400'
                      : 'bg-transparent hover:bg-green-200'
                  }`}
                  onClick={() => toggleVerticalLine(rowIndex, colIndex)}
                />

                {/* Vertical line right */}
                <div
                  className={`absolute -right-1 top-0 bottom-0 w-2 cursor-pointer transition-colors ${
                    verticalLines[rowIndex][colIndex + 1]
                      ? 'bg-green-400'
                      : 'bg-transparent hover:bg-green-200'
                  }`}
                  onClick={() => toggleVerticalLine(rowIndex, colIndex + 1)}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={resetGame}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="text-center text-gray-400 text-sm max-w-md">
        <p>Click on the edges around numbered cells to draw lines.</p>
        <p className="mt-1">Each number shows how many lines should surround that cell.</p>
        <p className="mt-1">Form a single continuous loop!</p>
      </div>
    </div>
  );
};

export default SlitherlinkGame;

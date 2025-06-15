
import { useState, useEffect } from "react";

interface TowersOfHanoiGameProps {
  onWin: () => void;
  gameActive: boolean;
}

const TowersOfHanoiGame = ({ onWin, gameActive }: TowersOfHanoiGameProps) => {
  const [towers, setTowers] = useState<number[][]>([
    [3, 2, 1], // Tower 1 with 3 disks (3 is largest, 1 is smallest)
    [],        // Tower 2 empty
    []         // Tower 3 empty
  ]);
  const [selectedTower, setSelectedTower] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);

  const isWin = (towers: number[][]): boolean => {
    return towers[2].length === 3 && towers[2].join('') === '321';
  };

  const canMoveDisk = (from: number, to: number): boolean => {
    if (towers[from].length === 0) return false;
    if (towers[to].length === 0) return true;
    
    const topDiskFrom = towers[from][towers[from].length - 1];
    const topDiskTo = towers[to][towers[to].length - 1];
    
    return topDiskFrom < topDiskTo;
  };

  const handleTowerClick = (towerIndex: number) => {
    if (!gameActive) return;

    if (selectedTower === null) {
      // Select a tower (only if it has disks)
      if (towers[towerIndex].length > 0) {
        setSelectedTower(towerIndex);
      }
    } else {
      // Move disk from selected tower to clicked tower
      if (selectedTower === towerIndex) {
        // Deselect if clicking the same tower
        setSelectedTower(null);
      } else if (canMoveDisk(selectedTower, towerIndex)) {
        const newTowers = [...towers];
        const disk = newTowers[selectedTower].pop()!;
        newTowers[towerIndex].push(disk);
        
        setTowers(newTowers);
        setMoves(moves + 1);
        setSelectedTower(null);

        if (isWin(newTowers)) {
          onWin();
        }
      } else {
        // Invalid move - deselect
        setSelectedTower(null);
      }
    }
  };

  const getDiskColor = (size: number): string => {
    switch (size) {
      case 1: return 'bg-red-500 border-red-400';
      case 2: return 'bg-blue-500 border-blue-400';
      case 3: return 'bg-green-500 border-green-400';
      default: return 'bg-gray-500 border-gray-400';
    }
  };

  const getDiskWidth = (size: number): string => {
    switch (size) {
      case 1: return 'w-12';
      case 2: return 'w-16';
      case 3: return 'w-20';
      default: return 'w-8';
    }
  };

  const resetGame = () => {
    setTowers([[3, 2, 1], [], []]);
    setSelectedTower(null);
    setMoves(0);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-white text-lg">
        Moves: <span className="font-bold text-yellow-400">{moves}</span>
      </div>

      <div className="flex justify-center space-x-8">
        {towers.map((tower, towerIndex) => (
          <div
            key={towerIndex}
            className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
              selectedTower === towerIndex ? 'scale-105' : ''
            }`}
            onClick={() => handleTowerClick(towerIndex)}
          >
            {/* Tower pole */}
            <div className="w-2 h-32 bg-amber-600 rounded-t relative">
              {/* Disks */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col-reverse items-center">
                {tower.map((disk, diskIndex) => (
                  <div
                    key={diskIndex}
                    className={`h-4 ${getDiskWidth(disk)} ${getDiskColor(disk)} border-2 rounded mb-1 flex items-center justify-center text-white font-bold text-xs`}
                  >
                    {disk}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Base */}
            <div className="w-24 h-4 bg-amber-800 rounded"></div>
            
            {/* Tower label */}
            <div className={`text-white text-sm mt-2 font-semibold ${
              selectedTower === towerIndex ? 'text-yellow-400' : ''
            }`}>
              Tower {towerIndex + 1}
            </div>
          </div>
        ))}
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
        <p>Click a tower to select it, then click another tower to move the top disk.</p>
        <p className="mt-1">You can only place smaller disks on larger ones!</p>
      </div>
    </div>
  );
};

export default TowersOfHanoiGame;

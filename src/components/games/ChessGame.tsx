
import { useState, useEffect } from "react";

interface ChessPiece {
  type: 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
  color: 'white' | 'black';
}

interface ChessGameProps {
  onWin: () => void;
  gameActive: boolean;
}

const ChessGame = ({ onWin, gameActive }: ChessGameProps) => {
  const [board, setBoard] = useState<(ChessPiece | null)[][]>([]);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<'white' | 'black'>('white');
  const [gameStatus, setGameStatus] = useState<'playing' | 'checkmate' | 'draw'>('playing');

  // Initialize chess board
  useEffect(() => {
    const initialBoard: (ChessPiece | null)[][] = Array(8).fill(null).map(() => Array(8).fill(null));
    
    // Set up pawns
    for (let i = 0; i < 8; i++) {
      initialBoard[1][i] = { type: 'pawn', color: 'black' };
      initialBoard[6][i] = { type: 'pawn', color: 'white' };
    }
    
    // Set up other pieces
    const pieceOrder: ChessPiece['type'][] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    
    for (let i = 0; i < 8; i++) {
      initialBoard[0][i] = { type: pieceOrder[i], color: 'black' };
      initialBoard[7][i] = { type: pieceOrder[i], color: 'white' };
    }
    
    setBoard(initialBoard);
  }, []);

  const getPieceSymbol = (piece: ChessPiece | null): string => {
    if (!piece) return '';
    
    const symbols = {
      white: {
        king: '♔',
        queen: '♕',
        rook: '♖',
        bishop: '♗',
        knight: '♘',
        pawn: '♙'
      },
      black: {
        king: '♚',
        queen: '♛',
        rook: '♜',
        bishop: '♝',
        knight: '♞',
        pawn: '♟'
      }
    };
    
    return symbols[piece.color][piece.type];
  };

  const isValidMove = (fromRow: number, fromCol: number, toRow: number, toCol: number): boolean => {
    const piece = board[fromRow][fromCol];
    if (!piece || piece.color !== currentPlayer) return false;
    
    const targetPiece = board[toRow][toCol];
    if (targetPiece && targetPiece.color === piece.color) return false;
    
    // Simple move validation for demonstration
    const rowDiff = Math.abs(toRow - fromRow);
    const colDiff = Math.abs(toCol - fromCol);
    
    switch (piece.type) {
      case 'pawn':
        const direction = piece.color === 'white' ? -1 : 1;
        const startRow = piece.color === 'white' ? 6 : 1;
        
        if (colDiff === 0) {
          if (toRow === fromRow + direction && !targetPiece) return true;
          if (fromRow === startRow && toRow === fromRow + 2 * direction && !targetPiece) return true;
        } else if (colDiff === 1 && toRow === fromRow + direction && targetPiece) {
          return true;
        }
        return false;
      
      case 'rook':
        return (rowDiff === 0 || colDiff === 0);
      
      case 'knight':
        return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
      
      case 'bishop':
        return rowDiff === colDiff;
      
      case 'queen':
        return rowDiff === colDiff || rowDiff === 0 || colDiff === 0;
      
      case 'king':
        return rowDiff <= 1 && colDiff <= 1;
      
      default:
        return false;
    }
  };

  const handleSquareClick = (row: number, col: number) => {
    if (!gameActive || gameStatus !== 'playing') return;
    
    if (selectedSquare) {
      const [fromRow, fromCol] = selectedSquare;
      
      if (fromRow === row && fromCol === col) {
        setSelectedSquare(null);
        return;
      }
      
      if (isValidMove(fromRow, fromCol, row, col)) {
        const newBoard = board.map(r => [...r]);
        const piece = newBoard[fromRow][fromCol];
        const capturedPiece = newBoard[row][col];
        
        newBoard[row][col] = piece;
        newBoard[fromRow][fromCol] = null;
        
        // Check for king capture (simplified win condition)
        if (capturedPiece && capturedPiece.type === 'king') {
          setGameStatus('checkmate');
          onWin();
        }
        
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
      }
      
      setSelectedSquare(null);
    } else {
      const piece = board[row][col];
      if (piece && piece.color === currentPlayer) {
        setSelectedSquare([row, col]);
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center">
        <p className="text-white mb-2">Current Player: 
          <span className={`font-bold ml-2 ${currentPlayer === 'white' ? 'text-white' : 'text-gray-600'}`}>
            {currentPlayer === 'white' ? '♔' : '♚'} {currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}
          </span>
        </p>
        {gameStatus === 'checkmate' && (
          <p className="text-green-400 font-bold">Checkmate! {currentPlayer === 'white' ? 'Black' : 'White'} wins!</p>
        )}
      </div>
      
      <div className="grid grid-cols-8 gap-0 border-2 border-gray-600 bg-amber-100">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const isLight = (rowIndex + colIndex) % 2 === 0;
            const isSelected = selectedSquare && selectedSquare[0] === rowIndex && selectedSquare[1] === colIndex;
            
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-12 h-12 flex items-center justify-center cursor-pointer border border-gray-400 text-2xl select-none ${
                  isLight ? 'bg-amber-100' : 'bg-amber-800'
                } ${isSelected ? 'ring-2 ring-yellow-400' : ''} hover:opacity-80`}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
              >
                {getPieceSymbol(piece)}
              </div>
            );
          })
        )}
      </div>
      
      <div className="text-center text-sm text-gray-400 max-w-md">
        <p>Click a piece to select it, then click a valid square to move. Capture the opponent's king to win!</p>
      </div>
    </div>
  );
};

export default ChessGame;

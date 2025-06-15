
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PlayingCard {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  suit: string;
  value: string;
}

interface DeckResponse {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

interface DrawResponse {
  success: boolean;
  deck_id: string;
  cards: PlayingCard[];
  remaining: number;
}

interface CardGameProps {
  onWin: () => void;
  gameActive: boolean;
}

const CardGame = ({ onWin, gameActive }: CardGameProps) => {
  const [deckId, setDeckId] = useState<string>("");
  const [playerCards, setPlayerCards] = useState<PlayingCard[]>([]);
  const [opponentCards, setOpponentCards] = useState<PlayingCard[]>([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [gamePhase, setGamePhase] = useState<"setup" | "playing" | "finished">("setup");
  const [loading, setLoading] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [maxRounds] = useState(5);

  // Initialize a new deck
  const initializeDeck = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const data: DeckResponse = await response.json();
      
      if (data.success) {
        setDeckId(data.deck_id);
        setGamePhase("playing");
        drawInitialCards(data.deck_id);
      }
    } catch (error) {
      console.error('Error initializing deck:', error);
    } finally {
      setLoading(false);
    }
  };

  // Draw initial cards for both players
  const drawInitialCards = async (currentDeckId: string) => {
    try {
      // Draw 2 cards for player
      const playerResponse = await fetch(`https://www.deckofcardsapi.com/api/deck/${currentDeckId}/draw/?count=2`);
      const playerData: DrawResponse = await playerResponse.json();
      
      // Draw 2 cards for opponent
      const opponentResponse = await fetch(`https://www.deckofcardsapi.com/api/deck/${currentDeckId}/draw/?count=2`);
      const opponentData: DrawResponse = await opponentResponse.json();

      if (playerData.success && opponentData.success) {
        setPlayerCards(playerData.cards);
        setOpponentCards(opponentData.cards);
      }
    } catch (error) {
      console.error('Error drawing cards:', error);
    }
  };

  // Calculate card value for comparison
  const getCardValue = (card: PlayingCard): number => {
    switch (card.value) {
      case 'ACE': return 14;
      case 'KING': return 13;
      case 'QUEEN': return 12;
      case 'JACK': return 11;
      default: return parseInt(card.value) || 0;
    }
  };

  // Play a card
  const playCard = (cardIndex: number) => {
    if (!gameActive || gamePhase !== "playing" || playerCards.length === 0) return;

    const playerCard = playerCards[cardIndex];
    const opponentCard = opponentCards[0]; // Opponent plays first card

    const playerValue = getCardValue(playerCard);
    const opponentValue = getCardValue(opponentCard);

    // Update scores
    if (playerValue > opponentValue) {
      setPlayerScore(prev => prev + 1);
    } else if (opponentValue > playerValue) {
      setOpponentScore(prev => prev + 1);
    }

    // Remove played cards
    setPlayerCards(prev => prev.filter((_, index) => index !== cardIndex));
    setOpponentCards(prev => prev.slice(1));

    // Check if round is finished
    if (playerCards.length === 1) { // Will be 0 after this play
      if (currentRound >= maxRounds) {
        // Game finished
        setGamePhase("finished");
        if (playerScore >= opponentScore) {
          onWin();
        }
      } else {
        // Next round
        setCurrentRound(prev => prev + 1);
        drawInitialCards(deckId);
      }
    }
  };

  // Shuffle deck
  const shuffleDeck = async () => {
    if (!deckId) return;
    
    setLoading(true);
    try {
      await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    } catch (error) {
      console.error('Error shuffling deck:', error);
    } finally {
      setLoading(false);
    }
  };

  // Start new game
  const startNewGame = () => {
    setPlayerCards([]);
    setOpponentCards([]);
    setPlayerScore(0);
    setOpponentScore(0);
    setCurrentRound(1);
    setGamePhase("setup");
    setDeckId("");
    initializeDeck();
  };

  useEffect(() => {
    if (gamePhase === "setup") {
      initializeDeck();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-6">
      {/* Game Stats */}
      <div className="flex justify-center space-x-8 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{playerScore}</div>
          <div className="text-gray-400 text-sm">Your Score</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-purple-400">Round {currentRound}/{maxRounds}</div>
          <div className="text-gray-400 text-sm">Current Round</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-400">{opponentScore}</div>
          <div className="text-gray-400 text-sm">Opponent</div>
        </div>
      </div>

      {gamePhase === "playing" && (
        <>
          {/* Opponent Cards (face down) */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Opponent's Cards</h3>
            <div className="flex justify-center space-x-4">
              {opponentCards.map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-28 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg border-2 border-blue-400 flex items-center justify-center"
                >
                  <div className="text-white text-xs font-bold">CARD</div>
                </div>
              ))}
            </div>
          </div>

          {/* Player Cards */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Your Cards - Click to Play!</h3>
            <div className="flex justify-center space-x-4">
              {playerCards.map((card, index) => (
                <Card
                  key={card.code}
                  className="w-20 h-28 cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden"
                  onClick={() => playCard(index)}
                >
                  <CardContent className="p-0 h-full">
                    <img
                      src={card.image}
                      alt={`${card.value} of ${card.suit}`}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}

      {gamePhase === "finished" && (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            {playerScore > opponentScore ? "You Win!" : playerScore < opponentScore ? "You Lose!" : "It's a Tie!"}
          </h3>
          <p className="text-gray-400 mb-4">
            Final Score: {playerScore} - {opponentScore}
          </p>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4">
        <Button
          onClick={startNewGame}
          className="game-button text-white"
        >
          New Game
        </Button>
        {deckId && gamePhase === "playing" && (
          <Button
            onClick={shuffleDeck}
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors duration-200"
          >
            Shuffle Deck
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardGame;

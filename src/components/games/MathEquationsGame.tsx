
import { useState, useEffect } from "react";

interface MathEquationsGameProps {
  onWin: () => void;
  gameActive: boolean;
}

interface Equation {
  id: number;
  equation: string;
  answer: number;
  userAnswer: string;
  solved: boolean;
}

const MathEquationsGame = ({ onWin, gameActive }: MathEquationsGameProps) => {
  const [equations, setEquations] = useState<Equation[]>([
    { id: 1, equation: "12 + ? = 20", answer: 8, userAnswer: "", solved: false },
    { id: 2, equation: "? × 3 = 15", answer: 5, userAnswer: "", solved: false },
    { id: 3, equation: "24 ÷ ? = 6", answer: 4, userAnswer: "", solved: false },
    { id: 4, equation: "? - 7 = 9", answer: 16, userAnswer: "", solved: false },
    { id: 5, equation: "8 + ? = 13", answer: 5, userAnswer: "", solved: false },
    { id: 6, equation: "? × 4 = 28", answer: 7, userAnswer: "", solved: false },
  ]);

  const [selectedEquation, setSelectedEquation] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (id: number, value: string) => {
    if (!gameActive) return;
    
    // Only allow numbers
    if (value === "" || /^\d+$/.test(value)) {
      const newEquations = equations.map(eq => 
        eq.id === id ? { ...eq, userAnswer: value } : eq
      );
      setEquations(newEquations);
    }
  };

  const checkAnswer = (id: number) => {
    if (!gameActive) return;
    
    const equation = equations.find(eq => eq.id === id);
    if (!equation || equation.userAnswer === "") return;

    const userAnswer = parseInt(equation.userAnswer);
    const isCorrect = userAnswer === equation.answer;

    const newEquations = equations.map(eq => 
      eq.id === id ? { ...eq, solved: isCorrect } : eq
    );
    
    setEquations(newEquations);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    // Check if all equations are solved
    const allSolved = newEquations.every(eq => eq.solved);
    if (allSolved) {
      onWin();
    }
  };

  const resetGame = () => {
    const resetEquations = equations.map(eq => ({
      ...eq,
      userAnswer: "",
      solved: false
    }));
    setEquations(resetEquations);
    setScore(0);
  };

  const generateNewEquations = () => {
    const operations = ['+', '-', '×', '÷'];
    const newEquations: Equation[] = [];
    
    for (let i = 1; i <= 6; i++) {
      const op = operations[Math.floor(Math.random() * operations.length)];
      let equation = "";
      let answer = 0;
      
      switch (op) {
        case '+':
          const a = Math.floor(Math.random() * 20) + 1;
          const b = Math.floor(Math.random() * 20) + 1;
          equation = `${a} + ? = ${a + b}`;
          answer = b;
          break;
        case '-':
          const c = Math.floor(Math.random() * 20) + 10;
          const d = Math.floor(Math.random() * 10) + 1;
          equation = `? - ${d} = ${c - d}`;
          answer = c;
          break;
        case '×':
          const e = Math.floor(Math.random() * 10) + 2;
          const f = Math.floor(Math.random() * 10) + 2;
          equation = `? × ${e} = ${e * f}`;
          answer = f;
          break;
        case '÷':
          const g = Math.floor(Math.random() * 10) + 2;
          const h = Math.floor(Math.random() * 10) + 2;
          equation = `${g * h} ÷ ? = ${g}`;
          answer = h;
          break;
      }
      
      newEquations.push({ id: i, equation, answer, userAnswer: "", solved: false });
    }
    
    setEquations(newEquations);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-white text-lg">
        Score: <span className="font-bold text-green-400">{score}</span> / {equations.length}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {equations.map((eq) => (
          <div
            key={eq.id}
            className={`p-4 rounded-lg border-2 transition-all ${
              eq.solved
                ? 'bg-green-900/50 border-green-500'
                : 'bg-slate-700 border-slate-600 hover:border-purple-500'
            }`}
          >
            <div className="text-white text-lg font-mono mb-3 text-center">
              {eq.equation}
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={eq.userAnswer}
                onChange={(e) => handleAnswerChange(eq.id, e.target.value)}
                disabled={eq.solved || !gameActive}
                placeholder="?"
                className={`flex-1 px-3 py-2 rounded border text-center font-bold ${
                  eq.solved
                    ? 'bg-green-100 border-green-400 text-green-800'
                    : 'bg-slate-800 border-slate-600 text-white focus:border-purple-500 focus:outline-none'
                }`}
              />
              
              <button
                onClick={() => checkAnswer(eq.id)}
                disabled={eq.solved || !gameActive || eq.userAnswer === ""}
                className={`px-4 py-2 rounded font-semibold transition-colors ${
                  eq.solved
                    ? 'bg-green-600 text-white cursor-not-allowed'
                    : eq.userAnswer === ""
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-500 text-white'
                }`}
              >
                {eq.solved ? '✓' : 'Check'}
              </button>
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
        <button
          onClick={generateNewEquations}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
        >
          New Equations
        </button>
      </div>

      <div className="text-center text-gray-400 text-sm max-w-md">
        <p>Solve all equations by finding the missing numbers!</p>
        <p className="mt-1">Enter your answer and click "Check" to verify.</p>
      </div>
    </div>
  );
};

export default MathEquationsGame;

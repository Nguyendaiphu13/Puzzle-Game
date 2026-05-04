import React, { useState, useEffect } from 'react';

interface GameBoardProps {
  initialHighscore?: number;
  currentScore?: number;
  isGameOver?: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({ 
  initialHighscore = 0, 
  currentScore = 0, 
  isGameOver: propIsGameOver = false 
}) => {
  const [status, setStatus] = useState('Idle');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(propIsGameOver);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && isPlaying) {
        setStatus('Jumping');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  return (
    <div>
      <button onClick={() => setIsPlaying(true)}>Bắt đầu</button>
      <button data-testid="trigger-collision" onClick={() => setIsGameOver(true)}>Trigger</button>

      <div data-testid="character-status">{status}</div>
      
      {isPlaying && <div data-testid="score-display">Score: {currentScore}</div>}

      {isGameOver && <div>GAME OVER</div>}
      {isGameOver && currentScore > initialHighscore && <div>New Highscore</div>}
    </div>
  );
};

export default GameBoard;
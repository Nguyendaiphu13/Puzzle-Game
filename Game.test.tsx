import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GameBoard from './GameBoard'; 

describe('FR-003 & FR-004: Module Gameplay', () => {

  it('TC_005: Bắt đầu và điều khiển nhân vật', () => {
    render(<GameBoard />);
    
    fireEvent.click(screen.getByRole('button', { name: /Bắt đầu/i }));
    fireEvent.keyDown(window, { key: ' ', code: 'Space' });

    expect(screen.getByTestId('character-status').textContent).toBe('Jumping');
    expect(screen.getByTestId('score-display')).toBeDefined();
  });

  it('TC_006: Va chạm và hiển thị Game Over', () => {
    const { container } = render(<GameBoard />);
    
    fireEvent.click(screen.getByRole('button', { name: /Bắt đầu/i }));
    fireEvent.click(screen.getByTestId('trigger-collision')); 

    expect(screen.getByText(/GAME OVER/i)).toBeDefined();
  });

  it('TC_007: Ghi nhận Kỷ lục mới (New Highscore)', () => {
    render(<GameBoard initialHighscore={100} currentScore={150} isGameOver={true} />);
    
    expect(screen.getByText(/New Highscore/i)).toBeDefined();
  });

});
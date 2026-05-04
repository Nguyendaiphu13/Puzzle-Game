import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Leaderboard from './Leaderboard';

describe('FR-005: Module Bảng xếp hạng', () => {

  it('TC_008: Hiển thị Bảng xếp hạng có dữ liệu', () => {
    const mockData = [
      { id: 1, username: 'player1', score: 500 },
      { id: 2, username: 'player2', score: 300 }
    ];

    render(<Leaderboard data={mockData} />);

    expect(screen.getByText('player1')).toBeDefined();
    expect(screen.getByText('500')).toBeDefined();
    expect(screen.getByText('player2')).toBeDefined();
    
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(1); 
  });

  it('TC_009: Hiển thị Bảng xếp hạng trống', () => {
    render(<Leaderboard data={[]} />);

    expect(screen.getByText(/Chưa có bảng xếp hạng/i)).toBeDefined();
  });

});
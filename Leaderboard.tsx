import React from 'react';

interface Player {
  id: number;
  username: string;
  score: number;
}

interface LeaderboardProps {
  data?: Player[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ data = [] }) => {
  if (data.length === 0) {
    return <div>Chưa có bảng xếp hạng</div>;
  }

  return (
    <table>
      <tbody>
        {data.map((player) => (
          <tr key={player.id}>
            <td>{player.username}</td>
            <td>{player.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
const medal = (rank) => ({ 1: '🥇', 2: '🥈', 3: '🥉' }[rank] || rank);

const trendClass = (trend) => {
  if (trend?.startsWith('+')) return 'leaderboard-trend leaderboard-trend--up';
  if (trend?.startsWith('-')) return 'leaderboard-trend leaderboard-trend--down';
  return 'leaderboard-trend';
};

export default function Leaderboard({ entries, compact = false }) {
  const visibleEntries = compact ? entries.slice(0, 5) : entries;
  return (
    <div className="leaderboard-table" role="table" aria-label="Weekly leaderboard">
      {visibleEntries.map((entry) => (
        <div className={`leaderboard-row ${entry.isCurrentUser ? 'leaderboard-row--current' : ''}`} key={entry.rank} role="row">
          <div className="rank" role="cell" aria-label={`Rank ${entry.rank}`}>{medal(entry.rank)}</div>
          <div className="avatar avatar--small" role="cell" aria-hidden="true">{entry.initials}</div>
          <div className="leaderboard-user" role="cell">
            <strong>{entry.name}</strong>
            <span>{entry.streak}-day streak</span>
          </div>
          <strong className="leaderboard-xp" role="cell">{entry.xp} XP</strong>
          <span className={trendClass(entry.trend)} role="cell" aria-label={`Trend ${entry.trend}`}>{entry.trend}</span>
        </div>
      ))}
    </div>
  );
}

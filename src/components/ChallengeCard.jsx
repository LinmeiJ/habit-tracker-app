export default function ChallengeCard({ challenge }) {
  const progress = Math.min((challenge.progress / challenge.total) * 100, 100);
  return (
    <article className="challenge-card">
      <div className="challenge-card__header">
        <div className="challenge-icon" aria-hidden="true">{challenge.icon}</div>
        <span className="pill">{challenge.label}</span>
      </div>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <div className="challenge-progress-row">
        <span>{challenge.progress} / {challenge.total}</span>
        <strong>+{challenge.reward} XP</strong>
      </div>
      <div className="progress-track progress-track--small">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </article>
  );
}

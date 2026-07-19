import { Lock } from 'lucide-react';

export default function AchievementGrid({ achievements, expanded = false }) {
  const visibleAchievements = expanded ? achievements : achievements.slice(0, 3);
  return (
    <div className="achievement-grid">
      {visibleAchievements.map((achievement) => (
        <article className={`achievement-card ${achievement.unlocked ? '' : 'achievement-card--locked'}`} key={achievement.id}>
          <div className="achievement-icon" aria-hidden="true">
            {achievement.unlocked ? achievement.icon : <Lock size={20} />}
          </div>
          <div>
            <span className={`rarity rarity--${achievement.rarity.toLowerCase()}`}>{achievement.rarity}</span>
            <h3>{achievement.name}</h3>
            <p>{achievement.description}</p>
            {!achievement.unlocked && (
              <div className="badge-progress">
                <div
                  className="progress-track progress-track--small"
                  role="progressbar"
                  aria-valuenow={achievement.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${achievement.name} progress`}
                >
                  <div className="progress-fill" style={{ width: `${achievement.progress}%` }} />
                </div>
                <small>{achievement.progress}%</small>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

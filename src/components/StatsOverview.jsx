import { Flame, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

export default function StatsOverview({ totalXp, level, completedToday, totalHabits, streak = 21, celebrate = false }) {
  const levelRequirement = 100;
  const currentLevelXp = totalXp % levelRequirement;
  const progress = Math.min((currentLevelXp / levelRequirement) * 100, 100);

  const stats = [
    { label: 'Current streak', value: `${streak} days`, helper: 'Personal best', icon: Flame, tone: 'orange' },
    { label: 'Total XP', value: totalXp.toLocaleString(), helper: `+${completedToday * 15} today`, icon: Sparkles, tone: 'purple' },
    { label: 'Habits today', value: `${completedToday}/${totalHabits}`, helper: `${Math.round((completedToday / totalHabits) * 100)}% complete`, icon: Trophy, tone: 'blue' },
    { label: 'Streak freezes', value: '2', helper: '1 earned in 6 days', icon: ShieldCheck, tone: 'green' },
  ];

  return (
    <section className="stats-section" aria-label="Progress overview">
      <article className={`level-card ${celebrate ? 'level-card--celebrate' : ''}`}>
        <div className="level-badge" aria-hidden="true">{level}</div>
        <div className="level-card__content">
          <div className="level-card__heading">
            <div>
              <p className="eyebrow">Level {level} · Trail marker {Math.floor(totalXp / 100)}</p>
              <h2>Committed</h2>
            </div>
            <strong>{currentLevelXp} / {levelRequirement} XP</strong>
          </div>

          <div
            className="trail-track"
            role="img"
            aria-label={`${Math.round(progress)} percent of the way to level ${level + 1}`}
          >
            <svg viewBox="0 0 300 20" preserveAspectRatio="none">
              <path
                className="trail-track__base"
                d="M2,10 C50,2 100,18 150,10 S250,2 298,10"
                pathLength="100"
              />
              <path
                className="trail-track__fill"
                d="M2,10 C50,2 100,18 150,10 S250,2 298,10"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={100 - progress}
              />
            </svg>
          </div>
          <p>{levelRequirement - currentLevelXp} XP until Level {level + 1} — keep the trail going.</p>
        </div>
      </article>

      <div className="stats-grid">
        {stats.map(({ label, value, helper, icon: Icon, tone }) => (
          <article className="stat-card" key={label}>
            <div className={`stat-icon stat-icon--${tone}`}><Icon size={21} aria-hidden="true" /></div>
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{helper}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

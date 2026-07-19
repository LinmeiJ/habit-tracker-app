import { Flame, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

export default function StatsOverview({ totalXp, level, completedToday, totalHabits }) {
  const currentLevelXp = totalXp - 1100;
  const levelRequirement = 300;
  const progress = Math.min((currentLevelXp / levelRequirement) * 100, 100);

  const stats = [
    { label: 'Current streak', value: '21 days', helper: 'Personal best', icon: Flame, tone: 'orange' },
    { label: 'Total XP', value: totalXp.toLocaleString(), helper: `+${completedToday * 15} today`, icon: Sparkles, tone: 'purple' },
    { label: 'Habits today', value: `${completedToday}/${totalHabits}`, helper: `${Math.round((completedToday / totalHabits) * 100)}% complete`, icon: Trophy, tone: 'blue' },
    { label: 'Streak freezes', value: '2', helper: '1 earned in 6 days', icon: ShieldCheck, tone: 'green' },
  ];

  return (
    <section className="stats-section" aria-label="Progress overview">
      <article className="level-card">
        <div className="level-badge">{level}</div>
        <div className="level-card__content">
          <div className="level-card__heading">
            <div>
              <p className="eyebrow">Level {level}</p>
              <h2>Committed</h2>
            </div>
            <strong>{currentLevelXp} / {levelRequirement} XP</strong>
          </div>
          <div className="progress-track" aria-label={`${Math.round(progress)} percent to next level`}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p>{levelRequirement - currentLevelXp} XP until Level {level + 1}</p>
        </div>
      </article>

      <div className="stats-grid">
        {stats.map(({ label, value, helper, icon: Icon, tone }) => (
          <article className="stat-card" key={label}>
            <div className={`stat-icon stat-icon--${tone}`}><Icon size={21} /></div>
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

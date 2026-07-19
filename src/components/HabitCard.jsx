import { Check, Flame } from 'lucide-react';

export default function HabitCard({ habit, onToggle }) {
  const intensity = habit.streak >= 30 ? '🔥🔥🔥' : habit.streak >= 14 ? '🔥🔥' : '🔥';

  return (
    <article className={`habit-card habit-card--${habit.color} ${habit.completed ? 'habit-card--completed' : ''}`}>
      <div className="habit-card__main">
        <div className="habit-icon" aria-hidden="true">{habit.icon}</div>
        <div className="habit-copy">
          <div className="habit-card__title-row">
            <div>
              <h3>{habit.name}</h3>
              <span>{habit.category}</span>
            </div>
            <button
              className={`complete-button ${habit.completed ? 'complete-button--done' : ''}`}
              onClick={() => onToggle(habit.id)}
              aria-label={habit.completed ? `Mark ${habit.name} incomplete` : `Complete ${habit.name}`}
            >
              {habit.completed ? <Check size={20} /> : `+${habit.xp} XP`}
            </button>
          </div>

          <div className="habit-meta">
            <span><Flame size={16} /> {habit.streak}-day streak {intensity}</span>
            <span>Best: {habit.longestStreak} days</span>
          </div>

          <div className="week-dots" aria-label="Last seven days">
            {habit.weeklyProgress.map((done, index) => (
              <span key={index} className={done ? 'week-dot week-dot--done' : 'week-dot'} aria-label={done ? 'Completed' : 'Not completed'}>
                {done && <Check size={12} />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

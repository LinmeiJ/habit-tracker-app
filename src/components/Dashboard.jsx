import { ArrowRight } from 'lucide-react';
import AchievementGrid from './AchievementGrid';
import ChallengeCard from './ChallengeCard';
import HabitList from './HabitList';
import Leaderboard from './Leaderboard';
import StatsOverview from './StatsOverview';

export default function Dashboard({ habits, onToggleHabit, onAddHabit, totalXp, level, achievements, challenges, leaderboard, setActiveView, celebrate }) {
  const completedToday = habits.filter((habit) => habit.completed).length;

  return (
    <>
      <StatsOverview totalXp={totalXp} level={level} completedToday={completedToday} totalHabits={habits.length} celebrate={celebrate} />
      <div className="dashboard-grid">
        <HabitList habits={habits} onToggle={onToggleHabit} onAddHabit={onAddHabit} />
        <aside className="dashboard-rail">
          <section className="panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Bonus goals</p>
                <h2>Challenges</h2>
              </div>
            </div>
            <div className="challenge-stack">
              {challenges.map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />)}
            </div>
          </section>

          <section className="panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">This week</p>
                <h2>Leaderboard</h2>
              </div>
              <button className="text-button" onClick={() => setActiveView('leaderboard')}>
                View all <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
            <Leaderboard entries={leaderboard} compact />
          </section>
        </aside>
      </div>

      <section className="panel achievements-preview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Milestones</p>
            <h2>Recent achievements</h2>
          </div>
          <button className="text-button" onClick={() => setActiveView('achievements')}>
            View gallery <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        <AchievementGrid achievements={achievements} />
      </section>
    </>
  );
}

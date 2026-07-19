import { Plus } from 'lucide-react';
import HabitCard from './HabitCard';

export default function HabitList({ habits, onToggle, onAddHabit }) {
  const completed = habits.filter((habit) => habit.completed).length;

  return (
    <section className="panel habits-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Today's trail</p>
          <h2>Your habits</h2>
        </div>
        <button className="secondary-button" onClick={onAddHabit}>
          <Plus size={18} aria-hidden="true" /> Add habit
        </button>
      </div>
      <div className="completion-summary">
        <strong>{completed} of {habits.length} complete</strong>
        <span>Keep going — every step covers ground.</span>
      </div>
      <div className="habit-list">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} onToggle={onToggle} />
        ))}
      </div>
    </section>
  );
}

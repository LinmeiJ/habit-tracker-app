import { useEffect, useMemo, useState } from 'react';
import AchievementGrid from './components/AchievementGrid';
import Dashboard from './components/Dashboard';
import EmptyView from './components/EmptyView';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Sidebar from './components/Sidebar';
import { achievements, challenges, initialHabits, leaderboard } from './data/mockData';

const getLevel = (xp) => Math.max(1, Math.floor(xp / 100) + 1);
const CURRENT_STREAK = 21;

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [habits, setHabits] = useState(initialHabits);
  const [totalXp, setTotalXp] = useState(1245);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('habitquest-theme') === 'dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('habitquest-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!celebrate) return undefined;
    const timer = window.setTimeout(() => setCelebrate(false), 1000);
    return () => window.clearTimeout(timer);
  }, [celebrate]);

  const level = useMemo(() => getLevel(totalXp), [totalXp]);

  const toggleHabit = (habitId) => {
    setHabits((current) => current.map((habit) => {
      if (habit.id !== habitId) return habit;
      const nextCompleted = !habit.completed;

      setTotalXp((xp) => {
        const nextXp = Math.max(0, xp + (nextCompleted ? habit.xp : -habit.xp));
        if (nextCompleted && getLevel(nextXp) > getLevel(xp)) {
          setCelebrate(true);
          setToast(`🎉 Level up! You reached Level ${getLevel(nextXp)}.`);
        } else {
          setToast(nextCompleted ? `+${habit.xp} XP earned! Great work.` : `${habit.name} marked incomplete.`);
        }
        return nextXp;
      });

      return {
        ...habit,
        completed: nextCompleted,
        weeklyProgress: [...habit.weeklyProgress.slice(0, -1), nextCompleted],
      };
    }));
  };

  const addHabit = () => {
    const newHabit = {
      id: Date.now(),
      name: 'Evening reflection',
      category: 'Mindfulness',
      icon: '✍️',
      color: 'purple',
      streak: 0,
      longestStreak: 0,
      completed: false,
      xp: 10,
      weeklyProgress: [false, false, false, false, false, false, false],
    };
    setHabits((current) => [...current, newHabit]);
    setToast('New habit added to your trail.');
  };

  const renderView = () => {
    if (activeView === 'dashboard') {
      return (
        <Dashboard
          habits={habits}
          onToggleHabit={toggleHabit}
          onAddHabit={addHabit}
          totalXp={totalXp}
          level={level}
          achievements={achievements}
          challenges={challenges}
          leaderboard={leaderboard}
          setActiveView={setActiveView}
          celebrate={celebrate}
        />
      );
    }

    if (activeView === 'achievements') {
      return (
        <section className="panel page-panel">
          <div className="page-heading">
            <p className="eyebrow">Badge gallery</p>
            <h2>Your achievements</h2>
            <p>Celebrate milestones and track progress toward your next unlock.</p>
          </div>
          <AchievementGrid achievements={achievements} expanded />
        </section>
      );
    }

    if (activeView === 'leaderboard') {
      return (
        <section className="panel page-panel">
          <div className="page-heading">
            <p className="eyebrow">Weekly group ranking</p>
            <h2>Leaderboard</h2>
            <p>Rankings reset every Monday. Friendly competition only.</p>
          </div>
          <Leaderboard entries={leaderboard} />
        </section>
      );
    }

    const views = {
      analytics: ['Analytics', 'Detailed habit trends, completion rates, and XP history will appear here.', '📈', 'Preview analytics'],
      groups: ['Accountability groups', 'Create small groups, invite friends, and encourage one another.', '🤝', 'Create a group'],
      settings: ['Settings', 'Manage appearance, privacy, notifications, and gamification preferences.', '⚙️', 'Open settings'],
    };
    const [title, description, icon, actionLabel] = views[activeView] || views.analytics;
    return <EmptyView title={title} description={description} icon={icon} actionLabel={actionLabel} />;
  };

  return (
    <div className="app-shell">
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        level={level}
      />
      {sidebarOpen && <button className="sidebar-backdrop" aria-label="Close navigation" onClick={() => setSidebarOpen(false)} />}
      <main className="app-main">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} onOpenMenu={() => setSidebarOpen(true)} streak={CURRENT_STREAK} />
        <div className="content-container">{renderView()}</div>
      </main>
      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  );
}

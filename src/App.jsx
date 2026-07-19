import { useEffect, useMemo, useState } from 'react';
import AchievementGrid from './components/AchievementGrid';
import Dashboard from './components/Dashboard';
import EmptyView from './components/EmptyView';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Sidebar from './components/Sidebar';
import { achievements, challenges, initialHabits, leaderboard } from './data/mockData';

const getLevel = (xp) => Math.max(1, Math.floor(xp / 100) + 1);

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [habits, setHabits] = useState(initialHabits);
  const [totalXp, setTotalXp] = useState(1245);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('habitquest-theme') === 'dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('habitquest-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const level = useMemo(() => getLevel(totalXp), [totalXp]);

  const toggleHabit = (habitId) => {
    setHabits((current) => current.map((habit) => {
      if (habit.id !== habitId) return habit;
      const nextCompleted = !habit.completed;
      setTotalXp((xp) => Math.max(0, xp + (nextCompleted ? habit.xp : -habit.xp)));
      setToast(nextCompleted ? `+${habit.xp} XP earned! Great work.` : `${habit.name} marked incomplete.`);
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
    setToast('New mock habit added.');
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
      analytics: ['Analytics', 'Detailed habit trends, completion rates, and XP history will appear here.', '📈'],
      groups: ['Accountability groups', 'Create small groups, invite friends, and encourage one another.', '🤝'],
      settings: ['Settings', 'Manage appearance, privacy, notifications, and gamification preferences.', '⚙️'],
    };
    const [title, description, icon] = views[activeView] || views.analytics;
    return <EmptyView title={title} description={description} icon={icon} />;
  };

  return (
    <div className="app-shell">
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {sidebarOpen && <button className="sidebar-backdrop" aria-label="Close navigation" onClick={() => setSidebarOpen(false)} />}
      <main className="app-main">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} onOpenMenu={() => setSidebarOpen(true)} />
        <div className="content-container">{renderView()}</div>
      </main>
      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  );
}

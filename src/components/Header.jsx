import { Bell, Flame, Menu, Moon, Sun } from 'lucide-react';

const getGreeting = (hour) => {
  if (hour < 5) return 'Still up';
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

export default function Header({ darkMode, setDarkMode, onOpenMenu, userName = 'Linmei', streak = 0 }) {
  const now = new Date();
  const dateLabel = now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  const greeting = getGreeting(now.getHours());

  return (
    <header className="topbar">
      <button className="icon-button mobile-menu" onClick={onOpenMenu} aria-label="Open navigation">
        <Menu size={22} />
      </button>
      <div>
        <p className="eyebrow">{dateLabel}</p>
        <h1>{greeting}, {userName} 👋</h1>
      </div>
      <div className="topbar__actions">
        <span className="streak-chip" aria-label={`${streak} day streak`}>
          <Flame size={15} /> {streak}
        </span>
        <button
          className="icon-button"
          onClick={() => setDarkMode((value) => !value)}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button className="icon-button notification-button" aria-label="Notifications, 1 unread">
          <Bell size={19} />
          <span className="notification-dot" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

import { Bell, Menu, Moon, Sun } from 'lucide-react';

export default function Header({ darkMode, setDarkMode, onOpenMenu }) {
  return (
    <header className="topbar">
      <button className="icon-button mobile-menu" onClick={onOpenMenu} aria-label="Open navigation">
        <Menu size={22} />
      </button>
      <div>
        <p className="eyebrow">Saturday, July 18</p>
        <h1>Good afternoon, Linmei 👋</h1>
      </div>
      <div className="topbar__actions">
        <button
          className="icon-button"
          onClick={() => setDarkMode((value) => !value)}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button className="icon-button notification-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>
      </div>
    </header>
  );
}

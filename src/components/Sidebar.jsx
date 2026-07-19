import { Award, BarChart3, LayoutDashboard, Settings, Trophy, Users, X } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'groups', label: 'Groups', icon: Users },
];

export default function Sidebar({ activeView, setActiveView, isOpen, onClose, level = 1 }) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`} aria-label="Primary navigation">
      <div className="sidebar__brand">
        <div className="brand-mark" aria-hidden="true">H</div>
        <div>
          <strong>HabitQuest</strong>
          <span>Every day is a mile marker</span>
        </div>
        <button className="icon-button sidebar__close" onClick={onClose} aria-label="Close navigation">
          <X size={20} />
        </button>
      </div>

      <nav className="sidebar__nav">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`nav-item ${activeView === id ? 'nav-item--active' : ''}`}
            aria-current={activeView === id ? 'page' : undefined}
            onClick={() => {
              setActiveView(id);
              onClose();
            }}
          >
            <Icon size={19} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <button className="nav-item" onClick={() => setActiveView('settings')}>
          <Settings size={19} aria-hidden="true" />
          <span>Settings</span>
        </button>
        <div className="mini-profile">
          <div className="avatar" aria-hidden="true">AM</div>
          <div>
            <strong>Linmei M.</strong>
            <span>Level {level} · Committed</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

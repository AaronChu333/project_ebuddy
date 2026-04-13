import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" id="navbar-brand">
          <span className="brand-icon">💕</span>
          <span className="brand-text">eBuddy</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link" id="nav-home">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/discover" className="nav-link" id="nav-discover">
                Discover
              </Link>
              <button onClick={signOut} className="btn btn-ghost" id="btn-signout">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary" id="nav-login">
              Get Started
            </Link>
          )}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            id="btn-theme-toggle"
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <span className="theme-icon">
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

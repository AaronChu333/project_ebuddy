import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" id="navbar-brand">
          <span className="brand-icon">eb</span>
          <span className="brand-text">eBuddy</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link" id="nav-home">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link" id="nav-dashboard">
                Dashboard
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
        </div>
      </div>
    </nav>
  );
}

import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const [serverStatus, setServerStatus] = useState(null);
  const [serverLoading, setServerLoading] = useState(true);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        setServerStatus(data);
        setServerLoading(false);
      })
      .catch(() => {
        setServerStatus({ status: 'offline' });
        setServerLoading(false);
      });
  }, []);

  return (
    <div className="page page-dashboard" id="page-dashboard">
      <div className="dashboard-header">
        <h1>Welcome to eBuddy</h1>
        <p className="dashboard-subtitle">
          Signed in as <strong>{user?.email}</strong>
        </p>
      </div>

      <div className="dashboard-grid">
        {/* User Info Card */}
        <div className="dash-card" id="card-user-info">
          <div className="dash-card-header">
            <span className="dash-card-icon">👤</span>
            <h3>Your Profile</h3>
          </div>
          <div className="dash-card-body">
            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">User ID</span>
              <span className="info-value mono">{user?.id?.slice(0, 16)}...</span>
            </div>
            <div className="info-row">
              <span className="info-label">Member since</span>
              <span className="info-value">
                {user?.created_at
                  ? new Date(user.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  : '—'}
              </span>
            </div>
          </div>
        </div>

        {/* Server Status Card */}
        <div className="dash-card" id="card-server-status">
          <div className="dash-card-header">
            <span className="dash-card-icon">🖥️</span>
            <h3>Server Status</h3>
          </div>
          <div className="dash-card-body">
            {serverLoading ? (
              <div className="status-loading">
                <span className="spinner-sm" /> Checking...
              </div>
            ) : serverStatus?.status === 'ok' ? (
              <>
                <div className="status-badge status-online">
                  <span className="status-dot" />
                  Online
                </div>
                <div className="info-row">
                  <span className="info-label">Environment</span>
                  <span className="info-value">{serverStatus.environment}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Last checked</span>
                  <span className="info-value mono">
                    {new Date(serverStatus.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </>
            ) : (
              <div className="status-badge status-offline">
                <span className="status-dot" />
                Offline — run <code>npm run dev:server</code>
              </div>
            )}
          </div>
        </div>

        {/* Quick Start Card */}
        <div className="dash-card dash-card-wide" id="card-quickstart">
          <div className="dash-card-header">
            <span className="dash-card-icon">🚀</span>
            <h3>Quick Start Guide</h3>
          </div>
          <div className="dash-card-body">
            <div className="quickstart-steps">
              <div className="step">
                <span className="step-num">1</span>
                <div>
                  <strong>Configure Supabase</strong>
                  <p>Create a project at supabase.com and add your API keys to <code>.env</code></p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">2</span>
                <div>
                  <strong>Define your schema</strong>
                  <p>Use the SQL editor or migrations to build your database tables</p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">3</span>
                <div>
                  <strong>Add API routes</strong>
                  <p>Create route files in <code>server/routes/</code> and register in <code>server/index.js</code></p>
                </div>
              </div>
              <div className="step">
                <span className="step-num">4</span>
                <div>
                  <strong>Build your pages</strong>
                  <p>Add pages in <code>client/src/pages/</code> and connect them in <code>App.jsx</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

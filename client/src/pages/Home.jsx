import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="page page-home" id="page-home">
      {/* ─── Hero ─── */}
      <section className="hero" id="hero-section">
        <div className="hero-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Now in public beta
          </div>
          <h1 className="hero-title">
            Meet your new
            <br />
            <span className="gradient-text">intelligent companion</span>
          </h1>
          <p className="hero-subtitle">
            eBuddy connects your tools, streamlines your workflow, and keeps everything
            you care about in one beautiful place.
          </p>
          <div className="hero-actions">
            {user ? (
              <Link to="/dashboard" className="btn btn-gradient btn-lg" id="hero-cta-dashboard">
                Open Dashboard
              </Link>
            ) : (
              <Link to="/login" className="btn btn-gradient btn-lg" id="hero-cta-login">
                Start for free
              </Link>
            )}
            <a
              href="https://supabase.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
              id="hero-cta-docs"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar (flush) ─── */}
      <section className="stats-bar" id="stats-section">
        <div className="stat-item">
          <div className="stat-value"><span className="accent">12k</span>+</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-item">
          <div className="stat-value"><span className="accent">99.9</span>%</div>
          <div className="stat-label">Uptime</div>
        </div>
        <div className="stat-item">
          <div className="stat-value"><span className="accent">50</span>ms</div>
          <div className="stat-label">Avg Response</div>
        </div>
        <div className="stat-item">
          <div className="stat-value"><span className="accent">4.9</span>★</div>
          <div className="stat-label">User Rating</div>
        </div>
      </section>

      {/* ─── Features (flush) ─── */}
      <section className="section-flush" id="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="section-label-dot" />
              Features
            </div>
            <h2 className="section-title">Everything you need,<br />nothing you don't</h2>
            <p className="section-subtitle">
              A focused set of tools that work together seamlessly — so you can stay in flow.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card" id="feature-auth">
              <div className="feature-icon">🔐</div>
              <h3>Authentication</h3>
              <p>
                Secure email & password auth with session management, protected routes,
                and context — ready out of the box.
              </p>
            </div>
            <div className="feature-card" id="feature-db">
              <div className="feature-icon">⚡</div>
              <h3>Real-time Database</h3>
              <p>
                Postgres powered by Supabase with real-time subscriptions and row-level
                security baked in.
              </p>
            </div>
            <div className="feature-card" id="feature-api">
              <div className="feature-icon">🔗</div>
              <h3>API Layer</h3>
              <p>
                Express backend with structured routes, JWT middleware, and admin
                operations — cleanly separated.
              </p>
            </div>
            <div className="feature-card" id="feature-ui">
              <div className="feature-icon">✨</div>
              <h3>Beautiful UI</h3>
              <p>
                Thoughtfully designed interface with clean typography, smooth
                animations, and responsive layouts.
              </p>
            </div>
            <div className="feature-card" id="feature-routing">
              <div className="feature-icon">🧭</div>
              <h3>Smart Routing</h3>
              <p>
                React Router v7 with protected routes, navigation guards, and
                clean URL structure.
              </p>
            </div>
            <div className="feature-card" id="feature-dx">
              <div className="feature-icon">🛠</div>
              <h3>Great DX</h3>
              <p>
                Vite for instant HMR, built-in API proxy, and a single command
                to start everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Stack (flush alt) ─── */}
      <section className="section-flush section-flush-alt" id="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="section-label-dot" />
              Stack
            </div>
            <h2 className="section-title">Powered by the best</h2>
            <p className="section-subtitle">
              Modern, battle-tested technologies that scale with you.
            </p>
          </div>
          <div className="tech-logos">
            <div className="tech-item">
              <span className="tech-label">React 19</span>
            </div>
            <div className="tech-divider">·</div>
            <div className="tech-item">
              <span className="tech-label">Node.js</span>
            </div>
            <div className="tech-divider">·</div>
            <div className="tech-item">
              <span className="tech-label">Supabase</span>
            </div>
            <div className="tech-divider">·</div>
            <div className="tech-item">
              <span className="tech-label">Vite</span>
            </div>
            <div className="tech-divider">·</div>
            <div className="tech-item">
              <span className="tech-label">Express</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA (flush) ─── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card" id="cta-card">
            <h2 className="cta-title">Ready to get started?</h2>
            <p className="cta-subtitle">
              Set up your project in under five minutes.
              No credit card required.
            </p>
            {user ? (
              <Link to="/dashboard" className="btn btn-white btn-lg" id="cta-btn-dashboard">
                Open Dashboard
              </Link>
            ) : (
              <Link to="/login" className="btn btn-white btn-lg" id="cta-btn-login">
                Create your account
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer" id="footer">
        <p>
          © 2026 <strong>eBuddy</strong> · Built with React, Node.js & Supabase
        </p>
      </footer>
    </div>
  );
}

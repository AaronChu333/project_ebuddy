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
            Now matching in your area
          </div>
          <h1 className="hero-title">
            Find someone
            <br />
            <span className="gradient-text">who gets you</span>
          </h1>
          <p className="hero-subtitle">
            eBuddy uses smart compatibility matching to connect you with people
            who share your interests, values, and vibe. Real connections start here.
          </p>
          <div className="hero-actions">
            {user ? (
              <Link to="/discover" className="btn btn-gradient btn-lg" id="hero-cta-discover">
                Start Discovering
              </Link>
            ) : (
              <Link to="/login" className="btn btn-gradient btn-lg" id="hero-cta-login">
                Join free today
              </Link>
            )}
            <a
              href="#how-it-works"
              className="btn btn-outline btn-lg"
              id="hero-cta-how"
            >
              How it works
            </a>
          </div>
        </div>
      </section>



      {/* ─── How It Works ─── */}
      <section className="section-flush" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="section-label-dot" />
              How It Works
            </div>
            <h2 className="section-title">Three steps to<br />your next date</h2>
            <p className="section-subtitle">
              No endless swiping. Our smart algorithm learns what you're looking for
              and finds people you'll actually click with.
            </p>
          </div>
          <div className="steps-row">
            <div className="step-card" id="step-1">
              <div className="step-number">01</div>
              <div className="step-emoji">✨</div>
              <h3>Create your profile</h3>
              <p>
                Tell us about yourself — your interests, what you're looking for,
                and what makes you unique.
              </p>
            </div>
            <div className="step-card" id="step-2">
              <div className="step-number">02</div>
              <div className="step-emoji">💘</div>
              <h3>Get matched</h3>
              <p>
                Our compatibility engine finds people who complement your personality
                and share your passions.
              </p>
            </div>
            <div className="step-card" id="step-3">
              <div className="step-number">03</div>
              <div className="step-emoji">💬</div>
              <h3>Start talking</h3>
              <p>
                Break the ice with conversation starters and take things at your
                own pace. No pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="section-flush section-flush-alt" id="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="section-label-dot" />
              Features
            </div>
            <h2 className="section-title">Dating done right</h2>
            <p className="section-subtitle">
              We built the features that actually matter for finding meaningful connections.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card" id="feature-matching">
              <div className="feature-icon">🧠</div>
              <h3>Smart Matching</h3>
              <p>
                Our AI learns your preferences and gets better at finding compatible
                matches with every interaction.
              </p>
            </div>
            <div className="feature-card" id="feature-verified">
              <div className="feature-icon">✅</div>
              <h3>Verified Profiles</h3>
              <p>
                Photo verification and identity checks keep our community authentic.
                No catfishing here.
              </p>
            </div>
            <div className="feature-card" id="feature-icebreaker">
              <div className="feature-icon">💬</div>
              <h3>Ice Breakers</h3>
              <p>
                Stuck on what to say? Our smart prompts help you start conversations
                that actually go somewhere.
              </p>
            </div>
            <div className="feature-card" id="feature-safe">
              <div className="feature-icon">🛡️</div>
              <h3>Safe & Private</h3>
              <p>
                End-to-end encryption for messages, and you control exactly who
                sees your profile.
              </p>
            </div>
            <div className="feature-card" id="feature-events">
              <div className="feature-icon">🎉</div>
              <h3>Local Events</h3>
              <p>
                Discover singles meetups and events in your area. Meeting in person
                is always better.
              </p>
            </div>
            <div className="feature-card" id="feature-compatibility">
              <div className="feature-icon">💯</div>
              <h3>Compatibility Score</h3>
              <p>
                See how well you match with someone before connecting — based on
                values, lifestyle, and interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-flush" id="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="section-label-dot" />
              Love Stories
            </div>
            <h2 className="section-title">They found each other</h2>
            <p className="section-subtitle">
              Real couples who connected on eBuddy
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "I was skeptical about dating apps, but eBuddy matched me with someone
                who actually shares my love for hiking and terrible puns. We've been
                together for 8 months!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div>
                  <strong>Sarah & Mike</strong>
                  <span>Matched in Portland</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The compatibility score was 94% and honestly? They weren't wrong.
                It's like the app read my mind about what I was looking for."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">J</div>
                <div>
                  <strong>James & Priya</strong>
                  <span>Matched in Austin</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Finally, a dating app that doesn't feel like a chore. The ice breakers
                made it so easy to start conversations. Got a date on my first week!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div>
                  <strong>Alex</strong>
                  <span>New York City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card" id="cta-card">
            <h2 className="cta-title">Your person is waiting</h2>
            <p className="cta-subtitle">
              Join millions of singles finding meaningful connections every day.
              It's free to start.
            </p>
            {user ? (
              <Link to="/discover" className="btn btn-white btn-lg" id="cta-btn-discover">
                Go to Discover
              </Link>
            ) : (
              <Link to="/login" className="btn btn-white btn-lg" id="cta-btn-login">
                Create your profile
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer" id="footer">
        <p>
          © 2026 <strong>eBuddy</strong> · Made with 💕 for real connections
        </p>
      </footer>
    </div>
  );
}

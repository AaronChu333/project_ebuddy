import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const PROFILES = [
  {
    id: 1,
    name: 'Mia',
    age: 26,
    location: 'San Francisco, CA',
    bio: 'Coffee enthusiast. Sunset chaser. Believe that the best conversations happen over tacos. Looking for someone who can keep up with my terrible jokes 😄',
    interests: ['Hiking', 'Photography', 'Cooking', 'Travel'],
    compatibility: 94,
    initial: 'M',
    color: '#E8567F',
  },
  {
    id: 2,
    name: 'Jordan',
    age: 28,
    location: 'Austin, TX',
    bio: 'Musician by night, software dev by day. I make a mean pasta carbonara and I\'m convinced my dog is smarter than most people I know.',
    interests: ['Music', 'Coding', 'Dogs', 'Pasta'],
    compatibility: 87,
    initial: 'J',
    color: '#7C5CFC',
  },
  {
    id: 3,
    name: 'Aisha',
    age: 25,
    location: 'New York, NY',
    bio: 'Bookworm with a gym membership I actually use. Let\'s debate whether the book or the movie was better over coffee ☕',
    interests: ['Reading', 'Fitness', 'Movies', 'Art'],
    compatibility: 91,
    initial: 'A',
    color: '#F59E0B',
  },
  {
    id: 4,
    name: 'Liam',
    age: 27,
    location: 'Seattle, WA',
    bio: 'Rock climbing, board games, and exploring new restaurants. Looking for someone who\'s down for spontaneous weekend road trips 🚗',
    interests: ['Climbing', 'Board Games', 'Food', 'Road Trips'],
    compatibility: 85,
    initial: 'L',
    color: '#10B981',
  },
  {
    id: 5,
    name: 'Sophia',
    age: 24,
    location: 'Los Angeles, CA',
    bio: 'Yoga teacher who loves live music and farmers markets. I believe in deep conversations, good energy, and extra guac 🥑',
    interests: ['Yoga', 'Live Music', 'Wellness', 'Vegan Food'],
    compatibility: 88,
    initial: 'S',
    color: '#EC4899',
  },
  {
    id: 6,
    name: 'Ethan',
    age: 29,
    location: 'Chicago, IL',
    bio: 'Architecture nerd and amateur chef. I\'ll plan the perfect date if you bring the good vibes. Let\'s explore the city together 🏙️',
    interests: ['Architecture', 'Cooking', 'Urban Exploring', 'Design'],
    compatibility: 82,
    initial: 'E',
    color: '#6366F1',
  },
];

export default function Discover() {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState([]);
  const [passed, setPassed] = useState([]);
  const [animDirection, setAnimDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentProfile = PROFILES[currentIndex];
  const isFinished = currentIndex >= PROFILES.length;
  const remaining = Math.max(0, PROFILES.length - currentIndex);

  const handleAction = (action) => {
    if (isAnimating || isFinished) return;
    setIsAnimating(true);
    setAnimDirection(action === 'like' ? 'right' : 'left');

    setTimeout(() => {
      if (action === 'like') {
        setLiked((prev) => [...prev, currentProfile.id]);
      } else {
        setPassed((prev) => [...prev, currentProfile.id]);
      }
      setCurrentIndex((prev) => prev + 1);
      setAnimDirection(null);
      setIsAnimating(false);
    }, 300);
  };

  const resetProfiles = () => {
    setCurrentIndex(0);
    setLiked([]);
    setPassed([]);
  };

  return (
    <div className="page page-discover" id="page-discover">
      <div className="discover-header">
        <div>
          <h1>Discover</h1>
          <p className="discover-subtitle">
            Hey <strong>{user?.email?.split('@')[0]}</strong>, here are your top matches today
          </p>
        </div>
        <div className="discover-stats">
          <div className="mini-stat">
            <span className="mini-stat-value">{liked.length}</span>
            <span className="mini-stat-label">Liked</span>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-value">{remaining}</span>
            <span className="mini-stat-label">Remaining</span>
          </div>
        </div>
      </div>

      <div className="discover-content">
        {isFinished ? (
          <div className="discover-empty" id="discover-empty">
            <div className="empty-icon">🎉</div>
            <h2>You've seen everyone!</h2>
            <p>
              You liked <strong>{liked.length}</strong> out of {PROFILES.length} profiles today.
              Check back tomorrow for new matches!
            </p>
            <button className="btn btn-gradient btn-lg" onClick={resetProfiles}>
              Start Over
            </button>
          </div>
        ) : (
          <div className="profile-card-wrapper">
            <div
              className={`profile-card ${animDirection === 'left' ? 'swipe-left' : ''} ${animDirection === 'right' ? 'swipe-right' : ''}`}
              id="profile-card"
            >
              <div className="profile-card-top">
                <div
                  className="profile-avatar-large"
                  style={{ background: currentProfile.color }}
                >
                  {currentProfile.initial}
                </div>
                <div className="compatibility-badge">
                  <span className="compat-value">{currentProfile.compatibility}%</span>
                  <span className="compat-label">Match</span>
                </div>
              </div>

              <div className="profile-card-info">
                <h2>
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <p className="profile-location">📍 {currentProfile.location}</p>
                <p className="profile-bio">{currentProfile.bio}</p>
                <div className="profile-interests">
                  {currentProfile.interests.map((interest) => (
                    <span key={interest} className="interest-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="profile-actions">
                <button
                  className="action-btn action-pass"
                  id="btn-pass"
                  onClick={() => handleAction('pass')}
                  title="Pass"
                >
                  ✕
                </button>
                <button
                  className="action-btn action-like"
                  id="btn-like"
                  onClick={() => handleAction('like')}
                  title="Like"
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

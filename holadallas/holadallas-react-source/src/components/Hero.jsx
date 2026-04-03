import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-pill">
            <div className="hero-pill-dot" />
            Dallas-Fort Worth's City Guide
          </div>
          <h1 className="hero-title">
            Your City.<br />
            <span className="gradient-text">Your Vibe.</span><br />
            Your Guide.
          </h1>
          <p className="hero-sub">
            Discover the best events, restaurants, nightlife, and local businesses across DFW.
            Connect with your community. Stay in the know.
          </p>
          <div className="hero-actions">
            <a href="#explore" className="btn-primary">Explore DFW →</a>
            <a href="#advertise" className="btn-outline">List Your Business</a>
          </div>
        </div>
        <div className="hero-right">
          {[
            { emoji: '🍴', title: 'New: Taco Pop-Up', sub: 'Deep Ellum, Dallas', tag: 'Trending', tagClass: 'fc-tag-pink' },
            { emoji: '🎪', title: 'Night Market', sub: 'April 12 / 6PM', tag: 'This Weekend', tagClass: 'fc-tag-yellow' },
            { emoji: '🍸', title: 'Rooftop Happy Hour', sub: 'Uptown, Dallas', tag: '$6 Margs', tagClass: 'fc-tag-blue' },
            { emoji: '💪', title: 'Fitness Collective', sub: 'Free First Class', tag: 'New Listing', tagClass: 'fc-tag-green' },
          ].map((card, i) => (
            <div className="float-card" key={i}>
              <div className="fc-emoji">{card.emoji}</div>
              <div className="fc-title">{card.title}</div>
              <div className="fc-sub">{card.sub}</div>
              <div className={`fc-tag ${card.tagClass}`}>{card.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

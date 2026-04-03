import './Categories.css';

const cats = [
  { emoji: '🍴', title: 'Restaurants & Food', cls: 'cat-food', href: '#directory' },
  { emoji: '🍸', title: 'Nightlife & Bars', cls: 'cat-nightlife', href: '#directory' },
  { emoji: '🎪', title: 'Events & Festivals', cls: 'cat-events', href: '#events' },
  { emoji: '🛒', title: 'Local Services', cls: 'cat-services', href: '#directory' },
];

function Categories() {
  return (
    <section className="section" id="explore">
      <div className="container">
        <div className="section-header">
          <div className="section-tag tag-pink">Explore</div>
          <h2 className="section-title">Find Your Next Move</h2>
          <p className="section-desc">From late-night tacos to rooftop views, weekend festivals to everyday essentials.</p>
        </div>
        <div className="cat-grid">
          {cats.map((c, i) => (
            <a href={c.href} className={`cat-card ${c.cls}`} key={i}>
              <div className="cat-arrow">↗</div>
              <div className="cat-content">
                <div className="cat-icon">{c.emoji}</div>
                <div className="cat-title">{c.title}</div>
                <div className="cat-count">Coming Soon</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

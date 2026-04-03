import './Community.css';

const posts = [
  { initial: 'M', name: 'Maria G.', time: '2 hours ago', grad: 'linear-gradient(135deg, #FF2D87, #FF6B2B)', text: 'Just discovered this incredible taco spot in Oak Cliff. Authentic al pastor, handmade tortillas, and the salsa verde is unreal. If you know, you know.', likes: 48, replies: 12 },
  { initial: 'J', name: 'James T.', time: '5 hours ago', grad: 'linear-gradient(135deg, #A855F7, #00C2FF)', text: 'Anyone going to the Deep Ellum night market next weekend? Looking for people to check out the live music with. First time in Dallas and this city already has me hooked.', likes: 31, replies: 8 },
  { initial: 'S', name: 'Sarah K.', time: 'Yesterday', grad: 'linear-gradient(135deg, #FFCC00, #7BFF3A)', text: 'PSA: The new rooftop bar on Henderson Ave has $6 margs on Wednesdays. View of the skyline is incredible. You\'re welcome.', likes: 92, replies: 24 },
];

const trending = ['Best brunch spots in Dallas', 'Deep Ellum vs. Bishop Arts', 'Weekend road trips from DFW', 'Hidden speakeasies in Uptown', 'Best food trucks right now', 'Live music this weekend'];

function Community() {
  return (
    <section className="section section-white" id="community">
      <div className="container">
        <div className="section-header">
          <div className="section-tag tag-grape">Community</div>
          <h2 className="section-title">DFW Is Talking</h2>
          <p className="section-desc">Recommendations, hot takes, and hidden gems from people who know Dallas best.</p>
        </div>
        <div className="community-layout">
          <div className="community-feed">
            {posts.map((p, i) => (
              <div className="comm-card" key={i}>
                <div className="comm-header">
                  <div className="comm-avatar" style={{ background: p.grad }}>{p.initial}</div>
                  <div>
                    <div className="comm-name">{p.name}</div>
                    <div className="comm-time">{p.time}</div>
                  </div>
                </div>
                <div className="comm-text">{p.text}</div>
                <div className="comm-engage">
                  <span>❤️ {p.likes}</span>
                  <span>💬 {p.replies}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="comm-sidebar">
              <div className="comm-sidebar-title">🔥 Trending Topics</div>
              {trending.map((t, i) => (
                <div className="comm-topic" key={i}>
                  <div className="comm-topic-num">{String(i + 1).padStart(2, '0')}</div>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;

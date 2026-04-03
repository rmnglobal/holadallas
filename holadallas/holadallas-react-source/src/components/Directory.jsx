import './Directory.css';

const listings = [
  { emoji: '🍴', name: 'Your Restaurant Here', loc: 'Deep Ellum, Dallas', desc: 'Featured listing available. Get your business in front of thousands of DFW locals.', visual: 'biz-food', badge: 'Restaurant', badgeClass: 'badge-food' },
  { emoji: '🍸', name: 'Your Bar or Club Here', loc: 'Uptown, Dallas', desc: "Reach the nightlife crowd. Premium placement on DFW's fastest-growing city guide.", visual: 'biz-night', badge: 'Nightlife', badgeClass: 'badge-night' },
  { emoji: '🛒', name: 'Your Business Here', loc: 'DFW Metroplex', desc: 'From fitness studios to barbershops. Showcase your service to the DFW community.', visual: 'biz-service', badge: 'Services', badgeClass: 'badge-service' },
];

function Directory() {
  return (
    <section className="section" id="directory">
      <div className="container">
        <div className="section-header">
          <div className="section-tag tag-blue">Directory</div>
          <h2 className="section-title">Featured Businesses</h2>
          <p className="section-desc">Local spots handpicked by the HolaDallas community. Want to be featured? Get in touch.</p>
        </div>
        <div className="biz-grid">
          {listings.map((biz, i) => (
            <div className="biz-card" key={i}>
              <div className={`biz-visual ${biz.visual}`}>
                <div className={`biz-badge ${biz.badgeClass}`}>{biz.badge}</div>
                <span className="biz-emoji">{biz.emoji}</span>
              </div>
              <div className="biz-body">
                <div className="biz-name">{biz.name}</div>
                <div className="biz-loc">📍 {biz.loc}</div>
                <div className="biz-desc">{biz.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Directory;

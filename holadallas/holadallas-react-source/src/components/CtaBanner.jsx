import './CtaBanner.css';

function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <h2 className="cta-title">Put Your Brand<br />On the Map</h2>
        <p className="cta-desc">Reach thousands of DFW locals looking for their next favorite spot. Feature your business, promote your events, and grow your presence.</p>
        <div className="cta-buttons">
          <a href="#advertise" className="btn-white">Get Featured →</a>
          <a href="#advertise" className="btn-ghost">Submit an Event</a>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;

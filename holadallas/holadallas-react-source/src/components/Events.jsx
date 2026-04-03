import events from '../data/events';
import './Events.css';

function Events({ onSelectEvent }) {
  return (
    <section className="section section-white" id="events">
      <div className="container">
        <div className="section-header">
          <div className="section-tag tag-yellow">What's Happening</div>
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-desc">The best of DFW, curated. Festivals, pop-ups, concerts, and community gatherings.</p>
        </div>
        <div className="events-list">
          {events.map((ev) => (
            <div
              key={ev.id}
              className={`event-row ${ev.featured ? 'event-featured' : ''}`}
              onClick={() => onSelectEvent(ev)}
            >
              <div className="event-date-block">
                <div className="event-month">{ev.month}</div>
                <div className="event-day">{ev.day}</div>
              </div>
              <div className="event-divider" style={{ background: ev.dividerColor }} />
              <div className="event-info">
                {ev.featured && <div className="event-badge badge-featured">Featured</div>}
                {ev.free && <div className="event-badge badge-free">Free Entry</div>}
                <div className="event-name">{ev.title}</div>
                <div className="event-meta">
                  <span>📍 {ev.location}</span>
                  <span>🕐 {ev.time}</span>
                </div>
              </div>
              <div className="event-ticket">
                {ev.price && <span className="ticket-price">{ev.price}</span>}
                <span className={`ticket-btn ${ev.free ? 'ticket-btn-free' : ''}`}>
                  {ev.free ? 'RSVP Free ✓' : 'Get Tickets 🎫'}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="#advertise" className="btn-primary">Submit Your Event →</a>
        </div>
      </div>
    </section>
  );
}

export default Events;

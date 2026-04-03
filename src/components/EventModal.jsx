import { useEffect } from 'react';
import './EventModal.css';

function EventModal({ event, onClose }) {
  useEffect(() => {
    if (event) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => { window.removeEventListener('keydown', handleEsc); document.body.style.overflow = ''; };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-banner" style={{ background: event.banner }}>
          <span className="modal-banner-emoji">{event.emoji}</span>
        </div>
        <div className="modal-body">
          <div className="modal-date">{event.date}</div>
          <h2 className="modal-title">{event.title}</h2>
          <div className="modal-details">
            <span>📍 {event.location}</span>
            <span>🕐 {event.time}</span>
          </div>
          <p className="modal-desc">{event.desc}</p>
          <div className="modal-tiers-title">Select Tickets</div>
          {event.tiers.map((tier, i) => (
            <div className="ticket-tier" key={i}>
              <div className="tier-info">
                <div className="tier-name">{tier.name}</div>
                <div className="tier-desc">{tier.desc}</div>
              </div>
              <div className="tier-right">
                <div className={`tier-price ${tier.free ? 'tier-price-free' : ''}`}>{tier.price}</div>
                <a
                  href={tier.stripeUrl}
                  className={`tier-buy ${tier.free ? 'tier-buy-free' : ''}`}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.free ? 'RSVP Free ✓' : 'Buy →'}
                </a>
              </div>
            </div>
          ))}
          <div className="modal-footer-note">Secure checkout powered by Stripe. Tickets delivered to your email.</div>
        </div>
      </div>
    </div>
  );
}

export default EventModal;

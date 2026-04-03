import { useState } from 'react';
import './AdvertiseForm.css';

function AdvertiseForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    form.target = 'hidden_iframe';
    form.submit();
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <section className="form-section" id="advertise">
      <div className="container">
        <div className="form-layout">
          <div>
            <div className="section-tag tag-pink">Partner With Us</div>
            <h2 className="section-title">Advertise on HolaDallas</h2>
            <p className="form-info-desc">Whether you're a restaurant, bar, event organizer, or local business, HolaDallas puts you in front of the DFW audience that matters.</p>
            <ul className="form-perks">
              <li><div className="perk-icon pi-pink">★</div>Featured placement on the homepage and category pages</li>
              <li><div className="perk-icon pi-yellow">📅</div>Event listings with full details and direct links</li>
              <li><div className="perk-icon pi-blue">📣</div>Brand spotlight posts shared across our community</li>
              <li><div className="perk-icon pi-green">📈</div>Analytics on views, clicks, and engagement</li>
              <li><div className="perk-icon pi-grape">👥</div>Priority support and dedicated account manager</li>
            </ul>
          </div>
          <div className="form-card">
            <h3>Get Started</h3>
            {!submitted ? (
              <form
                action="https://docs.google.com/forms/d/e/PLACEHOLDER/formResponse"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="fg"><label>Business / Brand Name</label><input type="text" name="entry.PLACEHOLDER1" required placeholder="Your business name" /></div>
                <div className="fg"><label>Contact Name</label><input type="text" name="entry.PLACEHOLDER2" required placeholder="Your full name" /></div>
                <div className="fg"><label>Email Address</label><input type="email" name="entry.PLACEHOLDER3" required placeholder="you@email.com" /></div>
                <div className="fg"><label>Phone Number</label><input type="tel" name="entry.PLACEHOLDER4" placeholder="(214) 555-0000" /></div>
                <div className="fg">
                  <label>What are you looking for?</label>
                  <select name="entry.PLACEHOLDER5">
                    <option value="">Select an option</option>
                    <option value="featured_listing">Featured Business Listing</option>
                    <option value="event_promo">Event Promotion</option>
                    <option value="brand_partnership">Brand Partnership</option>
                    <option value="advertising">Advertising</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="fg"><label>Tell us more</label><textarea name="entry.PLACEHOLDER6" placeholder="What does your business do? What are you looking to promote?" /></div>
                <button type="submit" className="form-submit">Send Inquiry →</button>
              </form>
            ) : (
              <div className="form-success">
                <div className="form-success-emoji">🎉</div>
                <div className="form-success-title">Got it!</div>
                <div className="form-success-sub">We'll be in touch within 24 hours.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvertiseForm;

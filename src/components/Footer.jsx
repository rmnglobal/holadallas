import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo"><span className="f-hola">Hola</span>Dallas</div>
            <p className="footer-tagline">Your City. Your Vibe. Your Guide. Discover the best of Dallas-Fort Worth, all in one place.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#explore">Restaurants</a>
            <a href="#explore">Nightlife</a>
            <a href="#events">Events</a>
            <a href="#explore">Local Services</a>
          </div>
          <div className="footer-col">
            <h4>Community</h4>
            <a href="#community">Feed</a>
            <a href="#community">Trending</a>
            <a href="#advertise">Submit Event</a>
            <a href="#advertise">List Business</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#advertise">Advertise</a>
            <a href="mailto:hello@holadallas.com">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 HolaDallas. All rights reserved.</div>
          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

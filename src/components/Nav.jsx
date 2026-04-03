import { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const curr = window.pageYOffset;
      setHidden(curr > last && curr > 200);
      last = curr;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${hidden ? 'nav-hidden' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="logo-hola">Hola</span>
          <span className="logo-dallas">Dallas</span>
        </a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#explore" onClick={() => setOpen(false)}>Explore</a>
          <a href="#events" onClick={() => setOpen(false)}>Events</a>
          <a href="#directory" onClick={() => setOpen(false)}>Directory</a>
          <a href="#community" onClick={() => setOpen(false)}>Community</a>
          <a href="#advertise" className="nav-cta" onClick={() => setOpen(false)}>Advertise</a>
        </div>
        <button className={`nav-toggle ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Nav;

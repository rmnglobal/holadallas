import './Marquee.css';

const items = ['Restaurants', 'Nightlife', 'Live Music', 'Food Trucks', 'Art Shows', 'Pop-Ups', 'Fitness', 'Community', 'Local Shops', 'Happy Hours'];

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

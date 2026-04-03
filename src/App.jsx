import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import Events from './components/Events';
import Directory from './components/Directory';
import Community from './components/Community';
import CtaBanner from './components/CtaBanner';
import AdvertiseForm from './components/AdvertiseForm';
import Footer from './components/Footer';
import EventModal from './components/EventModal';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Categories />
      <Events onSelectEvent={setSelectedEvent} />
      <Directory />
      <Community />
      <CtaBanner />
      <AdvertiseForm />
      <Footer />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
}

export default App;

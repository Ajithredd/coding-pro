// src/App.tsx
import React from 'react';
import Page1 from './pages/Page1';
import Footer from './components/Footer';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Explore from './pages/Explore';
import JoinUs from './pages/JoinUs';
import News from './pages/News';
import Mentor from './pages/Mentor';
import Students from './pages/Students';
import Offer from './pages/Offer';
import Page4 from './pages/Page4';

const App: React.FC = () => {
  return (
    <div className="font-sans">
     <Page1/>
     <Page2/>
     <Page3/>
     <Offer/>
     <Page4/>
     <Students/>
     <Mentor/>
     <News/>
     <JoinUs/>
     <Explore/>
     <Footer/>
    </div>
  );
}

export default App;

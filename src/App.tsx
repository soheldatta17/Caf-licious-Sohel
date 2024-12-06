import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RewardsPage from './components/RewardsPage';
import Menu from './components/Menu';
import GiftCardsPage from './components/GiftCards';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

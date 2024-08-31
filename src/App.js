import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Page/About';
import 'aos/dist/aos.css';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Contact from './Page/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* === Home Page === */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;

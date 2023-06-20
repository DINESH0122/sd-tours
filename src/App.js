import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Tours from './components/Tours';
import Services from './components/services';


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;

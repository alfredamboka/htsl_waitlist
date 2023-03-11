import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

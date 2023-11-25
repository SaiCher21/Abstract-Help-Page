
import './App.css';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import Body from './Components/Body/Body';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <HeroSection/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;

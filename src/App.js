import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe.js';
import Home from './PortfolioContainer/Home/Home.js';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Skill from './PortfolioContainer/Skill/Skill';
import Services from './PortfolioContainer/Services/Services';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Teams from './PortfolioContainer/Teams/Teams';
import Footer from './PortfolioContainer/Footer/Footer';


function App() {
  return  <div className="App"  >
  <Navbar/>,
  <Home/>,
  <AboutMe/>,
  <Services/>,
  <Skill/>,
  <Teams/>,
  <ContactMe/>,
  <Footer/>

  </div>;
}

export default App;
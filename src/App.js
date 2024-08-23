import Header from './components/Header/Header.tsx';
import './App.css';
import Home from './components/Home/Home.tsx';
import About from './components/About/About.tsx';
import Certificates from './components/Certificates/certificates.tsx';
import Contact from './components/Contact/Contact.tsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Certificates/>
    <Contact/>
    </div>
  );
}

export default App;

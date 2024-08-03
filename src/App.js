import Header from './components/Header.tsx';
import './App.css';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Certificates from './components/certificates.tsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Certificates/>
    </div>
  );
}

export default App;

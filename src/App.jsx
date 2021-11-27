
import './App.scss';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import { BrowserRouter, Route } from "react-router-dom";
import ContactMe from './components/ContactMe.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <div className="section1">
        <Home />
        </div>
        <div className="section2">
        <Projects />
        </div>
        <div className="section3">
        <ContactMe />
        </div>
      </div>
      {/* <BrowserRouter>
        
            <Route exact path="/" component={Home} />  
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
      </BrowserRouter> */}


    </div>
  );
}

export default App;



import './App.scss';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import { BrowserRouter, Route } from "react-router-dom";
import ContactMe from './components/ContactMe.jsx';

function App() {
  return (
    <div className="App">
      <div className="header">
      <Header />
      </div>
      
      <div className="sections">
        <Home />
        <Projects />
        <ContactMe />
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


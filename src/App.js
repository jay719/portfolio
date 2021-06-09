
import './App.css';
import Header from './components/Header.js'
import  Home from './components/Home.js'
import Projects from './components/Projects.js'
import { BrowserRouter, Route } from "react-router-dom";
import Resume from './components/Resume.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
            <Route exact path="/" component={Home} />  
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
      </BrowserRouter>
    </div>
  );
}

export default App;


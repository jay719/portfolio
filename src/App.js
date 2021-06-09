
import './App.css';
import Header from './components/Header.js'
import  Home from './components/Home.js'
import Projects from './components/Projects.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <main>
          <nav>
            <Header />
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />  
            <Route path="/projects" component={Projects} />
          </Switch>
        </main>
      </Router>
      
      <div>
          <p>Hello</p>
          <h1>two</h1>
      </div>
    </div>
  );
}

export default App;

